import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { StudentTitle } from "../student/StudentTitle";

export const AnnouncementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="audience.id"
          reference="Student"
          label="audience"
        >
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
