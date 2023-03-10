import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,Req,Request,UsePipes,ValidationPipe } from "@nestjs/common"
import { facultyService } from "./facultyService.service" 
import { createfacultydto } from "./createfacultydto.dto";
import { addstudentdto } from "./addstudentdto.dto";
import { updatefacultydto } from "./updatefacultydto.dto";
import { delatefacultydto } from "./delatefacultydto.dto";


@Controller("/faculty")
export class FacultyController
{
    constructor(private facultyService:facultyService){}

    @Get("/index")
    getFaculty(): any{
        return this.facultyService.getFaculty();
    }
    @Get("/find/:id")
    getfacultyID(@Param("id", ParseIntPipe) id:number,): any {
    console.log(typeof id);
    return this.facultyService.getfacultyID(id);

}
@Get ("/findFaculty")
getFacultyIDName(@Query() qry:any):any {
    return this. facultyService.getFacultyName(qry);
}
@Post("/createFaculty")
@UsePipes(new ValidationPipe())
createFaculty(@Body() mydto:createfacultydto): any {
    return this.facultyService.createFaculty(mydto);

}
@Post("/addstudent")
@UsePipes(new ValidationPipe())
addstudent(@Body() mydto:addstudentdto):any {
    return this.facultyService.addstudent(mydto);
}
@Put("/updateDoctor/")
    @UsePipes(new ValidationPipe())
    updateDoctor( 
      @Body("name") name:string, 
      @Body("id") id:number,
      mydto:updatefacultydto) : any {
    return this.facultyService.updateDoctor(name, id);
      }
    @Put("/updatefaculty/:id")
    @UsePipes(new ValidationPipe())
  updatefacultyid( 
      @Body("name") name:string, 
      @Param("id", ParseIntPipe) id:number,
      mydto:updatefacultydto
      ): any {
    return this.facultyService.updatefacultyid(name,id);
      }
      @Delete("/deletefaculty/:id")
      @UsePipes(new ValidationPipe())
    deletefacultyid( 
       @Param("id", ParseIntPipe) id:number,mydto:delatefacultydto
        ): any {
      return this.facultyService.deletefacultyid(id);
        }
        








      }
