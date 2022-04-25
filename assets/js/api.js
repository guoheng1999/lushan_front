
DEV_BASE_URL = 'http://10.23.107.96:8081/lushan'
DEV1_BASE_URL = 'http://127.0.0.1:8081/lushan'
TEST_BASE_URL = 'http://106.13.10.209:8849/lushan'

const LUSHAN_CONFIG = {
	BASE_URL: TEST_BASE_URL,
	TIME_OUT: 100000
}

const instance = axios.create({
	baseURL: LUSHAN_CONFIG['BASE_URL'],
	timeout: LUSHAN_CONFIG['TIME_OUT'],
	headers: {
		'Access-Control-Allow-Origin': '*',
		'token': sessionStorage.getItem('logintoken') || ''
	}
});

const fileUploadInstance = axios.create({
	baseURL: LUSHAN_CONFIG['BASE_URL'],
	timeout: LUSHAN_CONFIG['TIME_OUT'],
	headers: {
		'Access-Control-Allow-Origin': '*',
		// 'token': sessionStorage.getItem(''),
		'token': sessionStorage.getItem('logintoken') || '',
		'Conten-Type': "multipart/form-data"
	},
	responseType: 'blob'
});


/***
	User Api
*/

function userLogin(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).post('/login', params)
}
//重置密码
function findPWD(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).put('/user/password', params)
}
//发送邮件
function seedMessage(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).post("/email", params)
}

//发送验证码
function sendValidateMessage(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).post("/email/resetPassword", params)
}
// 用户注册
function userRegister(userInfo) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).post(
		'/register',
		userInfo
	)
}
//获取用户信息
function UserList(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).get("user/" + params)
}
/***
	Device Api
*/
//获取历史数据
function getHistoryData(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).get("historyXlsxData/type/" + params)
}
//获取原始记录
function getOriginDataList(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).get("historyPictureData/historyDataName/" + params)
}
//下载历史数据
function downloadHistoryData(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			// 'token': sessionStorage.getItem(''),
			'token': sessionStorage.getItem('logintoken') || '',
			'Conten-Type': "multipart/form-data"
		},
		responseType: 'blob'
	}).post("file/download/historyData",params)
}
//下载历史数据图片
function downloadHistoryImg(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			// 'token': sessionStorage.getItem(''),
			'token': sessionStorage.getItem('logintoken') || '',
			'Conten-Type': "multipart/form-data"
		},
		responseType: 'blob'
	}).post("file/download/historyData/picture" ,params)
}
//数据反馈
function feedbackData(feedbackMessage) {
	const data = {
		'content': feedbackMessage,
		'userEmail': JSON.parse(sessionStorage.getItem('userdata')).email
	}
	console.log(data)
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).post('/comment/', data)
}

//获取现代数据
function getDayTime(dataLevel,deviceId) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).get("currentData/deviceId/dataLevel/times?dataLevel=" +dataLevel+"&deviceId="+deviceId)
}

//获取现代数据
function getDayTimeYear(dataLevel,dataType,deviceId, year) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).get("currentData/deviceId/dataLevel/year?dataLevel=" +dataLevel+"&dataType="+dataType+"&deviceId="+deviceId + "&year=" + year)
}

//下载现代数据
function downloadCurrentData(params) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			// 'token': sessionStorage.getItem(''),
			'token': sessionStorage.getItem('logintoken') || '',
			'Conten-Type': "multipart/form-data"
		}
	}).post("file/download/currentData", params)
}

function getDeviceInfo() {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'token': sessionStorage.getItem('logintoken') || ''
		}
	}).get('/device/')
}

/***
	DataFile Api
*/

function downloadFile(url, formData) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			// 'token': sessionStorage.getItem(''),
			'token': sessionStorage.getItem('logintoken') || '',
			'Conten-Type': "multipart/form-data"
		}
	}).get(url, formData).then(res => res)
}


/***
	UserProof Api
*/
function uploadUserProof(formData) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			// 'token': sessionStorage.getItem(''),
			'token': sessionStorage.getItem('logintoken') || '',
			'Conten-Type': "multipart/form-data"
		}
	}).post(
		'/file/upload/user/proof',
		formData
	)
}


function uploadCommentFile(formData) {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			// 'token': sessionStorage.getItem(''),
			'token': sessionStorage.getItem('logintoken') || '',
			'Conten-Type': "multipart/form-data"
		}
	}).post(
		'/file/upload/commentFile',
		formData
	)
}



/***
	Download Api
*/



/***
	Upload Api
*/

function uploadFile() {
	return axios.create({
		baseURL: LUSHAN_CONFIG['BASE_URL'],
		timeout: LUSHAN_CONFIG['TIME_OUT'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			// 'token': sessionStorage.getItem(''),
			'token': sessionStorage.getItem('logintoken') || '',
			'Conten-Type': "multipart/form-data"
		}
	}).post('/file/upload/user/proof', formData).then(res => {
		res.data
	})
}
