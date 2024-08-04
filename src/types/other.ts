import type { Owner, sqlVideo } from '~/types/sqlTable';
export interface  VideoListResponse {
    data: sqlVideo[];
}
export interface videoListQuery {
    num:number|null;
}
export interface videoOwnersQuery {
    mid:number|null;
}
export interface videoInfoWithOwner {
    video:sqlVideo;
    owner:Owner;
}

export interface DialogFns {
    open: () => void;
    close: () => void;
  }