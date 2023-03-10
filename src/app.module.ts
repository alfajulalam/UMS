import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { facultyModule } from './Faculty/faculty.module';

@Module({
import { managementModule } from './Management/managmentmodule.module';
import { ManagementController } from './Management/managment.controller';
import { ManagementService } from './Management/managementservice.service';

@Module({
  imports: [managementModule,facultyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
