import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import configs from 'src/configs';

async function bootstrap() {
  const PORT = configs.port;
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
        .setTitle('API')
        .setDescription('Documentation for api')
        .setVersion('1.0.0')
        .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Application is running on: ${PORT}`));
}
bootstrap();
