 
import sqlLink from '~/utils/sqlLink';
export default defineEventHandler(async (event) => {
    let query:videoDetails = getQuery(event);
    let sqlCommand = ` SELECT TOP 1 * FROM Videos where bvid = '${query.bvid}';`;
    let result = await sqlLink({ sqlCommand }); 
     console.log(sqlCommand)
    return result?.data?.recordset?.[0] || null;
})
interface videoDetails {
    bvid: string;
}