FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

# Make sure .env is copied
RUN cp .env ./.medusa/server/ || echo "No .env file to copy"

RUN yarn build

WORKDIR /app/.medusa/server

RUN yarn install

# Set redisUrl to match REDIS_URL
ENV redisUrl=redis://heulastore_redis:6379

EXPOSE 4000

# Use explicit port in command to ensure it overrides any defaults
CMD ["npm", "run", "start", "--", "--port", "4000"] 