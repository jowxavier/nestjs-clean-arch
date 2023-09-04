import { Post, PostProps } from "./post.entity"

describe('Post Tests', () => {
    test('constructor', () => {
        const postProps: PostProps = {
            title: 'My first post',
            subject: 'Post initial',
            description: 'Hello world',  
        }

        const post = new Post(postProps);
        expect(post.id).toBeDefined();
        expect(post.props).toStrictEqual({
            ...postProps
        });
    });

    test('updatedTitle method', () => {
        const postProps: PostProps = {
            title: 'My first post',
            subject: 'Post initial',
            description: 'Hello world',  
        }

        const post = new Post(postProps);
        post.updatedTitle('My initial post');
        expect(post.props.title).toBe('My initial post');
    });

    test('updatedSubject method', () => {
        const postProps: PostProps = {
            title: 'My first post',
            subject: 'Post initial',
            description: 'Hello world',  
        }

        const post = new Post(postProps);
        post.updatedSubject('Post first');
        expect(post.props.subject).toBe('Post first');
    });

    test('updatedDescription method', () => {
        const postProps: PostProps = {
            title: 'My first post',
            subject: 'Post initial',
            description: 'Hello world',  
        }

        const post = new Post(postProps);
        post.updatedDescription('Hello There');
        expect(post.props.description).toBe('Hello There');
    });
});