import {
  Controller,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { ImageKitService } from '../services/imagekit.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@Controller('images')
@ApiTags('ImageKit')
@ApiBearerAuth()
export class ImageController {
  constructor(private readonly imagekitService: ImageKitService) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Arquivo a ser enviado para o ImageKit',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'Arquivo a ser enviado (multipart/form-data)',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'URL da imagem no ImageKit' })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Query('folder') folder: string,
  ) {
    const result = await this.imagekitService.uploadFile(
      file,
      folder || 'produtos',
    );
    return result;
  }
}
