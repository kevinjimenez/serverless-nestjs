import {Global, Module} from '@nestjs/common';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {ConfigType} from "@nestjs/config";
import config from "../environment/config";

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (_configService: ConfigType<typeof config>) => {
                const {
                    host,
                    port,
                    database,
                } = _configService.database.mysql

                const typeorm_config: TypeOrmModuleOptions = {
                    type: 'mysql',
                    host,
                    port,
                    username: '',
                    password: '',
                    database,
                    entities: [],
                };
                return typeorm_config;
            },
            inject: [config.KEY]
        })
    ]
})
export class DatabaseModule {}
