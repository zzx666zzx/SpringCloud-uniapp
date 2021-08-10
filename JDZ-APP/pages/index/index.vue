<template>
	<view class="content">
		<view>
			pppppp
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				list:[],
			}
		},
		onLoad() {
				this.getVideo();
			
		},
		methods: {
			getVideo(){
				this.$nextTick(function(){
					this.$http.post('/api/login',{
						username:"admin",
						passward:"123456"
					}).then((res)=>{
						console.log(res);
						
						this.list=res.data.list;
					});
					
				})
			}
			
		}
	}
</script>

<style>
	.content{
		height: 100%;
		width: 100%;
	}
	
</style>
