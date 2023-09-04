import { Post, PostProps } from "../../../domain/post/entity/post.entity";
import { PostInMemoryRepository } from "./post-in-memory-repository"

describe('PostInMemoryRepository Test',  () => {
    it('Should a new post', async () => {
        const respository = new PostInMemoryRepository();
        const postProps: PostProps = {
            title: 'My first post',
            subject: 'Post initial',
            description: 'Hello world',  
        }

        const post = new Post(postProps);
        await respository.insert(post);
        expect(respository.items).toHaveLength(1);
        expect(respository.items).toStrictEqual([post]);
    });
});