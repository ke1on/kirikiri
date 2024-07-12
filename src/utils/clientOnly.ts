/**
 * 
 * @param  {Function} fn
 * 传入一个函数，在客户端执行
 */
export default function (fn: Function) {
    if (process.client) {
        return fn()
    }
}