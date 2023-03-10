import { Module } from "@nestjs/common";
import { FacultyController } from "./faculty.controller";
import { facultyService } from "./facultyService.service";
@Module ({
    controllers: [FacultyController],
    providers: [facultyService],
})
export class facultyModule{}