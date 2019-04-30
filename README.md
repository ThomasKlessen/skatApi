# API template

Lets see where this goes. Right now it is a template for a jwt-secured Api backend.

## Requirements

We do not want to store secret or config information within the project itself.
Thats why we need some environment variables.
Add to your .profile file:

`export DB_USER="YourDbUser"
 export DB_PASSWORD="YourDbPassword"
 export JWT_SECRET="YourJwtSecret"
`

and `source ~/.profile` afterwords to include your values into your terminal.
 

## DB migrations
We use db-migrate to mange the database changes.

For more details check the [docs](https://db-migrate.readthedocs.io/en/latest/).

### Create a migration

`npm run migrate create <myMigration>`

This will create a file in `/migrations` folder where you can specify your up and down scripts.

### Update database

`npm run migrate up`

This will update your database to the newest state.

### Downgrade database

`npm run migrate down`

This will remove the last migration.