import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}

start();
