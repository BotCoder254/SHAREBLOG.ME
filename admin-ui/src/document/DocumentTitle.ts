import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "typeField";

export const DocumentTitle = (record: TDocument): string => {
  return record.typeField?.toString() || String(record.id);
};
