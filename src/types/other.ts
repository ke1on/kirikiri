import type { sqlVideo } from '~/types/sqlTable';
export interface  VideoListResponse {
    data: sqlVideo[];
}
export interface videoListQuery {
    num:number|null;
}
export interface videoOwnersQuery {
    mid:number|null;
}

