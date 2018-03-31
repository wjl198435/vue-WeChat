/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

//let baseUrl = ''; 
//let baseUrl = 'http://www.haiwar.com:8001'
let baseUrl = 'http://192.168.8.100:8001'
let routerMode = 'hash';
let imgBaseUrl;


if (process.env.NODE_ENV == 'development') {
	// imgBaseUrl = 'http://www.haiwar.com:8080/src/assets/images/shop/';
	imgBaseUrl = 'http://p5iqmly4z.bkt.clouddn.com/';

	

}else if(process.env.NODE_ENV == 'production'){
	// baseUrl = 'http://cangdu.org:8001';
    imgBaseUrl = 'http://p5iqmly4z.bkt.clouddn.com/';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}