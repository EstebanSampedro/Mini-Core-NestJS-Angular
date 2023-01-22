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
      host: '127.0.0.1',
      port: 3306,
      database: 'minicore',
      username: 'root',
      password: 'RyukJhin23',
      entities: [ClientEntity, ContractEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
