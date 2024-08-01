import sql from 'mssql';
import type { sqlVideo } from '~/types/sqlTable';
const config = {
    user: "ke1on",
    password: "123456",
    server: "193.112.92.186",
    database: "kirikiri",
    options: {
        trustServerCertificate: true, // 仅在开发时使用，生产环境应配置正确的证书
        enableArithAbort: true, // 有时需要添加此选项
        encrypt: false,
    }
}

 
export default async function setSql(fnType: fnType) {
    async function main() {
        let pool: sql.ConnectionPool;
        try {
            pool = await sql.connect(config);
            if (fnType?.fn) {
                fnType.fn(pool);
            } else {
                let result: sql.IResult<sqlVideo>;
                try {
                    result = await pool.request().query(`${fnType.sqlCommand}`);
                    return { code: true, data: result };
                } catch (error: any) {
                    //捕获错误
 
                     
                    return { code: false, data: null, error:error.class }
                }

            }

        } catch (err) {
            console.error('SQL error', err);

            return { code: false, data: null };
        }

    }

    return main();
}
/**
 * @description 函数类型，object类型
 */
interface fnType {
    fn?: Function | null;
    /**
     * 简单查写传这个就行
     */
    sqlCommand?: string | null;
}