
import axios from 'axios';
var baseUrlOne = IPConfigOne;

var baseUrlOne = IPConfigOne;


//获取人口总接口
export function populationApi(params) {
	// return axios.post(baseUrlOne+'/api/rkqk/testHomeAll',params)
	return new Promise((resolve, reject) => {
        axios.post(baseUrlOne+'/api/rkqk/homeAll?year=' + params).then((res) => {
			resolve(res)
        }).catch((err) => {
			reject(err)
        })
    })
}

//获取就业及收入总接口
export function employmentApi(params) {
	// return axios.post(baseUrlOne+'/api/rkqk/testHomeAll',params)
	return new Promise((resolve, reject) => {
        axios.post(baseUrlOne+'/api/jysr/homeAll?year=' + params).then((res) => {
			resolve(res)
        }).catch((err) => {
			reject(err)
        })
    })
}

//获取社会保障情况总接口
export function socialSecurityApi(params) {
	// return axios.post(baseUrlOne+'/api/rkqk/testHomeAll',params)
	return new Promise((resolve, reject) => {
        axios.post(baseUrlOne+'/api/socialsecurity/homeAll?year=' + params).then((res) => {
			resolve(res)
        }).catch((err) => {
			reject(err)
        })
    })
}

//获取经济水平总接口
export function economicsApi(params) {
	// return axios.post(baseUrlOne+'/api/rkqk/testHomeAll',params)
	return new Promise((resolve, reject) => {
        axios.post(baseUrlOne+'/api/economic/homeAll?year=' + params).then((res) => {
			resolve(res)
        }).catch((err) => {
			reject(err)
        })
    })
}

//获取医疗卫生总接口
export function medicalApi(params) {
	// return axios.post(baseUrlOne+'/api/rkqk/testHomeAll',params)
	return new Promise((resolve, reject) => {
        axios.post(baseUrlOne+'/api/healthcare/homeAll?year=' + params).then((res) => {
			resolve(res)
        }).catch((err) => {
			reject(err)
        })
    })
}