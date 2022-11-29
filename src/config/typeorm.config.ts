import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const getTypeOrmConfig = async (
	configService: ConfigService
): Promise<TypeOrmModuleOptions> => ({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	database: 'rutube-v1',
	username: 'postgres',
	password: 'imron2805',
	autoLoadEntities: true,
	synchronize: true
})