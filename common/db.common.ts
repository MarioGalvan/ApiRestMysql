import dotenv from "dotenv";
dotenv.config();

export const DatabaseConfig = {
    mysql: {
        host:process.env.DATABASE_HOST || 'localhost',
        user:process.env.DATABASE_USER || 'root',
        password:process.env.DATABASE_PASSWORD || '',
        database:process.env.DATABASE_NAME || 'test',
        port:process.env.DATABASE_PORT || 3306,

    }
}