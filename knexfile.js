module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/lambda.db3" // the folder will be created when we run the migrations
    },
    migrations: {
      directory: "./data/migrations" // will create a folder in the data folder to keep things organized
    },
    seeds: {
      directory: "./data/seeds" // will create a folder in the data folder to keep things organized
    },
    // SQLite does not enforce Foreign Keys by default
    pool: {
      afterCreate: (connection, done) => {
        connection.run("PRAGMA foreign_keys = ON", done);
      }
    }
  }
};
