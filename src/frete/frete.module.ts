import { Module } from '@nestjs/common';
import { FreteService } from './services/frete.service';
import { FreteController } from './controllers/frete.controller';

@Module({
  providers: [FreteService],
  controllers: [FreteController],
})
export class FreteModule {}
