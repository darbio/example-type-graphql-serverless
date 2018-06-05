import { Arg, Query, Resolver } from 'type-graphql';
import { Person } from './person';

@Resolver()
export class PeopleController {
    items: Person[] = [
        {
            name: 'darbio',
            creationDate: new Date()
        },
        {
            name: 'john smith',
            creationDate: new Date()
        }
    ];

    constructor() { }

    @Query(returns => Date)
    currentDate() {
        return new Date();
    }

    @Query(returns => Person, { nullable: true })
    async person(@Arg('name') name: string): Promise<Person | undefined> {
        return await this.items.find(person => person.name === name);
    }

    @Query(returns => [Person], { description: 'Get all the people' })
    async people(): Promise<Person[]> {
        return await this.items;
    }
}