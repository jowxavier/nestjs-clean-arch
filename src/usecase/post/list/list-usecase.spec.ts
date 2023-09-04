import { PostInMemoryRepository } from "../../../infrastructure/repository/inMemory/post-in-memory-repository";
import { ListPostUseCase } from "./list-usecase";

describe('ListPostUseCase', () => {
    it('Should list posts', async () => {
        const repository = new PostInMemoryRepository(); 
        const listUseCase = new ListPostUseCase(repository);
        const output = await listUseCase.execute();
        expect(output).toBeDefined();        
    });
});