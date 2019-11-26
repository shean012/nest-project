import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { InfoSchema } from '../dataSource/mongoDB/info.schema'
import { InfoService } from './info.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'infoModel', schema: InfoSchema } 
    ])
  ],
  controllers: [InfoController],
  providers: [InfoService]
})
export class InfoModule { }
