import {config} from './config.js'

export const api = (prams) => { //prams 为我们需要调用的接口API的参数 下面会贴具体代码

	// 判断请求类型
	let headerData = {
		'content-type': 'application/json'
	}

	let dataObj = null
        //因为我们的GET和POST请求结构不同这里我们做处理，大家根据自己后台接口所需结构灵活做调整吧
	if (prams.method === "GET") {
		headerData = {
			'content-type': 'application/json',
			'token': uni.getStorageSync('token')
		}
	} else {
		dataObj = {
			'data': prams.query,
			'token': uni.getStorageSync('token')
		}
	}
	return new Promise((resolve, reject) => {
		let url = config.base_url + prams.url; //请求的网络地址和局地的api地址组合
		uni.showLoading({
			title: '加载中',
			mask: true
		})
		return uni.request({
			url: url,
			data: dataObj,
			method: prams.method,
			header: headerData,
			success: (res) => {
				uni.hideLoading()
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log(err)
				uni.hideLoading()
			},
			complete: (res) => {
				resolve(res);
				uni.hideLoading()
			}
		});
	})
}