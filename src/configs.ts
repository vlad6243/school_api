const {
    PORT = '3000',
    DB_HOST = '127.0.0.1',
    DB_PORT = '5433',
    DB_USERNAME = 'postgres',
    DB_PASSWORD = '123456',
    DB_DATABASE = 'school',
} = process.env;

const configs: Record<string, any> = {
    port: PORT,
    providers: {
        db: {
            dialect: 'postgres',
            host: DB_HOST,
            port: DB_PORT,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_DATABASE,
        },
    }
};

export default configs;