import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COURSE_TITLE_FIELD } from "./CourseTitle";
import { ANNOUNCEMENT_TITLE_FIELD } from "../announcement/AnnouncementTitle";
import { EXAM_TITLE_FIELD } from "../exam/ExamTitle";
import { TEACHER_TITLE_FIELD } from "../teacher/TeacherTitle";

export const CourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="prerequisites" source="prerequisites" />
        <ReferenceField label="teacher" source="teacher.id" reference="Teacher">
          <TextField source={TEACHER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Exam" target="courseId" label="Exams">
          <Datagrid rowClick="show">
            <ReferenceField
              label="course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="description" source="description" />
            <TextField label="grades" source="grades" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Student"
          target="courseId"
          label="students"
        >
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <ReferenceField
              label="Announcements"
              source="announcement.id"
              reference="Announcement"
            >
              <TextField source={ANNOUNCEMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="class" source="classField" />
            <ReferenceField
              label="course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <ReferenceField label="Exam" source="exam.id" reference="Exam">
              <TextField source={EXAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="firstName" source="firstName" />
            <TextField label="grade" source="grade" />
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <TextField label="password" source="password" />
            <TextField label="phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
