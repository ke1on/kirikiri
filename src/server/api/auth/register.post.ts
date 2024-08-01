
import jwt from 'jsonwebtoken';
import { registerBody, registerResponse } from '~/types/auth';
import setSql from '~/utils/sqlLink';
export default defineEventHandler(async (event) => {
    const body: registerBody = await readBody(event);
    //判断值是否有空值
    for (let i in body) {
        if (body[i as keyof registerBody] == "") {
            return {
                code: 400,
                msg: "请填写完整信息"
            }
        }
    }

    const secretKey = "Ke1on_saikou";
    const token = jwt.sign(body, secretKey, { expiresIn: '9999999h' })
    let registerResponse: registerResponse = {
        code: 200,
        useInfo: {
            face: body.face,
            token: token,
            useName: body.useName,
            useID: body.useID
        },
        msg: "注册成功"
    }
    let sqlCommand = `insert into [user] (useID,useName,password,face,token) values ('${body.useID}','${body.useName}','${body.password}','${body.face}','${token}');`
    let sqlRes = await setSql({ sqlCommand })
    console.log(sqlRes)
    if (sqlRes?.code == false) {
        registerResponse.useInfo = null;
        registerResponse.code = 400;
        if (sqlRes.error = 14) {
            registerResponse.msg = "该账号已被注册";
        } else {
            registerResponse.msg = "注册失败";
        }
        return registerResponse;
    } else {
        return registerResponse;
    }

})