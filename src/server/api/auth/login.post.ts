
import type { loginBody } from '~/types/auth'
import setSql from '~/utils/sqlLink'
export default defineEventHandler(async (event) => {
    const body: loginBody = await readBody(event);
    let sqlCommand = `SELECT useID ,useName,token,face
FROM [user]
WHERE useID = '${body.useID}' AND password = '${body.password}';`
    let sqlResponse = await setSql({ sqlCommand })
    return sqlResponse
})