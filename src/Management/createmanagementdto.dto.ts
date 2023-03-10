import { IsNotEmpty,IsString, Length,IsNumberString,MinLength ,MaxLength,Matches ,IsEmail} from 'class-validator';
export class createmanagementdto{
    
    @IsNotEmpty()
    @IsString()
    @Length(3, 20 ,{message: "must be 3 to 20 character"})
    name: string;

    @IsNumberString()
    id: number;
   
}