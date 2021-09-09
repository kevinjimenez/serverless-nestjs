import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `${this.appService.getHello()} - ${process.env.PORT}`;
  }

  @Post('metodo-post')
  metodoPost(
      @Body() dataBody: any
  ) {
    return dataBody;
  }

  @Put('metodo-put/:id')
  metodoPut(
      @Param('id', ParseIntPipe) id: number,
      @Body() dataBody: any
  ) {
    return {...dataBody, id};
  }

  @Delete('metodo-delete')
  metodoDelete(
      @Query() dataQuery: any
  ) {
    return {
      dataQuery
    };
  }
}
