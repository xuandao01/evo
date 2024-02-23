<template>
    <div class="ev-header">
        <div class="header-left">
            <div class="h-logo" @click="() => {$router.push('/')}"></div>
            <div class="header-content desktop-mode">
                <div class="h-container">
                    <div class="h-menu-item" v-for="(item, index) in homeRes[lang]['menubar']" :key="index">
                        <div v-if="item.router == 'course-kid'">
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
        <div class="header-action desktop-mode">
            <button class="h-btn1 semibold">{{ homeRes[lang]['menuButton'].action1.name }}</button>
            <button class="h-btn2 semibold">{{ homeRes[lang]['menuButton'].action2.name }}</button>
        </div>
        <div class="header-right mobile-mode">
            <div class="header-btn menu-button" @click="showMobileMenu"></div>
            <div class="header-menu-mobile" v-if="isShowMobileMenu">
                <div class="header-btn close-button" @click="isShowMobileMenu = false"></div>
                <div class="header-menu-mobile__container">
                    <div class="header-menu-mobile__item" v-for="(item, index) in homeRes[lang]['menubar']" :key="index">
                        <router-link @click="isShowMobileMenu = false" class="semibold" :to="'/' + item.router">{{ item.name }}</router-link>
                    </div>
                </div>
                <button class="h-btn2 semibold">{{ homeRes[lang]['menuButton'].action2.name }}</button>
            </div>
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
            isShowMobileMenu: false
        }
    },
    created(){
        this.lang = sessionStorage.lang;
    },

    methods: {
        showMobileMenu() {
            this.isShowMobileMenu = true;
        },

        courseSelected(node) {
            if (node.id) {
                switch(node.id){
                    case 1: {
                        this.$router.push('course-kid');
                        break;
                    }
                    default:{
                        this.$router.push('adult-course');
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

    @media(max-width: 768px) {
        .desktop-mode{
            display: none !important;
        }

        .mobile-mode{
            display: block !important;
        }
    }
    .header-menu-mobile .h-btn2{
        position: absolute;
        bottom: 10px;
        height: 40px;
        width: 250px;
        left: 50px;
        border: unset;
        outline: unset;
        background-color: #fff;
        border-radius: 12px;
        cursor: pointer;
    }
    .mobile-mode .router-link-active::after{
        content: '';
        display: block;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left: 30px;
        top: 30px;
    }
    .header-menu-mobile__container{
        margin-top: 50px;
    }
    .header-menu-mobile{
        position: fixed;
        width: 350px;
        height: 100vh;
        top: 0;
        right: 0;
        background-color: #00afef;
        animation-name: slide;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    @keyframes slide {
        from{
            right: -300px;
        }
        to{
            right: 0;
        }
    }

    .header-menu-mobile__item{
        padding: 12px;
        height: 50px;
        text-align: right;
        line-height: 50px;
        border-bottom: solid #fff 2px;
        width: 60%;
        position: relative;
        left: 20%;
    }

    .header-menu-mobile__item > a{
        text-decoration: none;
        color: #fff;
    }

    .header-btn{
        height: 50px;
        width: 50px;
        position: absolute;
        right: 10px;
        top: 7px;
        background: url("@/assets/icons/icons8-menu-40.png") no-repeat;
        background-size: 40px 40px;
        background-position: 5px 5px;
        cursor: pointer;
    }

    .close-button{
        right: unset;
        left: 10px;
        background: url("@/assets/icons/icons8-close-40.png") no-repeat !important;
    }

    .mobile-mode{
        display: none;
    }

    .h-btn1{
        margin-left: 24px;
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
        height: 125px;
        width: 200px;
        background: url('@/assets/image/logo_v2.png') no-repeat;
        background-size: contain;
        cursor: pointer;
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

    .ev-header .desktop-mode .h-container > .h-menu-item:hover a, .desktop-mode .router-link-exact-active {
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
        background-color: #2ac6ff;
    }

    .header-action .h-btn1:hover{
        border-color: #2ac6ff;
        color: #2ac6ff;
    }

</style>