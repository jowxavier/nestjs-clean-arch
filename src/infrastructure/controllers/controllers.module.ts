import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';
import { PostInMemoryRepository } from '../repository/inMemory/post-in-memory-repository';
import { CreatePostUseCase } from 'src/usecase/post/create/create-usecase';
import { PostRepositoryInterface } from 'src/domain/post/repository/post.repository';
import { ListPostUseCase } from 'src/usecase/post/list/list-usecase';
import { PostService } from '../services/post/post.service';

@Module({
  controllers: [PostController],
  providers: [
    PostService,
    {
      provide: PostInMemoryRepository,
      useClass: PostInMemoryRepository
    },
    {
      provide: CreatePostUseCase,
      useFactory: (postRepo: PostRepositoryInterface) => {
        return new CreatePostUseCase(postRepo);
      },
      inject: [PostInMemoryRepository]
    },
    {
      provide: ListPostUseCase,
      useFactory: (postRepo: PostRepositoryInterface) => {
        return new ListPostUseCase(postRepo);
      },
      inject: [PostInMemoryRepository]
    },
  ],
})
export class ControllersModule {}
