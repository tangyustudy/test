<template>


	<div class="regsiter_container">
		

	    <div class="regsiter_container_outer regsiter_container_outer_bg">

	    	<div class="regsiter_container_inner">

	    			
	    		
					<div class="regsiter_container_inner__item regsiter_container_inner__item_01">
						<span slot="left">手机号：</span> <span class="span__warnning" v-show="!phone_show" v-html="error_phone"></span>
                		<input type="text" class="input_style" v-model="phoneNumber" @blur="lostFocus(1)">
						
					</div>

					<div class="regsiter_container_inner__item">
						<span>密码</span> <span class="span__warnning" v-show="pass_show" v-html="error_pass"></span>
						<input type="password" class="input_style" v-model="password" @blur="lostFocus(2)">
					
					</div>

					<div class="regsiter_container_inner__item">
						<span>验证码</span> <span class="span__warnning" v-show="code_show" v-html="error_code"></span>
						<input class="input_style input_style_checkedCode" v-model="checkedCode" @blur="lostFocus(3)">
						
						<yd-sendcode 
							slot="right" 
							v-model="isStart"  
							@click.native="sendCode"  
							type="warning"
							:show-clear-icon="false"
							:show-error-icon="false" 
							:show-success-icon="false" 
							init-str="立即发送"
							run-str="{%s}s" 
							reset-str="重新发送" 
							second="60"
							class="button_style button_style_sendNum"
						>
							
						</yd-sendcode>

					</div>


					<span class="button_style button_style_confirm_regsiter" :class="{button_style_click:isClick_comfirm}" @click="confirm">确 定</span>

					<span class="button_style span_login" @click="jumpToLogin">登录</span>	


	    	<!-- 	<p>{{phoneNumber}}</p>
	    		<p>{{password}}</p>
	    		<p>{{checkedCode}}</p> -->

	    		</div>
	    	</div>
	    	
	  

	</div>
</template>

<script type="text/babel">
    export default {
        data() { 
            return {
             
              phoneNumber:'',
		      password:'',
		      phone_show:false,
		      pass_show:false,
		      code_show:false,
		      isClick_comfirm:false,
		      error_phone:'请输入正确的手机号码！',
		      error_pass:'密码长度太低！',
		      error_code:'验证码错误！',
	          isStart:false,
	          checkedCode:''
            }
        },
        methods: {


		   //向后台申请验证码数据。
		   sendCode(){
		   		this.isStart=true;
		   		//TODO（后台生成验证码信息）。
		   		// this.$axios.get(url,{}).then(res=>{this._code=res.data.code})
		   },
		  
		   jumpToLogin(){
		   	this.$router.push('/Login');
		   },
		   confirm(){
            this.isClick_comfirm=true;
            setTimeout(()=>{this.isClick_comfirm=false},100);
            if(this.phone_show&&!this.pass_show&&this.phoneNumber!=""&&this.password!=""&&this.checkedCode.length===4){
              console.log("初步验证通过")
              const pn = this.phoneNumber;
              const pw = this.$md5.hex(this.password);
              const cc =this.checkedCode;
              let params ={pn,pw,cc}
              //todo(接口)
               // this.$axios.get(url,{params})
               // .then(()=>{})
               // .catch(()=>{});
               window.localStorage.setItem('token','122123333');
               this.$router.push('/Mine');
               console.log(params);
               this.phoneNumber="";
               this.password="";
               this.checkedCode="";

              }
            
        },

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
		        if(index===3){
		        	if(this.checkedCode.length!=4){
		        		this.code_show=true;
		        	}else this.code_show=false;
		        }
		      },
		    getFocus(){
	          this.phone_show=true;
	          this.pass_show=false;
	        },
		    
		  }
	
	}
	


		


		
       
            
    
</script>




<style scoped>
	
	.regsiter_container_inner__item_01{
		margin-top:2.0rem;
	}
	
	.input_style_checkedCode{
		width: 2.11rem;
		display: block;
		position: absolute;
	}


</style>
