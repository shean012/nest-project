import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { InfoService } from './info.service'
import { CreatePageInfoObj, UpdatePageInfoObj } from './params'

@Controller('info')
@ApiUseTags('pageInfo')
export class InfoController {
  constructor(
    private readonly infoService: InfoService
  ) { }

  @Get()
  @ApiOperation({ title: '获取页面信息列表' })
  getPageInfo() {
    return this.infoService.getList()
  }

  @Get(':id')
  @ApiOperation({ title: '根据Id获取页面详细信息' })
  getById(@Param('id') id: String) {
    return this.infoService.getDetail(id)
  }

  @Post()
  @ApiOperation({ title: '创建一个页面信息' })
  createPageInfo(@Body() data: CreatePageInfoObj) {
    return this.infoService.create(data)
  }

  @Put(':id')
  @ApiOperation({ title: '根据Id修改页面信息' })
  updateById(@Body() data: UpdatePageInfoObj, @Param('id') id: String) {
    return this.infoService.update(id, data)
  }

  @Delete(':id')
  @ApiOperation({ title: '根据Id删除页面信息' })
  deleteById(@Param('id') id: String) {
    return this.infoService.remove(id)
  }
}
