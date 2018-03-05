module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'songsdatabase',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './songsdatabase.sqlite'
        }
    }
}
