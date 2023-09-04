import { Body, Controller, Get, Post } from '@nestjs/common';
import { InputDto } from 'src/infrastructure/dto/post/input.dto';
import { OutputDto } from 'src/infrastructure/dto/post/output.dto';
import { PostService } from 'src/infrastructure/services/post/post.service';

@Controller('posts')
export class PostController {
    constructor(
        private readonly postService: PostService
    ) {}
    
    @Get()
    async findAll(): Promise<OutputDto[]> {
        return await this.postService.findAll();
    }

    @Post()
    async create(@Body() postDto: InputDto): Promise<OutputDto> {
        return await this.postService.create(postDto);
    }
}
