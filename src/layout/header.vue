<template>
    <div class="ev-header">
        <div class="header-left">
            <div class="h-logo"></div>
            <div class="header-content">
                <div class="h-container">
                    <div class="h-menu-item" v-for="(item, index) in homeRes[lang]['menubar']" :key="index">
                        <div v-if="item.router == 'courses'">
                            <div class="r-courses" style="position: relative;">
                                <router-link class="semibold" :to="'/' + item.router">{{ item.name }}</router-link>
                                <el-tree
                                    ref="treeRef"
                                    class="filter-tree"
                                    :data="homeRes[lang]['courseChild']"
                                    @node-click="courseSelected"
                                />
                            </div>
                        </div>
                        <div v-else-if="item.router == 'lecturers'">
                            <div class="r-courses" style="position: relative;">
                                <router-link class="semibold" :to="'/' + item.router">{{ item.name }}</router-link>
                                <!-- <el-tree
                                    ref="treeRef"
                                    class="filter-tree"
                                    :data="homeRes[lang]['courseChild']"
                                    default-expand-all
                                /> -->
                            </div>
                        </div>
                        <div v-else>
                            <router-link class="semibold" :to="'/' + item.router">{{ item.name }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-action">
            <button class="h-btn1 semibold">{{ homeRes[lang]['menuButton'].action1.name }}</button>
            <button class="h-btn2 semibold">{{ homeRes[lang]['menuButton'].action2.name }}</button>
        </div>

    </div>
</template>
<script>
import homeRes from '@/resources/home.js'
export default {
    name: "EHeader",
    data(){
        return{
            homeRes: homeRes,
            lang: '',
        }
    },
    created(){
        this.lang = sessionStorage.lang;
    },

    methods: {
        courseSelected(node) {
            if (node.id) {
                switch(node.id){
                    case 1: {
                        this.$router.push('course-kid');
                        console.log(this.$router);
                        break;
                    }
                    
                }
            }
        }
    },
}
</script>
<style scoped>
    @media (max-width: 1200px){
        .ev-header .h-container{
            column-gap: 28px !important;
        }
    }

    
    .r-courses:hover .filter-tree{
        display: block;
    }
    .filter-tree{
        position: fixed;
        top: 53px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 20px 20px;
        display: none;
    }
    .ev-header{
        height: 64px;
        padding: 0px 20px;
        display: flex;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;
        justify-content: space-between;
        overflow: hidden;
        z-index: 3;
        position: fixed;
        width: calc(100% - 40px);
        background-color: #fff;
    }
    .h-logo{
        height: 28px;
        width: 140px;
        background: url('@/assets/image/logo.png') no-repeat;
        background-size: contain;
    }

    .header-left{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ev-header .h-container{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 46px;
        margin-left: 50px;
    }

    .ev-header .h-container .h-menu-item a {
        border-bottom: solid 2px transparent;
        text-decoration: none;
        color: #333333;
        line-height: 40px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 8px 0;
    }

    .ev-header .h-container > .h-menu-item:hover a, .router-link-exact-active {
        color: #00afef !important;
        border-bottom: solid 2px #00afef !important;
        cursor: pointer;
    }

    .header-action{
        column-gap: 25px;
        display: flex;
        align-items: center;        
    }

    .header-action > button {
        padding: 8px 16px;
        border-radius: 8px;
        max-height: 40px;
        font-size: 16px;
        white-space: nowrap;
        cursor: pointer;
    }

    .header-action .h-btn1{
        background-color: transparent;
        border: solid #00afef 1px;
        color: #00afef;
    }

    .header-action .h-btn2{
        background-color: #00afef;
        border: unset;
        color: #fff;
    }

    .header-action .h-btn2:hover{
        background-color: #0391c5;
    }

    .header-action .h-btn1:hover{
        border-color: #0391c5;
        color: #0391c5;
    }

</style>