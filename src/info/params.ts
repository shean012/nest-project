import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePageInfoObj {
  @ApiModelProperty({ description: '文章标题', required: true })
  title: String;
  @ApiModelProperty({ description: '文章描述', required: false })
  desc?: String;
};

export class UpdatePageInfoObj {
  @ApiModelProperty({ description: '文章标题', required: false })
  title?: String;
  @ApiModelProperty({ description: '文章描述', required: false })
  desc?: String;
}