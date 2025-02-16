
import type { loginBody, useInfo } from '~/types/auth'
import setSql from '~/utils/sqlLink'
export default defineEventHandler(async (event) => {
    const body: loginBody | useInfo = await readBody(event);
    let sqlCommand;
    if ('token' in body) sqlCommand = `SELECT useID ,useName,token,face FROM [user] WHERE useID = '${body.useID}' AND token = '${body.token}'`;
    else sqlCommand = `SELECT useID ,useName,token,face FROM [user] WHERE useID = '${body.useID}' AND password = '${body.password}';`;
    let sqlResponse = await setSql({ sqlCommand })
    console.log(sqlResponse)
    if (!sqlResponse?.data) {
        return {
            code: 400,
            msg: '服务器出现错误'
        }
    }
    if (sqlResponse?.data?.recordset.length == 0) {
        return {
            code: 400,
            msg: '登录失败'
        }
    }
    return { code: 200, data: sqlResponse?.data?.recordset[0] }
})