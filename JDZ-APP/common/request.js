import { api } from './http.js'

var post= function(url,query) {
	return api({
		url: url,
		method: 'POST',
		query: {...query}
	})
}

var get= function(url,query){
	return api({
		url: url,
		method: 'GET',
		query: {...query}
	})
}
export default{
 post,
 get
}