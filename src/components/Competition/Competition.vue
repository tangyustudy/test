<template>
 	
	<div class="container">

		<div class="match_wrap_container">

			<div class="match_header_descript">
				<div class="match_header_descript_picture">
					
				</div>
				<div class="match_header_descript_text">
					<div class="match_header_descript_text_title">
						<span>GOLD OF HERO</span>
					</div>
					<div class="match_header_descript_text_details">
						<p>一等奖：电影广告植入（需审核）、正品公仔、电影票3张、表情包1套</p>
						<p>二等奖：正品公仔、电影票3张、表情包1套</p>
						<p>三等奖：电影票3张、表情包1套</p>
						
					</div>

				</div>	
			

			</div>

			<div class="match_body_containner">
				

				<div @click="model_click" class="match_details_container" v-for="item in match">
					
					<div class="match_details_container_pictuer">
						<img :src="item.match_picture_src" style="height: 100%;width: 100%;">
					</div>
					<div class="match_details_container_joinIn">
						
						<div class="match_details_container_joinIn_coditon">
							<div class="match_details_container_joinIn_coditon_name">
								<label>{{item.match_name}}大赛</label>
							</div>
							<div class="match_details_container_joinIn_coditon_codition">
								 <p>参赛条件：{{item.join_price}}HLW</p>
								 <p>参赛角色：{{item.join_role}}</p>
							</div>
							
						</div>
						<div class="match_details_container_joinIn_button">
							<img :src="item.join_button_picture_src" style="height: 100%;width: 100%;">

						</div>	

					</div>

				<div class="match_split_line"></div>
				</div>

				
			</div>	
		</div>

	</div>
</template>

<script>
export default {
  name: 'Competition',
  data () {
    return {
      match:[
      	{match_name:'模特',match_picture_src:require('./competition_model@2x.png'),join_price:30,join_role:'沙拉/女巫',join_button_picture_src:require('./match_joinin_btn@2x.png')},
      	{match_name:'健身',match_picture_src:require('./competition_slim@2x.png'),join_price:30,join_role:'沙拉/女巫',join_button_picture_src:require('./match_joinin_btn@2x.png')},
      	{match_name:'萌宠',match_picture_src:require('./competition_cutePet@2x.png'),join_price:30,join_role:'蓝怪、骆驼卡毛、神灯哈里等宠物角色',join_button_picture_src:require('./match_joinin_btn@2x.png')},
      	{match_name:'神兽',match_picture_src:require('./competition_monster@2x.png'),join_price:30,join_role:'沙拉/女巫1111111111111111111111',join_button_picture_src:require('./match_joinin_btn@2x.png')},
      ],
    }
  },
  methods:{

  		model_click(){
  			console.log("前往模特大赛");
  			this.$router.push("/CompetitionDetail")
  		}

  }
}
</script>



<style scoped>

	.container{
		
		height: 100vh;
		width: 100%;
		background:url('./match_bg@2x.png') no-repeat;
		background-size:cover;
	}

	.match_wrap_container{
		height: 88vh;
		width: 5.66rem;
		margin:0 auto;
	 	position: absolute;
    	left: 50%;
    	margin-left:-2.86rem;
    	margin-top:15vh;
    	overflow: hidden;
    }
	

	.match_header_descript{
		width: 5.66rem;
		height: 2.65rem;
		position: relative;
	}



	.match_split_line{
		width: 5.3rem;
		height: 0.02rem;
		margin: 0 auto;
		background:url('./match_splite_line@2x.png') no-repeat;
		background-size:cover;
	}




	.match_header_descript .match_header_descript_picture{
		width: 2.2rem;
		height: 1.63rem;
		float: left;
		background: url('./match_header@2x.png') no-repeat;
		background-size:cover;
	}

	.match_header_descript_text{
		height: 2.18rem;
		width: 3.35rem;
		margin-top:0.2rem;
		float: left;
	}
	.match_header_descript_text_title{
		height: 0.32rem;
		width: 4.5rem;
	}

	.match_header_descript_text_title span{
		 font-size: 0.42rem;
		 line-height: 0.42rem;
		 color:#6b2300;
		 letter-spacing:-0.05rem;
	}
	.match_header_descript_text_details{
		height: 1.66rem;
		width: 3.35rem;
		margin-top:0.2rem;
	}
.match_header_descript_text_details p{
	
		line-height: 0.29rem;
		font-size: 0.22rem;
		color: #af6b3e;

}




.match_details_container{
	
		margin-top:0.11rem;
		width: 5.66rem;
		height: 1.80rem;	
		margin-bottom:0.18rem;
	}

.match_details_container_pictuer{

	width: 1.46rem;
	height: 1.58rem;
	float: left;
	margin-right:0.2rem;

}
.match_details_container_joinIn{
	height: 1.25rem;
	width:3.9rem; 
	float: left;
	margin-top:0.26rem;
}
.match_details_container_joinIn_coditon{
	width:2.06rem;
	float: left;
	margin-right:0.75rem;
}
.match_details_container_joinIn_coditon_name{
	width: 2.8rem;
	height: 0.38rem;

}
.match_details_container_joinIn_coditon_name label{
	font-size: 0.38rem;
	line-height: 0.38rem;
	color: #813610;
}
.match_details_container_joinIn_coditon_codition{
	margin-top:0.16rem;
	height: 0.51rem;
	width: 2.8rem;
}
.match_details_container_joinIn_coditon_codition p{
	font-size: 0.22rem;
	line-height: 0.26rem;
	color: #a35c33;
}

.match_details_container_joinIn_button{
	height:1.14rem;
	width: 1.06rem;
	float:left;
}

</style>
 