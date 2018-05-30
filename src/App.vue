<template>
  <div id="app" >

  <div class="app_container">
    
    <router-view/>

    

    <div class="tabbar">
        <div v-for="(item,index) in $store.state.menu" class="subMenu" :class="{link_animation:item.link_animation,subMenu_islarge:item.subMenu_islarge}" @click="linkClick(index)">
              
          <div class="menu_img">
            
            <img  :src="item.img_src" style="width: 100%;height: 100%;" />

          </div>         

        </div>

  </div>
<!-- 
        <div class="subMenu text-center" :class="{link_animation:isMatch,'subMenu-islarge':islarge}" @click="linkClick('isMatch')">   
        <router-link to='/Competition'>
          
                    <img class="menu_img"  src="./assets/logo.png" />          

              <div>
                  <span>比赛</span>
              </div>
        </router-link>  
          
        </div>

        <div class="subMenu text-center" :class="{link_animation:isMine,'subMenu-islarge':islarge}" @click="linkClick('isMine')">

        <router-link to='/Mine'>
                    <img class="menu_img"  src="./assets/logo.png" />          
              <div>

                <span>我的</span>

              </div>
              
        </router-link>  
          
        </div> -->
    </div>
       

  </div>
</template>

<script>
export default {
  name: 'App',
  
  created(){
    console.log('app的created的方法');
  },
  mounted(){
    this.$router.push('/SuperMarket');
  },
  data(){

    return {
     
    }
  },
  methods:{

    // linkClick(e){

    //     if(e=='isMarket'){
             
    //         this.isMarket=!this.isMarket;
    //        setTimeout(()=>{
    //         this.isMarket=!this.isMarket;

    //        },1000)
          
    //     }else if(e=='isMatch'){
    //         this.isMatch=!this.isMatch;
    //         setTimeout(()=>{
    //           this.isMatch=!this.isMatch;
    //           this.islarge=!this.isMatch;
    //         },1000);

    //     }else if (e=='isMine'){

    //         this.isMine = !this.isMine;
    //         setTimeout(()=>{
    //           this.isMine=!this.isMine;
    //         },1000);

    //     }
 

    // }

    linkClick(index){

      for(let i=0;i<this.$store.state.menu.length;i++){

        this.$store.state.menu[i].link_animation=false;
        this.$store.state.menu[i].subMenu_islarge=false;
      }
      this.$router.push(this.$store.state.menu[index].to);
      this.$store.state.menu[index].link_animation=true;
      this.$store.state.menu[index].subMenu_islarge=true;
    }


  }
}
</script>

<style scoped>

.app_container{

  font-family:'方正粗圆简体';
}


.tabbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.98rem;
    color:#f4f4f4;
    background: url('./tab_bg@2x.png') no-repeat;
    background-size:cover;
    opacity: 1;
    z-index: 1000;

}
.subMenu{

   float: left;
    width: 33%;
    height: 0.98rem;
    cursor: pointer;
    margin-bottom:0.3rem;
    display: table-cell;
    vertical-align: middle;
    position: relative;
}
.subMenu_islarge{
  transform: scale(1.4);
}

.menu_img{

    display: inline-block;
    height: 0.98rem;
    width: 1.2rem;
    border: 0;
    vertical-align: middle;
    position:absolute;
    left: 50%;
    margin-left:-0.6rem; 
    top: -7%;
    
}


</style>
