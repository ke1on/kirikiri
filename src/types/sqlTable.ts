export   interface sqlVideo {
    id: bigint,
    mid: bigint,
    bvid: string,
    cid: bigint,
    uri: string,
    pic: string,
    pic_4_3: string,
    title: string,
    pubdate: string,
    view: bigint,
    like: bigint,
    danmaku: bigint,
}
export interface Owner {
    mid: bigint;
    name: string;
    face: string;
}