import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'testing@gmail.com',
    description: 'email',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'testing',
    description: 'nickname',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'asdf1234',
    description: 'password',
    required: true,
  })
  public password: string;
}
