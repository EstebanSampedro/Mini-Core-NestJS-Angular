import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ClientEntity } from './clients/entities/client.entity';
import { ContractsModule } from './contracts/contracts.module';
import { ContractEntity } from './contracts/entities/contract.entity';

@Module({
  imports: [
    ClientsModule,
    ContractsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql8002.site4now.net',
      port: 3306,
      database: 'db_a93a0c_mini',
      username: 'a93a0c_mini',
      password: 'RyukJhin23',
      entities: [ClientEntity, ContractEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
