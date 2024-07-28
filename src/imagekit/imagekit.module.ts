import { Module } from '@nestjs/common';
import { ImageController } from './controllers/imagekit.controller';
import { ImageKitService } from './services/imagekit.service';

@Module({
  controllers: [ImageController],
  providers: [ImageKitService],
})
export class ImageKitModule {}
