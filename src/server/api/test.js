export default defineEventHandler(async (event) => {
    let a = await $fetch('https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd?web_location=1430650&y_num=4&fresh_type=3&feed_version=V8&fresh_idx_1h=1&fetch_row=1&fresh_idx=2&brush=1&homepage_ver=1&ps=10&last_y_num=4&screen=1222-1004&seo_info=&last_showlist=av_1756221084,av_1506101270,av_1906045222,av_1206169304,av_112751196243980,av_1056000000,av_n_1006011213,av_n_1456247241,av_n_1456227438,av_n_1905858469%3Bav_1956088347,av_1156044001,av_112765222127642,av_1956038331,av_1206042173,av_1206148998,av_1506236801,av_n_1556052412,av_n_1756212655,av_n_1056064616&uniq_id=602140889330&w_rid=78532b0232f69d09d537d494b0b2538e&wts=1721057128')
    return a
})
