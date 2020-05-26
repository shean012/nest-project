import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // 'mongodb://your DataBase location herf and config'
    MongooseModule.forRoot('mongodb://shean:shean012@www.shean.net.cn:27017/testDB', { useNewUrlParser: true }),
    InfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
