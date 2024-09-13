/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StudentUpdateManyWithoutExamsInput {
  @Field(() => [StudentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentWhereUniqueInput],
  })
  connect?: Array<StudentWhereUniqueInput>;

  @Field(() => [StudentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentWhereUniqueInput],
  })
  disconnect?: Array<StudentWhereUniqueInput>;

  @Field(() => [StudentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentWhereUniqueInput],
  })
  set?: Array<StudentWhereUniqueInput>;
}

export { StudentUpdateManyWithoutExamsInput as StudentUpdateManyWithoutExamsInput };
