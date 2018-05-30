<template>
  <div>
    
    <div v-for="(item, index) in data" :key="index" :class="{testclass:item.check}" @click="clickme(index)">
        <div>
        {{item.name}}  
        </div>
       <div>
        {{item.text}}
       </div>
       
    </div>
  
      <div>
        
         您当前选中{{checkedData.length}}个角色，
         需要支付{{checkedData.length*30}}￥。
      </div>

  </div>
</template>
<script>


export default {
        data() {
            return {
                checkedData:[],
                data: [ 
                {name:'张三',number:'1',text:'wenzi',check:false},
                {name:'李四',number:'1',text:'wenzi',check:false},
                {name:'王五',number:'1',text:'wenzi',check:false},
                {name:'赵六',number:'1',text:'wenzi',check:false},
                {name:'老王',number:'1',text:'wenzi',check:false},
                {name:'老宋',number:'1',text:'wenzi',check:false},
                {name:'老马',number:'1',text:'wenzi',check:false},
                {name:'老白',number:'1',text:'wenzi',check:false},
                
                 ]
            }
        },
        methods:{
            clickme(num){
              var temp=[];
              
              this.data[num].check=!this.data[num].check;

              for(let i=0;i<this.data.length;i++){
                 if(this.data[i].check){
                    temp.push(this.data[i]);
                 } 
                
              }
              this.checkedData=temp;
            }

        }
    }



  
</script>
<style>

.testclass{
  
    background-color:green


}


</style>
