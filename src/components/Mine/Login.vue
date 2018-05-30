<template>
  
	<div class="regsiter_container">
		
    	
      <div class="Login_container_outer">
        
        <div class="regsiter_container_inner">

          <div class="regsiter_container_inner__item regsiter_container_inner__item_01">
              <span>账号</span> <span v-if="!phone_show" class="span__warnning" v-html="error_phone"></span>
              <input type="number" class="input_style" v-model="phoneNumber" @blur="lostFocus(1)" @focus="getFocus">

          </div> 

          <div class="regsiter_container_inner__item">
              <span>密码</span> <span v-if="pass_show" class="span__warnning" v-html="error_pass"></span>
              <input type="password" class="input_style" v-model="password" @blur="lostFocus(2)" @foucs="getFocus">

          </div>  

          
          <span class="button_style button_style_confirm_login" :class="{button_style_click:isClick_comfirm}" @click="confirm">确 定</span>

          <span class="button_style span_login goToregsiter"  @click="goToRegsiter">立即注册</span>

      <p>{{phoneNumber}}</p>
      <p>{{password}}</p>
        </div>
      </div>
    		
		

			

	</div> 


</template>

<script>
export default {
  name: '',
  data () {
    return {
      phoneNumber:'',
      password:'',
      phone_show:false,
      pass_show:false,
      isClick_comfirm:false,
      isClick_login:false,
      error_phone:'用户名格式错误！',
      error_pass:'密码长度太低！'
    }
    
  },
    methods:{
    	goToRegsiter(){
    		this.$router.push('/regsiter');
    	},

      getFocus(){
          this.phone_show=true;
          this.pass_show=false;
        },

      confirm(){
            this.isClick_comfirm=true;
            setTimeout(()=>{this.isClick_comfirm=false},100);
            if(this.phone_show&&!this.pass_show&&this.phoneNumber!=""&&this.password!=""){
              console.log("初步验证通过")
              const pn = this.phoneNumber;
              const pw =this.$md5.hex(this.password);
              let params ={pn,pw}
               // this.$axios.get(url,{params})
               // .then(()=>{})
               // .catch(()=>{});
               console.log(params);
               this.phone_show=false;
               this.error_phone="用户不存在或密码错误"
              }
            
        }

       ,   
      lostFocus(index){
        if(index===1){
        let checkedRule=/^1[3|4|5|8][0-9]\d{8}$/;
            if(checkedRule.test(this.phoneNumber)){
                this.phone_show=true;
              }
              else this.phone_show=false;
              return;
            }
        if(index===2){
          if(this.password.length<6){
            this.pass_show=true;
          }else this.pass_show=false;
        }
      }
    
  }
}    
  
</script>



<style scoped>

.regsiter_container_inner__item_01{
  margin-top:2.0rem;
}
.goToregsiter{
  height: 0.32rem;
  width: 1.3rem;
}


</style>
