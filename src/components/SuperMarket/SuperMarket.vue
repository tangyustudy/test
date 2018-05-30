<template>
  
	<div class="supermarket_wrap_container_outer">

      <div class="supermarket_wrap_container_inner">
      <Nav>
      

      </Nav>
		  <router-view ></router-view>
      </div>
    
	</div>





</template>

<script>
// import birth from './Birth.vue'
// import sell from './Sell.vue'


import Nav from './Nav.vue'
export default {


  name: 'supermarket',
  data () {
    return {
      
    }
  },
  components:{
    Nav
  },
  created(){

      this.$router.push('/birth');
      console.log('数据更新中');
  },
}
</script>



<style scoped>

  .supermarket_wrap_container_inner{
    width: 100%;
    background: url('./superMarket_bg@2x.png');
    background-size:cover;

  }




</style>
