FROM node:lts-alpine

WORKDIR /app

# enable corepack
RUN corepack enable
RUN corepack prepare pnpm@11.9.0 --activate

COPY package.json pnpm-lock.yaml ./

COPY client/package.json client/pnpm-workspace.yaml client/
RUN pnpm --dir client install  

COPY server/package.json server/
RUN pnpm --dir server install  


COPY client/ client/
RUN pnpm --dir client run build 

COPY server/ server/

# Give the node user ownership of the application
RUN chown -R node:node /app

USER node

EXPOSE 8000

CMD ["pnpm", "--dir", "server", "start"]