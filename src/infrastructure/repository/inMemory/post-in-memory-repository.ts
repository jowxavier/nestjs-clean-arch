import { Post } from "../../../domain/post/entity/post.entity";
import { PostRepositoryInterface } from "../../../domain/post/repository/post.repository";

export class PostInMemoryRepository implements PostRepositoryInterface {
    items: Post[] = [];
    async insert(post: Post): Promise<void> {
        this.items.push(post);
    }

    async findAll(): Promise<Post[]> {
        return this.items;
    }    
}