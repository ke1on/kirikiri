import type { videoOwnersQuery } from '~/types/other';
import sqlLink from '~/utils/sqlLink';
export default defineEventHandler(async (event) => {
    let query: videoOwnersQuery = getQuery(event);
    let sqlCommand = `SELECT TOP 1 * FROM [Owners] where mid = ${query.mid};`;
    let result = await sqlLink({ sqlCommand }); 
    return result?.data?.recordset[0]; 
})