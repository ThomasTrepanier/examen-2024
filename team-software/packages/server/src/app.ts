import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { buildSubgraphSchema } from '@apollo/subgraph';
import cors from 'cors';
import express, { json } from 'express';
import { readFileSync } from 'fs';
import gql from 'graphql-tag';
import resolvers from './resolvers';

export class Application {
  private app: express.Application;
  private server: ApolloServer;

  constructor() {
    this.app = express();
    const typeDefs = gql(
      readFileSync('src/schema.graphql', {
        encoding: 'utf-8',
      }),
    );

    this.server = new ApolloServer({
      schema: buildSubgraphSchema({ typeDefs, resolvers }),
    });

    this.configureMiddlewares();
  }

  async start(port: number | string) {
    // Note you must call `start()` on the `ApolloServer`
    // instance before passing the instance to `expressMiddleware`
    await this.server.start();

    this.configureRoutes();

    this.app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  }

  private configureMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private configureRoutes() {
    this.app.use('/graphql', cors(), json(), expressMiddleware(this.server));
  }
}
