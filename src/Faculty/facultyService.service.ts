import { Injectable } from "@nestjs/common";

@Injectable()

export class facultyService{
    getFaculty():string{
        return "all faculty";
    }
    getfacultyID(id):any {
    
        return "the id is "+id;
    }
    getFacultyName(qry):any {
    
        return "the id is "+qry.id +" and name is "+qry.name;
    }
    createFaculty(mydto):any {
    
        return "Faculty Inserted name: " + mydto.name+" and id is " + mydto.id;
    }
    addstudent(mydto):any {
    
        return "Faculty Inserted name: " + mydto.name+" and id is " + mydto.id;
    }
    updateDoctor(name,id):any {
        return "Doctor updated name: " +name+" and id is " +id;
    }
    updatefacultyid(name,id):any {
        return "Update faculty where id " +id+" and change name to " +name;
    }
    deletefacultyid(id):any {
    
        return "Delete id is "+id;
    }
}