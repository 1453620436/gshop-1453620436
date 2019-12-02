/**
 * 包含n个接口请求函数的模块
 * 函数返回值：promise对象
 */
import ajax from './ajax'
//1.根据经纬度获取详细位置
export const reqAddress = (geohash) => ajax('/position/${geohash}')

//2.获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')

//3.根据经纬度获取商品列表
export const reqShops = (longitude,latitude) =>ajax('/shops',{longitude,latitude})

//4.根据经纬度和关键字搜索商品列表
export const  reqSearchShops =(keyword ,geohash ) =>ajax('/search_shops',{keyword,geohash})

//5.获取一次性验证码
export const reqCaptcha = () =>ajax('/captcha')

//6.用户密码登陆
export const reqLogin = (userName,pwd,captcha) =>ajax('login_pwd',{userName,pwd,captcha})

//7.发送短信验证码
export const reqSendcode = (phone) =>ajax('/sendcode',{phone})

//8.手机验证码登陆
export const reqLoginSms = (phone,captcha) =>ajax('login_sms',{phone,captcha})

//9.根据回话获取用户信息
export const reqUserinfo = () =>ajax('/userinfo')

//10.用户登陆
export const reqLoginOut = () =>ajax('注销')
