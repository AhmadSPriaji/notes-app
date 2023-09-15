import { IsString, IsOptional, MaxLength, IsArray } from "class-validator";

export class NoteBodyDTO {
    @IsString() 
    @IsOptional()
    @MaxLength(50)
    title?: string;

    @IsString()
    @IsOptional()
    body?: string;

    @IsArray()
    @IsOptional()
    @IsString({ each: true })
    tags?: string[];
  }