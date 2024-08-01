/**
 * @description: 注册登录接口
 */
export interface registerBody {
    useID: string;
    useName: string;
    password: string;
    face: string;
}
/**
 * @description: 注册返回数据
 */
export interface registerResponse {
    code: number;
    useInfo: useInfo|null;
    msg: string;
}
/**
 * @description: 登录接口
 */
export interface loginBody {
    useID: string;
    password: string;
}
/**
 * @description: 登录返回数据，也就是前端需要保留的数据
 */
export interface useInfo {
    useID: string;
    token: string;
    face: string;
    useName: string;
}
