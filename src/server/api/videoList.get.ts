import type { videoListQuery } from '~/types/other';
import sqlLink from '~/utils/sqlLink';
export default defineEventHandler(async (event) => {
    let query: videoListQuery = getQuery(event);
    let sqlCommand = `SELECT TOP ${query.num || 10} * FROM Videos ORDER BY NEWID();`;
    let result = await sqlLink({ sqlCommand }); 
    return result?.data?.recordset;

})