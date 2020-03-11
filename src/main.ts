import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const morgan = require('morgan')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  await app.listen(3000);
}
bootstrap();
