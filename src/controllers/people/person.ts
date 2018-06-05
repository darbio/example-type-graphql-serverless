import { ID, Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Person {
    @Field() name: string;
    @Field() creationDate: Date;
}