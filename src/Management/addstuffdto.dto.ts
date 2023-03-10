import { IsNotEmpty, IsString,Length,IsNumberString } from "class-validator"
export class addstuffdto{
    @IsNotEmpty()
    @IsString()
    @Length(3, 20 ,{message: "must be 3 to 20 character"})
    name: string;

    @IsNumberString()
    id: number;
    }