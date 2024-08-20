import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { IResultadoFrete } from '../models/resultado-frete';

@Injectable()
export class FreteService {
  async calcularFrete(cepOrigem: string): Promise<IResultadoFrete[]> {
    const data = {
      from: {
        postal_code: cepOrigem,
      },
      to: {
        postal_code: '90570020',
      },
      package: {
        height: 4,
        width: 12,
        length: 17,
        weight: 0.3,
      },
      services: '1,3',
    };

    const apiFreteUrl = process.env.API_FRETE_URL;

    try {
      const response = await axios.post(apiFreteUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_FRETE_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Erro ao calcular o frete',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
