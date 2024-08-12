import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { FreteService } from '../services/frete.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Frete')
@Controller('/frete')
@ApiBearerAuth()
export class FreteController {
  constructor(private readonly freteService: FreteService) {}

  @Post('/calcular')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        cepOrigem: {
          type: 'string',
          description: 'O CEP de origem',
          example: '11111111',
        },
      },
      required: ['cepOrigem'],
    },
  })
  async calcularFrete(@Body('cepOrigem') cepOrigem: string) {
    return this.freteService.calcularFrete(cepOrigem);
  }
}
