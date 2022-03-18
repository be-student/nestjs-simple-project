import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('workspace')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'url',
    required: true,
    description: 'workspace url',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'user id',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: 'item per page',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: 'page index',
  })
  @Get(':id/chatts')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
  }
  // getChat(@Query("perPage") abc, @Query("page") def){
  //     console.log(abc,def)
  // }
  @Post(':id/chats')
  postChat(@Body() body) {}
}
