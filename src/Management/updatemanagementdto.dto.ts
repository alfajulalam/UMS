import { IsNotEmpty,Length,IsNumberString, IsString } from "class-validator"
export class updatemanagementdto{
    @IsNotEmpty()
    @IsString()
    @Length(3, 20 ,{message: "must be 3 to 20 character"})
    name: string;

    @IsNumberString()
    id: number;
}