import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  default() {
    return 'This is the default page. Please hit the setting and account endpoints.';
  }
}
