/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { AnnouncementWhereUniqueInput } from "../../announcement/base/AnnouncementWhereUniqueInput";
import { AttendanceListRelationFilter } from "../../attendance/base/AttendanceListRelationFilter";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";
import { DocumentListRelationFilter } from "../../document/base/DocumentListRelationFilter";
import { ExamWhereUniqueInput } from "../../exam/base/ExamWhereUniqueInput";
import { FeeListRelationFilter } from "../../fee/base/FeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class StudentWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => AnnouncementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnnouncementWhereUniqueInput)
  @IsOptional()
  @Field(() => AnnouncementWhereUniqueInput, {
    nullable: true,
  })
  announcements?: AnnouncementWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => AttendanceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttendanceListRelationFilter)
  @IsOptional()
  @Field(() => AttendanceListRelationFilter, {
    nullable: true,
  })
  attendances?: AttendanceListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  classField?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourseWhereUniqueInput)
  @IsOptional()
  @Field(() => CourseWhereUniqueInput, {
    nullable: true,
  })
  course?: CourseWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DocumentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DocumentListRelationFilter)
  @IsOptional()
  @Field(() => DocumentListRelationFilter, {
    nullable: true,
  })
  documents?: DocumentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ExamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExamWhereUniqueInput)
  @IsOptional()
  @Field(() => ExamWhereUniqueInput, {
    nullable: true,
  })
  exam?: ExamWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FeeListRelationFilter)
  @IsOptional()
  @Field(() => FeeListRelationFilter, {
    nullable: true,
  })
  fees?: FeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  grade?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  password?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phone?: StringNullableFilter;
}

export { StudentWhereInput as StudentWhereInput };
