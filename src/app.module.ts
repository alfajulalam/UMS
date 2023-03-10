import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { facultyModule } from './Faculty/faculty.module';

@Module({
  imports: [facultyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
