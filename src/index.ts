import 'reflect-metadata';

import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import * as serverless from 'aws-serverless-express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { Server } from 'http';
import { buildSchemaSync, useContainer } from 'type-graphql';
// import { Container } from 'typedi';

import { PeopleController } from './controllers/people/peopleController';

/**
 * Must be called before build schema or Resolver won't inject the Service
 */
// useContainer(Container);

console.log(`GLOBAL: ${JSON.stringify((<any>global).cachedSchema)}`);

/**
 * Lambda gonna build schema for each request lead to duplicate GraphQL Declaration
 * so we need to cache the built schema.
 * (this is currently the default cache for type-graphql too)
 * @type {GraphQLSchema}
 */
(<any>global).cachedSchema =
    (<any>global).cachedSchema ||
    buildSchemaSync({
        resolvers: [PeopleController]
    });
const schema = (<any>global).cachedSchema;

export const app = express();
export let cachedServer: Server;

function bootstrapServer() {
    app.use('/graphql', cors(), bodyParser.json(), (req, res, next) => {
        const token = req.headers.authorization;
        graphqlExpress({ schema, context: { token } })(req, res, next);
    });
    app.get('/', graphiqlExpress({ endpointURL: '/graphql' }));

    return serverless.createServer(app);
}

export const graphqlHandler = (event, context) => {
    if (cachedServer == null) {
        console.log('Bootstrapping server...');
        const server = bootstrapServer();
        cachedServer = server;
        return serverless.proxy(server, event, context);
    } else {
        console.log('Using cached server...');
        return serverless.proxy(cachedServer, event, context);
    }
};
