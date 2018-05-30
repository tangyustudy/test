<template>
  
	<div  >
        <div >
          
          <h1>模特大赛</h1>
        <p>选择您的角色参加大赛：（可多选）</p>

        <div  class="CompetitionDetail-container">


            <div class="role-container" v-for="(item , index) in roleDate" :key="index" :class="{test:item.isClick}" @click="clickme(index)">
              
                   <div class="role-container-details" >
                           
                            <div class="role-container-details-img">
                                 {{item.img}}
                            </div>
                            <span>{{item.name}}</span>
                   </div>   

            </div>

      </div>
      
      </div>

        <div>

        </div>

      <div>
        <p>已选择{{checkedData.length}}个角色</p>
        <p>支付{{checkedData.length*30}}HLW参赛费</p>
        <button>立即支付</button>
      </div>

      <div>
        
        <h1>比赛奖项</h1>
        <p>一等奖：</p>
        <p>二等奖：</p>
        <p>三等奖：</p>
      </div>


	</div>





</template>

<script>
// import birth from './Birth.vue'
// import sell from './Sell.vue'


export default {


  name: 'CompetitionDetail',
  data () {
    return {
      checkedData:[],
     
      roleDate:[

          {name:'sara',img:'图片占位',number:'1', isClick:false},
          {name:'sara',img:'图片占位',number:'1', isClick:false},
          {name:'sara',img:'图片占位',number:'1', isClick:false},
          {name:'sara',img:'图片占位',number:'1', isClick:false},
          {name:'sara',img:'图片占位',number:'1', isClick:false},
          {name:'sara',img:'图片占位',number:'1', isClick:false},
          {name:'sara',img:'图片占位',number:'1', isClick:false},
         
      ]
    }
  },
  components:{
    
  }
  ,
  methods:{
       clickme(num){
              var temp=[];
              
              this.roleDate[num].isClick=!this.roleDate[num].isClick;

              for(let i=0;i<this.roleDate.length;i++){
                 if(this.roleDate[i].isClick){
                    temp.push(this.roleDate[i]);
                 } 
                
              }
              this.checkedData=temp;
            }


      },
  computed:{



  }
}


</script>



<style scoped>

  .CompetitionDetail-container{

    display: flex;
    width: 100%;
    height: 12rem;
    margin-top:1.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    border: .1rem solid green;
    overflow: auto;

  }
  .role-container{
    
    width: 40%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 0.01rem solid black;
    margin: 0.1rem

  }

 .role-container .role-container-details{
    text-align: center;
    background-color:pink; 
    display: block;
    z-index: 3;
  }

  .role-container .role-container-details .role-container-details-img{
  
      width:5rem;
      height: 5rem;
      border: .5rem solid red;


  }

  .macth-button{
    margin-right:0;

  }
.CompetitionDetail-container .test{

    background-color:#000


}
</style>
