import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    @Inject('Custom_Key') private readonly customValue: string,
  ) {}
  getHello(): string {
    return this.configService.get('SECRET');
  }
}
