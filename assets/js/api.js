const LUSHAN_CONFIG = {
	BASE_URL: 'http://127.0.0.1:8081/lushan',
	TIME_OUT: 100000
}

const instance = axios.create({
	baseURL: LUSHAN_CONFIG['BASE_URL'],
	timeout: LUSHAN_CONFIG['TIME_OUT'],
	headers: {
		'Access-Control-Allow-Origin': '*',
		'token': sessionStorage.getItem('')
	}
});

const fileUploadInstance = axios.create({
	baseURL: LUSHAN_CONFIG['BASE_URL'],
	timeout: LUSHAN_CONFIG['TIME_OUT'],
	headers: {
		'Access-Control-Allow-Origin': '*',
		// 'token': sessionStorage.getItem(''),
		'token': 'eFhyenM4STFZd0JrRGc1WlVacHhvNE0wNkJGdTN1SXRVNGJFNHRZeG4vRkRoVXk2S0FRbzFhTVMzYjA2ajJXNQ==',
		'Conten-Type': "multipart/form-data"
	}
});


/***
	User Api
*/
// 用户登录
function userLogin(data) {
	const {
		email,
		password
	} = data
	return instance.post('/login', {
		'email': email,
		'password': password
	}).then(res => {
		console.log(res)
	}).catch(err => {
		console.error(err)
	})
}
// 用户注册
function userRegister(userInfo) {
	return instance.post(
		'/register',
		userInfo
	)
}

/***
	Device Api
*/
function getDeviceInfo() {
	return instance.get('/device/')
}

/***
	DataFile Api
*/

function downloadFile (url, formData) {
    return fileUploadInstance.get(url, formData).then(res=>res)
}


/***
	UserProof Api
*/
function uploadUserProof(formData) {
	return fileUploadInstance.post(
		'/file/upload/user/proof',
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
	return fileUploadInstance.post('/file/upload/user/proof', formData).then(res => {
		res.data
	})
}
