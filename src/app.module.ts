import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ImageKitModule } from './imagekit/imagekit.module';
import { SeedingModule } from './database/seeding/seeding.module';
import { DatabaseModule } from './database/database.module';
import { FreteModule } from './frete/frete.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
      isGlobal: true,
    }),
    DatabaseModule,
    CategoriaModule,
    ProdutoModule,
    UsuarioModule,
    AuthModule,
    ImageKitModule,
    SeedingModule,
    FreteModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
