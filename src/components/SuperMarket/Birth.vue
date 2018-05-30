<template>
  
	<div class="birth_wrap_container_outer">

			<div class="birth_wrap_container_inner">
			<!-- 	<button @click="$store.commit('add',10)">+</button>
				{{count}}		
				<button @click="reduce">-</button>
				
			</div>
			<div>
				<button @click="addAction">+</button>
				{{count}}		
				<button @click="reduceAction">-</button> -->
				
        <div class="birth_pet_details" v-for="(item,index) in pet" @click="jumpTo(index)">
            
            <div class="birth_pet_details_image">
              <img class="pet_img" :src="item.pet_img" alt="item.name">
            </div>
            <div class="birth_pet_details_line"></div>
            <div class="birth_pet_details_sellprice">
               <span>售卖：<span class="span_number">{{item.price}}</span> ETH</span>
            </div>
            <div class="birth_pet_details_descript">
              <span>{{item.id}}·{{item.name}}·稀有度：{{item.rare}}</span>
            </div>

        </div>
      
      

			</div>  

		<!-- 	<button @click="getSession">获取sesstionStorage</button>{{sessionStorage}} -->

	</div>

</template>

<script>
// import store from '../../common/js/store'
  var mylib = require('../../common/js/model.js');

import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  data () {
    return {
    	name:'Birth',
      	// sessionStorage:''
      price:'10',
      pet:[
        {id:'3301',name:'沙拉',rare:'30',price:'0.189',pet_img:require('./Sara@2x.png')},
        {id:'3301',name:'沙拉',rare:'50',price:'0.159',pet_img:require('./Sara@2x.png')},
        {id:'3301',name:'沙拉',rare:'10',price:'0.1229',pet_img:require('./Sara@2x.png')},
        {id:'3301',name:'沙拉',rare:'50',price:'0.189',pet_img:require('./Sara@2x.png')},
        {id:'3301',name:'沙拉',rare:'60',price:'0.189',pet_img:require('./Sara@2x.png')},
        {id:'3301',name:'沙拉',rare:'20',price:'0.189',pet_img:require('./Sara@2x.png')},
        {id:'3301',name:'沙拉',rare:'30',price:'0.18',pet_img:require('./Sara@2x.png')},
        {id:'3301',name:'沙拉',rare:'70',price:'0.189',pet_img:require('./Sara@2x.png')},
       
      ],

    }
    
  },
 
  methods:{
  	...mapMutations(['add','reduce']),
  	...mapActions(['addAction','reduceAction']),
    jumpTo(index){
      let params = this.pet[index];
      this.$router.push({name:'Regsiter',params:{params}});
    }
  },
  computed:{

  	// ...mapState(['count']),
  	// ...mapGetters(['count']),
  	// count(){
  	//  return	this.$store.getters.count;
  	// }
  },
}
</script>



<style scoped>

.birth_wrap_container_outer{
  background-size:cover;
  height: 110vh;
  width:7.16rem;
  margin: 0 auto;
  overflow: hidden;
}
.birth_wrap_container_inner{

  width: 7.16rem;
  height: 100vh;
  margin-top:0.26rem;
  overflow-y: scroll;
  overflow-x: hidden;

}
.birth_wrap_container_outer::-webkit-scrollbar {display: none;}
.birth_wrap_container_inner::-webkit-scrollbar {display: none;}
.birth_wrap_container::-webkit-scrollbar {display:none}

.birth_pet_details{
  height: 4.32rem;
  width: 3.29rem;
  float:left;
  margin-left:0.13rem;
  margin-right:0.13rem;
  margin-top:0.3rem;
  background: url('./pet_bg@2x.png') no-repeat

}
.birth_pet_details_image{

    width:1.64rem;
    height: 2.60rem;
    margin-top:0.4rem;
    margin-left:0.71rem;
}

img{
  height:100%;
  width: 100% 

}

.birth_pet_details_line{

  width: 2.72rem;
  height: 0.02rem;
  background-color:#d3a183;
  margin-top:0.18rem;
  margin-left:0.29rem;
}
.birth_pet_details_sellprice{
  width:100%;
  height: 0.28rem;
  margin-left:0.31rem;
  margin-top:0.15rem;
  line-height: 0.28rem;
  display: inline-block;
  vertical-align: middle;                                   
}
.birth_pet_details_sellprice span{ 
  font-size: 0.28rem;
 /* -webkit-text-stroke: 0.009rem #35176d;*/
  color: #4b2b87;
  width: 3.0rem;
  white-space:nowrap;
}

.birth_pet_details_sellprice span .span_number{
  width: 1rem;
  overflow:hidden;
  white-space:nowrap;
  height: 0.28rem;
  line-height: 0.28rem;
  text-overflow:ellipsis;
  text-align: center;
  display: inline-block;
  position: relative;
  top: 65%;
  transform: translateY(-50%);

}

.birth_pet_details_descript{
  height: 0.21rem;
  width: 100%;
  margin-left:0.29rem;
  margin-top:0.14rem;
}
.birth_pet_details_descript span{
  font-size: 0.22rem;
  color: #bf5c1f;
}
</style>
