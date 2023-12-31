// new Vue({
// 	el: '#breadcrumbs',
// 	data() {
// 		return {
// 			dataLevelDict: {
// 				'0': '0级数据',
// 				'1': '1级数据'
// 			},
// 			dataTypeDict: {
// 				'0': '历史观测数据',
// 				'1': '现代设备观测数据'
// 			},
// 			pageName: '',
// 			breadcrumbs: [],
// 			deviceList: []
// 		}
// 	},
// 	mounted() {},
// 	created() {
// 		this.initDatasetsName()
// 		this.initeDataTypeName()
// 		this.initDeviceName()
// 		// this.initDataLevel()
// 		this.initPageName()
// 	},
// 	methods: {
// 		initeDataTypeName() {
// 			if (this.getDataType() != null) {
// 				this.breadcrumbs.push(this.dataTypeDict[this.getDataType()])
// 			}
// 		},
// 		initDeviceName() {
// 			if (this.getDataLevel() == null) return
// 			if (this.getDeviceId() != null) {
// 				response = getDeviceInfo()
// 				response.then(res => {
// 					this.deviceList = res.data.data || ["自动气象站", "雨量筒", "能见度仪", "云高仪", "雨滴谱仪", "雾滴谱仪",
// 						"颗粒物仪", "微雨雷达", "微波辐射计"
// 					]
// 					deviceId = this.getDeviceId()
// 					dName = this.deviceList[deviceId].deviceName || ''
// 					this.breadcrumbs.push(dName)

// 					this.initDataLevel()
// 				}).catch(err => {
// 					this.deviceList = ["自动气象站", "雨量筒", "能见度仪", "云高仪", "雨滴谱仪", "雾滴谱仪", "颗粒物仪", "微雨雷达",
// 						"微波辐射计"
// 					]
// 				})
// 			}
// 		},
// 		initDataLevel() {
// 			if (this.getDataLevel() != null) {
// 				this.breadcrumbs.push(this.dataLevelDict[this.getDataLevel()])
// 			}
// 		},
// 		initPageName() {
// 			this.pageName = document.title
// 		},
// 		initDatasetsName() {
// 			if (this.getDatasetsType() != null) {
// 				this.breadcrumbs.push('数据产品')
// 			}
// 		},
// 		toPage(item) {
// 			switch (item) {
// 				case '现代设备观测数据':
// 					pushTo('inner-page-currentDataIntroduce.html?datasets-type=2')
// 					break

// 				case '历史观测数据':
// 					pushTo('inner-page-historyIntroduce.html?datasets-type=1')
// 					break
// 			}

// 			if (item.endsWith('级数据')) {
// 				deviceName = this.breadcrumbs[this.breadcrumbs.indexOf(item) - 1]
// 				for (var i = 0; i < this.deviceList.length; i++) {
// 					if (this.deviceList[i].deviceName == deviceName) {
// 						pushTo('inner-page-deviceIntroduce.html?datasets-type=2&data-type=1&device-id=' + i)
// 					}
// 				}
// 			}
// 			for (var i = 0; i < this.deviceList.length; i++) {
// 				if (this.deviceList[i].deviceName == item) {
// 					pushTo('inner-page-deviceIntroduce.html?datasets-type=2&data-type=1&device-id=' + i)
// 				}
// 			}


// 		},
// 		getDatasetsType() {
// 			if (window.location.href.lastIndexOf('datasets-type=') != -1) {
// 				return window.location.href.split('datasets-type=')[1][0]
// 			}
// 		},
// 		getDataType() {
// 			if (window.location.href.lastIndexOf('data-type=') != -1) {
// 				return window.location.href.split('data-type=')[1][0]
// 			}
// 		},
// 		getDeviceId() {
// 			if (window.location.href.lastIndexOf('device-id=') != -1) {
// 				return window.location.href.split('device-id=')[1][0]
// 			}
// 		},
// 		getDataLevel() {
// 			if (window.location.href.lastIndexOf('data-level=') != -1) {
// 				return window.location.href.split('data-level=')[1][0]
// 			}
// 		},
// 		goBack() {
// 			window.history.back()
// 		},
// 	}
// })
