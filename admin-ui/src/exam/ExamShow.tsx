import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ANNOUNCEMENT_TITLE_FIELD } from "../announcement/AnnouncementTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { EXAM_TITLE_FIELD } from "./ExamTitle";

export const ExamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="description" source="description" />
        <TextField label="grades" source="grades" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Student"
          target="examId"
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
