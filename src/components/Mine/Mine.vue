<template>
  
	<div class="mine_wrap_container_outer">

		<div class="mine_wrap_container_inner">

		<div class="mine_user_info">
			
			<div class="mine_user_headImg">
				<img :src="userMSG.headIMG[sum]" @click="dianji" style="height: 100%;width: 100%">
			</div>
			<div class="mine_user_wealth">
					<span class="mine_user_title_span">{{userMSG.name}}</span>
					<div class="mine_user_wealth_number">
						<p>ETH：0.35个</p>
						<p>HLW：300个</p>
					</div>
			</div>
			<div class="mine_user_wallet"></div>


		</div>
		<div class="mine_split_line"></div>

		<div class="mine_user_pet_container">

       		 	<span class="mine_user_title_span">我的宠物</span>
	               	
       		 <div  class="mine_user_pet_container_list">
			 
	               <div  v-for="item in mypet" class="mine_user_pet_container_item"> 

	               	
	               	
		                        <div class="mine_user_pet_container_item_image">
		                             <img :src="item.pet_img" style="height: 100%;width: 100%;">
		                        </div>
		                        <p>{{item.id}} {{item.name}}</p>
		                        <p>稀有度：{{item.proto}}</p>
	               	
	               </div>   
			 

       		 </div>

		</div>

		
		<div class="mine_user_pet_container">

       		 	<span class="mine_user_title_span">我的拍卖</span>
	               	
       		 <div  class="mine_user_pet_container_list">
			 
	               <div  v-for="item in mysell" class="mine_user_pet_container_item"> 

	               	
	               	
		                        <div class="mine_user_pet_container_item_image">
		                             <img :src="item.pet_img" style="height: 100%;width: 100%;">
		                        </div>
		                        <p>{{item.id}} {{item.name}}</p>
		                        <p>稀有度：{{item.proto}}</p>
	               	
	               </div>   
			 

       		 </div>

		</div>
    	
		</div>
			
	</div> 


</template>

<script>
export default {
  name: '',
  data () {
    return {

      userMSG:{name:'沙拉',headIMG:[require('./sara_temp.png'),require('./sara_temp.png'),require('./sara_temp.png'),require('./sara_temp.png'),require('./sara_temp.png')]},
      mypet:[
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      
     
      ],
      mysell:[

      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},
      {id:'#3316',name:'sara',proto:280,pet_img:require('./sara_temp.png')},

      ],
      sum:0,
    }
    
  },
	  methods:{
	  	dianji(){
	  		this.sum++
	  		if(this.sum>=this.userMSG.headIMG.length)
	  			this.sum=0;
	  		console.log(this.sum);
	  	}
	  }
}
</script>



<style scoped>










</style>
