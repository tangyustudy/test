<template>
  
	<div class="nav-container">
     <div class="nav-container-title">
            <div class="market_title market_title_birth" :class="{market_title_animation:isBottom}" @click="tilteClick('birth')"></div>
            
            <div class="market_title market_title_sell" 
            :class="{market_title_animation:!isBottom}" @click="tilteClick('sell')"></div>


     </div>

  </div>




</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
        title:[],
      isBottom:false
    }

  },
  mounted(){

      this.$router.push('/birth');

  }
  ,
  methods:{
      tilteClick(e){
        if(e=='birth'){
          this.$router.push('/birth');
        }else{
          this.$router.push('/sell');
        }
        this.isBottom=!this.isBottom;
      }

  }
}
</script>



<style scoped>

.nav-container{
  height: 0.93rem;
  width: 100%;

}
.nav-container-title{
    width: 4.3rem;
    height: 0.93rem;
    display: inline-block;
    position: absolute;
    left: 50%;
    margin-left:-2.1rem;
}
.market_title{
  height: 0.93rem;
  width: 1.81rem;
  position: absolute;
}
.market_title_birth{
  background:url('./birth@2x.png') no-repeat;
  background-size:cover;
}
.market_title_sell{
  margin-left:2.22rem;
  background:url('./sell@2x.png') no-repeat;
  background-size:cover;
}







.market_title_animation{

  margin-top:-0.2rem;

}

</style>
