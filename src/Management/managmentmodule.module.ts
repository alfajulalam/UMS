import { Module } from "@nestjs/common";
import { ManagementController } from "./managment.controller";
import { ManagementService} from "./managementservice.service";

@Module({
    controllers: [ManagementController],
    providers: [ManagementService]
})

export class managementModule{}