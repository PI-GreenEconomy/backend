import { Controller, Post, UseGuards } from '@nestjs/common';
import { SeedingService } from './seeding.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@ApiTags('Seed')
@Controller('seeding')
@ApiBearerAuth()
export class SeedingController {
  constructor(private readonly seedingService: SeedingService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  seed() {
    return this.seedingService.seed();
  }
}
