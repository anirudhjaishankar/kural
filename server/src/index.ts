import fastify from "fastify";
import fastifyIO from "@ericedouard/fastify-socket.io";
import SocketIO from "socket.io";
declare module "fastify" {
  interface FastifyInstance {
    io: SocketIO.Server;
  }
}

const server = fastify();
server.register(fastifyIO);

server.get("/", (req, reply) => {
  server.io.emit("hello");
  reply.send({ hello: "world" });
});

server.ready().then(() => {
  // we need to wait for the server to be ready, else `server.io` is undefined
  server.io.on("connection", (socket: any) => {
    // ...
  });
});

server.listen({ port: 3000 });
