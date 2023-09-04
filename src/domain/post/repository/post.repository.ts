import { Post } from "../entity/post.entity";

export interface PostRepositoryInterface {
    insert(post: Post): Promise<void>
    findAll(): Promise<Post[]>
}