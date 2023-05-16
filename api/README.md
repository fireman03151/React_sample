# Working on the new api

## Connecting to local database

The api uses the ORM Prisma and it needs the MongoDB instance to be a replica set.

### Atlas

If you use MongoDB Atlas, the set is managed for you.

### Local

The simplest way to run a replica set locally is to use the docker-compose file
in /tools.

```bash
cd tools
docker compose up -d
```

Once that's running, update the connection string in the `.env` file to use port `27018`.

```txt
# Database
MONGOHQ_URL=mongodb://127.0.0.1:27018/freecodecamp?directConnection=true
```

The new db will be empty, so you can run the seed script to populate it.

```bash
cd ../.. # back to the root of the repo
pnpm seed
```

## Login in development/testing

During development and testing, the api exposes the endpoint GET auth/dev-callback. Calling this will log you in as the user with the email `foo@bar.com` by setting the session cookie for that user.
