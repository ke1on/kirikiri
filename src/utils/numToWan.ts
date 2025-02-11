export default function (num: number | bigint,type: string = 'zh' ) {
    const wan = (Number(num) / 10000).toFixed(2); // 保留两位小数
    if (type === 'zh') return `${wan}万`;
    return `${wan}w`;
}