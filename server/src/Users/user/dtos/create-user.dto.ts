import { Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @Expose()
    @IsString()
    name: string

    @Expose()
    @IsNumber()
    id: number

    @IsString()
    password: string
}