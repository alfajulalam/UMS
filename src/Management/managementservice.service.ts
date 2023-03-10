import { Injectable } from "@nestjs/common";


@Injectable()
export class ManagementService{
    getManagement():string{
        return "all management";
    }

    getmanagementID(id):any {
    
        return "the id is "+id;
    }

    getmanagementName(qry):any {
    
        return "the id is "+qry.id +" and name is "+qry.name;
    }

    createmanagement(mydto):any {
    
        return "management Inserted name: " + mydto.name+" and id is " + mydto.id;
    }
    addstuff(mydto):any {
    
        return "stuff Inserted name: " + mydto.name+" and id is " + mydto.id;
    }

    updatemanagement(name,id):any {
        return "management updated name: " +name+" and id is " +id;
    }
    updatemanagementid(name,id):any {
        return "Update management where id " +id+" and change name to " +name;
    }
    deletemanagementid(id):any {
    
        return "Delete id is "+id;
    }
}