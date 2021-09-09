import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MODULOS_SERVERLESS_NESTJS} from "./common/constantes/modulos-serverless-nestjs";
import {ConfigModule} from "@nestjs/config";
import {environment} from "./environment/environment";
import config from "./environment/config";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: environment['.env'],
        load: [config],
        isGlobal: true
      }),
      ...MODULOS_SERVERLESS_NESTJS
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
