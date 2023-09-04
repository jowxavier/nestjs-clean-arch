import { OutputDto } from "src/infrastructure/dto/post/output.dto";
import { PostRepositoryInterface } from "../../../domain/post/repository/post.repository";

export class ListPostUseCase {
    constructor(private postRepository: PostRepositoryInterface) {}

    async execute(): Promise<OutputDto[]> {
        const posts = await this.postRepository.findAll();
        return posts.map(p => p.toJson());
    }
};