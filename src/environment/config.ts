import {registerAs} from "@nestjs/config";

export default registerAs('config', ()=>{
    return {
        database: {
            mysql: {
                host: process.env.DATABASE_HOST,
                port: +process.env.DATABASE_PORT,
                database: process.env.DATABASE_NAME,
                // schema: '',
                // synchronize: '',
                // dropSchema: ''
            }
        }
    }
})
