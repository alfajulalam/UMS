import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,Req,Request,UsePipes,ValidationPipe } from "@nestjs/common"
import { ManagementService } from "./managementservice.service"
import { createmanagementdto } from "./createmanagementdto.dto";
import { addstuffdto } from "./addstuffdto.dto";
import { updatemanagementdto } from "./updatemanagementdto.dto";
import { deletemanagementdto } from "./deletemanagementdto.dto";

@Controller("/management")
export class ManagementController
{
    constructor (private managmentService:ManagementService ){}

    @Get("/index")
    getManagement():any{
        return this.managmentService.getManagement();
    }
    @Get("/find/:id")
    getmanagementID(@Param("id", ParseIntPipe) id:number,): any {
      console.log(typeof id);
      return this.managmentService.getmanagementID(id);
    }

    @Get("/findmanagement")
    getmanagementIDName(@Query() qry:any): any {
      return this.managmentService.getmanagementName(qry);
    }  

    @Post("/createmanagement")
    @UsePipes(new ValidationPipe())
    createDoctor(@Body() mydto:createmanagementdto): any {
      return this.managmentService.createmanagement(mydto);
    }

    @Post("/addstuff")
    @UsePipes(new ValidationPipe())
    addMedicine(@Body() mydto:addstuffdto): any {
      return this.managmentService.addstuff(mydto);
    }

    @Put("/updatemanagement/")
    @UsePipes(new ValidationPipe())
    updatemanagement( 
      @Body("name") name:string, 
      @Body("id") id:number,
      mydto:updatemanagementdto) : any {
    return this.managmentService.updatemanagement(name, id);
    }
    
    @Put("/updatemanagement/:id")
    @UsePipes(new ValidationPipe())
  updateDoctorid( 
      @Body("name") name:string, 
      @Param("id", ParseIntPipe) id:number,
      mydto:updatemanagementdto
      ): any {
    return this.managmentService.updatemanagementid(name,id);
    }

    @Delete("/deletemanagement/:id")
    @UsePipes(new ValidationPipe())
  deletemanagementid( 
     @Param("id", ParseIntPipe) id:number,mydto:deletemanagementdto
      ): any {
    return this.managmentService.deletemanagementid(id);
    }

}