import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { imagekit } from '../imagekit.config';

@Injectable()
export class ImageKitService {
  async uploadFile(file: Express.Multer.File, folder: string): Promise<any> {
    if (!file)
      throw new HttpException(
        'Ocorreu um erro ao enviar o arquivo!',
        HttpStatus.NOT_FOUND,
      );

    const megabyte = 1000000;

    if (file.size > 4 * megabyte) {
      throw new HttpException(
        'Erro: O tamanho da imagem é superior a 4 MB',
        HttpStatus.NOT_FOUND,
      );
    }

    const response = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder,
    });
    return response;
  }
}
