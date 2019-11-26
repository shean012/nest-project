import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Iinfo } from '../interface/index'
import { InjectModel } from '@nestjs/mongoose';
import { CreatePageInfoObj, UpdatePageInfoObj } from './params';

@Injectable()
export class InfoService {
  constructor(
    @InjectModel('infoModel') private readonly InfoModel: Model<Iinfo>
  ) { }

  async getDetail(id: String): Promise<Iinfo> {
    let data = await this.InfoModel.findById(id)
    return data
  }

  async getList(): Promise<Iinfo[]> {
    let list = await this.InfoModel.find()
    return list
  }

  async create(params: CreatePageInfoObj): Promise<Iinfo> {
    let data = await this.InfoModel.create(params)
    return data
  }

  async update(id: String, params: UpdatePageInfoObj): Promise<Iinfo> {
    let data = await this.InfoModel.findByIdAndUpdate(id, params, { new: true })
    return data
  }

  async remove(id: String): Promise<Iinfo> {
    let data = await this.InfoModel.findByIdAndDelete(id)
    return data
  }
}
