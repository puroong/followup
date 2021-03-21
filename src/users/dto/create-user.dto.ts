import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @Length(3, 3)
    password: string;

    @IsNotEmpty()
    nickname: string;
}
