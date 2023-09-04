import crypto from 'crypto';

export type PostProps = {
    title: string;
    subject: string;
    description: string; 
}

export class Post {
    public readonly id: string;

    constructor(public props: PostProps, id?: string) {
        this.id = id || crypto.randomUUID();
    }

    updatedTitle(value: string) {
        this.validated(value);
        this.props.title = value
    }

    updatedSubject(value: string) {
        this.validated(value);
        this.props.subject = value
    }

    updatedDescription(value: string) {
        this.validated(value);
        this.props.description = value
    }

    private validated(value: string) {
        if (value.length == 0) {
            throw new Error(`O valor ${value} é obrigatório`);            
        }
    }

    public toJson() {
        return {
            id: this.id,
            ...this.props
        }
    }
}