import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AnnouncementTitle } from "../announcement/AnnouncementTitle";
import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { CourseTitle } from "../course/CourseTitle";
import { DocumentTitle } from "../document/DocumentTitle";
import { ExamTitle } from "../exam/ExamTitle";
import { FeeTitle } from "../fee/FeeTitle";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <ReferenceInput
          source="announcements.id"
          reference="Announcement"
          label="Announcements"
        >
          <SelectInput optionText={AnnouncementTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <TextInput label="class" source="classField" />
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="documents"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput source="exam.id" reference="Exam" label="Exam">
          <SelectInput optionText={ExamTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="fees"
          reference="Fee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeeTitle} />
        </ReferenceArrayInput>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="grade" source="grade" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="password" source="password" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
