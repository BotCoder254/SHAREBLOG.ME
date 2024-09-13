import { Media as TMedia } from "../api/media/Media";

export const MEDIA_TITLE_FIELD = "mediaUrl";

export const MediaTitle = (record: TMedia): string => {
  return record.mediaUrl?.toString() || String(record.id);
};
