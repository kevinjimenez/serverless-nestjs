import { Injectable } from '@nestjs/common';
import * as msal from '@azure/msal-node'


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUrl() {
    return 'Hello World!';
  }
}
