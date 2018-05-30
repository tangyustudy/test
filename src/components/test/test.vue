<template>
  
	<div>

      <div>

	       <h1>这是一个测试</h1>
          {{params}}
        
      </div>
	</div> 


</template>

<script>

export default {
  name: 'test',
  data () {
    return {

      params:{}
    }
    
  },
  components:{


      },
  created(){
    this.params=this.$route.params.params;
  }
}
</script>



<style scoped>

</style>
