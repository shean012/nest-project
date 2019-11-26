import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://your DataBase location herf and config', { useNewUrlParser: true }),
    InfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
