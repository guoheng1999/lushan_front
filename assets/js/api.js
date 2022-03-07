const LUSHAN_CONFIG = {
	BASE_URL: 'http://106.12.109.129:8849/lushan',
	TIME_OUT: 100000
}

var instance = axios.create({
	baseURL: LUSHAN_CONFIG['BASE_URL'],
	timeout: LUSHAN_CONFIG['TIME_OUT'],
	headers: {
		'Access-Control-Allow-Origin': '*',
		'token': sessionStorage.getItem('')
	}
})

/***
	User Api
*/
function userLogin(data) {
	const {
		email,
		password
	} = data
	instance.post('/login', {
		'email': email,
		'password': password
	}).then(res => {
		console.log(res)
	}).catch(err => {
		console.error(err)
	})
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



/***
	UserProof Api
*/



/***
	Download Api
*/
