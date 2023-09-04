import { PostInMemoryRepository } from "../../../infrastructure/repository/inMemory/post-in-memory-repository";
import { CreatePostUseCase } from "./create-usecase";

describe('CreatePostUseCase', () => {
    it('Should create a new post', async () => {
        const repository = new PostInMemoryRepository(); 
        const createUseCase = new CreatePostUseCase(repository);
        const output = await createUseCase.execute({
            title: 'My first post',
            subject: 'Post initial',
            description: 'Hello world', 
        });
        expect(repository.items).toHaveLength(1);
        expect(output).toStrictEqual({
            id: repository.items[0].id,
            title: 'My first post',
            subject: 'Post initial',
            description: 'Hello world', 
        });        
    });
});