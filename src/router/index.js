import Vue from 'vue'
import Router from 'vue-router'

import Mine from '@/components/Mine/Mine'
import Regsiter from    '@/components/Mine/Regsiter'
import Login from    '@/components/Mine/Login'
import test from    '@/components/test/test'

import SuperMarket from '@/components/SuperMarket/SuperMarket'
import Birth from   '@/components/SuperMarket/Birth'
import Sell from   '@/components/SuperMarket/Sell'

import Competition from '@/components/Competition/Competition'
import CompetitionDetail from '@/components/Competition/CompetitionDetail'


Vue.use(Router)

export default new Router({
     mode:'history',
    routes: [
    // {
    //   path: '/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // // },
    // 	{

    // 	path:'/',
    // 	name:'TableBar',
    //     component:TableBar
    	
    //     },

            {
            path:'/regsiter',
            name:'Regsiter',
            component:Regsiter
            },
            {
                path:'/Mine',
                name:'Mine',
                meta:{requiresAuth:true},
                component:Mine
            },


             {
                path:'/test',
                name:'test',
                component:test
            },

            {
                path:'/Login',
                name:'Login',
                component:Login
            },
            
            {
                path:'/SuperMarket',
                name:SuperMarket,
                component:SuperMarket,
                children:[
                    {

                    path:'/birth',
                    name:'Birth',
                    component:Birth
                        
                    },
                    {

                    path:'/sell',
                    name:'Sell',
                    component:Sell
                        
                    }

                ]
            },

             {
                    path:'/Competition',
                    name:'Competition',
                    component:Competition
                },

               {

                    path:'/CompetitionDetail',
                    name:'CompetitionDetail',
                    meta:{requiresAuth:true},
                    component:CompetitionDetail


               } ,
               {
                path:'/test',
                name:'test',
                component:test
               }


        // {
        // path:'/regsiter',
        // name:'regsiter',
        // component:Regsiter
        // }
  ]
})
