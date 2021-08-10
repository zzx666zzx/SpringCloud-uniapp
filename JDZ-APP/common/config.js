let base_url='';
if(process.env.NODE_ENV === 'development'){
    // 开发环境
    //#ifdef H5
    base_url= '';
    //#endif
    //#ifndef H5
    base_url='http://127.0.0.1:8088';
    //#endif
}else{
    // 生产环境
    //#ifdef H5
    base_url='';
    //#endif
    //#ifndef H5
    base_url='http://127.0.0.1:8088';
    //#endif
}
const config = {
base_url: base_url
}
export { config }