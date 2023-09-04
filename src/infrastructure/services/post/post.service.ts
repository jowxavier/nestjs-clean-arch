import { Injectable } from '@nestjs/common';
import { InputDto } from 'src/infrastructure/dto/post/input.dto';
import { OutputDto } from 'src/infrastructure/dto/post/output.dto';
import { CreatePostUseCase } from 'src/usecase/post/create/create-usecase';
import { ListPostUseCase } from 'src/usecase/post/list/list-usecase';

@Injectable()
export class PostService {
    constructor(
        private readonly listPostUseCase: ListPostUseCase,
        private readonly createPostUseCase: CreatePostUseCase
    ) {}

    async findAll(): Promise<OutputDto[]> {
        return await this.listPostUseCase.execute();
    }

    async create(inputDto: InputDto): Promise<OutputDto> {
        return await this.createPostUseCase.execute(inputDto);
    }
}
