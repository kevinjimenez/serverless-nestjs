import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(): string {
    console.log('hahaha que');
    return this.appService.getHello();
  }

  @Get('hello')
  getHello(): string {
    console.log('hahaha que');
    return this.appService.getHello();
  }

  @Post('post')
  postHello(@Body() datos: any): string {
    console.log('hahaha que');
    console.log(datos);
    return this.appService.getHello();
  }
}
