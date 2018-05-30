
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


	const state={
		count:3,
		sum:5,
		menu:[
			      {link_animation:false,subMenu_islarge:true,to:'/birth',img_src:require('../../../static/tab_market@2x.png'),},
			      {link_animation:false,subMenu_islarge:false,to:'/Competition',img_src:require('../../../static/tab_match@2x.png'),},
			      {link_animation:false,subMenu_islarge:false,to:'/Mine',img_src:require('../../../static/tab_mine@2x.png'),},
		      ],

	}

	const mutations={
		add (state,n){
			state.count+=n;
		},
		reduce(state){
			state.count--;
			// console.log('reduce')
		}
	}


	const getters={
		count:function(state){

			return state['count']+=100;

		},		

	}

	const actions={//一般是在调用Mutations里面的方法
		addAction(context){
			// context.commit('add',10);
			setTimeout(()=>{context.commit('add',10)},2000);//说明这个方法的执行时异步的
			console.log("我要先上天了");
		},

		reduceAction({commit}){
			commit('reduce')
		},


		}

const store = new Vuex.Store({//此处的Store必须是大写
	state,mutations,getters,actions

})

export default store