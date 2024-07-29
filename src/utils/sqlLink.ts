import sql from 'mssql';
import type { sqlVideo } from '~/src/types/sqlTable';
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
                fnType.fn(fnType.fn);
            } else {
                
                try{
                  const result: sql.IResult<sqlVideo> = await pool.request().query(`${fnType.sqlCommand}`);
                  return {code:true,data:result};  
                }catch{
                    return {code:false,data:null}
                }
                
            }

        } catch (err) {
            console.error('SQL error', err);

            return {code:false,data:null};
        }

    }

    return main();
}
interface fnType {
    fn?: Function | null;
    sqlCommand?: string | null;
}