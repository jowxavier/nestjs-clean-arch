import { InputDto } from "src/infrastructure/dto/post/input.dto";
import { Post } from "../../../domain/post/entity/post.entity";
import { PostRepositoryInterface } from "../../../domain/post/repository/post.repository";

export class CreatePostUseCase {
    constructor(private postRepository: PostRepositoryInterface) {}

    async execute(inputDto: InputDto) {
        const post = new Post(inputDto)
        await this.postRepository.insert(post);
        return post.toJson();
    }
};