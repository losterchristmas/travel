<template>
  <div class="list">
    <ul>
      <li class="item" v-for="item in letters" :key="item" @click="onClickAlphabet(item)" @touchstart='handleTouchStart' @touchmove='handleTouchMove' @touchend='handleTouchEnd' :ref="letters">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
	name: "CityAlphabet",
	props:{
		city:Array
	},
	data() {
		return {
			touchStatus:false,
			startY:0,
			timer:null,
		}
	},
	updated() {
		let ele;
			for(let x in this.$refs){
				ele = this.$refs[x][0]
			}
		this.startY = ele.offsetTop
	},
	computed:{
		letters(){
			const letters=[];
			for(let x in this.city){
				letters.push(this.city[x].initial)
			}
			return letters
		}
	},
	methods:{
		onClickAlphabet(e){
			this.$emit('change',e)
		},
		handleTouchStart(){
			this.touchStatus = true
		},		
		handleTouchMove(e){
			if(this.touchStatus){
				const touchY = e.touches[0].clientY - 79
				const index = Math.floor((touchY-this.startY)/20)
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					if(index>=0&&index<=this.letters.length)
					this.$emit('change',this.letters[index])
				}, 16);
				
				
			}
			
		
		},		
		handleTouchEnd(){
			this.touchStatus = false
		},
	}
};
</script>
<style lang="stylus" scoped>
	@import '~__css__/iconfont/varible.styl';
	.list
		position absolute
		top 4.5rem
		right 0
		bottom 0
		width 1.4rem
		display flex
		flex-direction column
		justify-content center
		.item
			text-align center
			color $bgColor
			line-height 20px
</style>
