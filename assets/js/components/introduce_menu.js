new Vue({
	el: '#introduce-menu',
	data() {
		return {
			currentDataType: 0,
		}
	},
	beforeMount() {
		this.getCurrentDataType()
	},
	watch: {},
	computed: {},
	methods: {
		getCurrentDataType() {
			href_str = window.location.href
			this.currentDataType = href_str.split('datasets-type=')[1][0]
		}
	}
})
