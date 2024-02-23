<template>
    <div class="e-course">
        <div class="e-container">
            <div data-aos="zoom-in" class="e-banner-1"></div>
            <div class="e-course-main">
                <div data-aos="fade-right" class="e-main-title bold f-36">Chương trình học
                    <div class="line-bar"></div>
                </div>
                <div class="flex s3-p2-container" style="margin-top: 50px; justify-content: space-evenly;">
                    <div data-aos="fade-up"
                         data-aos-duration="2000" class="s3-p2-item">
                        <div class="s3-p2-item__header">
                            <div class="s3-p2-item__title bold color-f">Front-End</div>
                            <div class="s3-p2-item__subtitle color-f">Xây dựng giao diện web</div>
                            <div class="s3-p2-item__icon--group">
                                <div class="front-end-item s-icon" :class="item" v-for="(item, index) in homeRes[lang].dev18.frontend" :key="index"></div>
                            </div>
                        </div>
                        <div class="s3-p2-item__content">
                            <div class="semibold">🟢 Level 1: <span>Cơ bản về HTML và CSS.</span></div>
                            <div class="semibold">🟡 Level 2: <span>HTML và CSS nâng cao, JS cơ bản.</span></div>
                            <div class="semibold">🟠 Level 3: <span>JS nâng cao, xây dựng website hoàn chỉnh.</span></div>
                            <div class="semibold">🔴 Level 4: <span>JS framework: Vue, React, Angular</span></div>
                        </div>
                        <button @click="scrollToForm" class="see-more-btn__s3 semibold">Đăng ký học</button>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="2300" class="s3-p2-item">
                        <div class="s3-p2-item__header">
                            <div class="s3-p2-item__title bold color-f">RestfulAPI</div>
                            <div class="s3-p2-item__subtitle color-f">Xây dựng API</div>
                            <div class="s3-p2-item__icon--group">
                                <div class="front-end-item s-icon" :class="item" v-for="(item, index) in homeRes[lang].dev18.restfulapi" :key="index"></div>
                            </div>
                        </div>
                        <div class="s3-p2-item__content">
                            <div class="semibold">🟢 Level 1: <span>Cơ bản về API, viết API dữ liệu tĩnh.</span></div>
                            <div class="semibold">🟡 Level 2: <span>Xây dựng API tương tác với Database.</span></div>
                            <div class="semibold">🟠 Level 3: <span>Nguyên lý Rest và kiến trúc Restful</span></div>
                            <div class="semibold">🔴 Level 4: <span>Test và tìm kiếm lỗi API</span></div>
                        </div>
                        <button @click="scrollToForm" class="see-more-btn__s3 semibold">Đăng ký học</button>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="2600" class="s3-p2-item">
                        <div class="s3-p2-item__header">
                            <div class="s3-p2-item__title bold color-f">Back-End</div>
                            <div class="s3-p2-item__subtitle color-f">Xử lý dữ liệu logic</div>
                            <div class="s3-p2-item__icon--group">
                                <div class="front-end-item s-icon" :class="item" v-for="(item, index) in homeRes[lang].dev18.backend" :key="index"></div>
                            </div>
                        </div>
                        <div class="s3-p2-item__content">
                            <div class="semibold">🟢 Level 1: <span>Lập trình hướng đối tượng.</span></div>
                            <div class="semibold">🟡 Level 2: <span>Tiếp cận những ngôn ngữ backend phổ biến</span></div>
                            <div class="semibold">🟠 Level 3: <span>Sử dụng những kiến trúc dữ liệu phổ biến</span></div>
                            <div class="semibold">🔴 Level 4: <span>Viết unit test và triển khai hệ thống</span></div>
                        </div>
                        <button @click="scrollToForm" class="see-more-btn__s3 semibold">Đăng ký học</button>

                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="3000" class="s3-p2-item">
                        <div class="s3-p2-item__header">
                            <div class="s3-p2-item__title bold color-f">Database</div>
                            <div class="s3-p2-item__subtitle color-f">Lưu trữ và xử lý dữ liệu</div>
                            <div class="s3-p2-item__icon--group">
                                <div class="front-end-item s-icon" :class="item" v-for="(item, index) in homeRes[lang].dev18.database" :key="index"></div>
                            </div>
                        </div>
                        <div class="s3-p2-item__content">
                            <div class="semibold">🟢 Level 1: <span>Các câu lệnh truy vấn cơ bản.</span></div>
                            <div class="semibold">🟡 Level 2: <span>Thiết kế kiến trúc cơ sở dữ liệu.</span></div>
                            <div class="semibold">🟠 Level 3: <span>Sử dụng function và procedure</span></div>
                            <div class="semibold">🔴 Level 4: <span>Sử dụng view và trigger</span></div>
                        </div>
                        <button @click="scrollToForm" class="see-more-btn__s3 semibold">Đăng ký học</button>

                    </div>
                </div>
                <div data-aos="fade-right"  class="e-main-title-2 bold f-36">Tại sao nên lựa chọn EVO Education
                    <div class="line-bar"></div>
                </div>
                <div data-aos="fade-right"  class="reason-area">
                    <div class="step-bar">
                        <div class="e-step e-first" @mouseover="mouseOverStep(0)" :class="{'e-step-selected': currentStep == 0}">
                            <div class="e-image e-image-1"></div>
                            <div class="e-content semibold">Trường học công nghệ hàng đầu Việt Nam</div>
                        </div>
                        <div class="e-step e-second" @mouseover="mouseOverStep(1)" :class="{'e-step-selected': currentStep == 1}">
                            <div class="e-image e-image-2"></div>
                            <div class="e-content semibold">Phát triển mindset, kỹ năng lập trình</div>
                        </div>
                        <div class="e-step e-third" @mouseover="mouseOverStep(2)" :class="{'e-step-selected': currentStep == 2}">
                            <div class="e-image e-image-3"></div>
                            <div class="e-content semibold">Định hướng nghề nghiệp, thực tập sớm</div>
                        </div>
                    </div>
                    <div class="carosel-area">
                        <el-carousel ref="carouselStep" class="e-carousel" arrow="never" :autoplay="false">
                            <el-carousel-item class="e-carousel-item e-carousel-item-1"></el-carousel-item>
                            <el-carousel-item class="e-carousel-item e-carousel-item-2"></el-carousel-item>
                            <el-carousel-item class="e-carousel-item e-carousel-item-3"></el-carousel-item>
                        </el-carousel>
                    </div>
                </div>

                <div  data-aos="fade-right"  class="e-main-title-3 bold f-36">Các lộ trình khác
                    <div class="line-bar"></div>
                </div>
                <div class="other-course-view">
                    <div data-aos="fade-right"  class="other-course-item">
                        <div class="title semibold">
                            Lộ trình học lập trình cho trẻ 6 - 17 tuổi
                        </div>
                    </div>
                    <div data-aos="fade-left"  class="other-course-item">
                        <div class="title semibold">
                            Lộ trình học lập trình cho người đi làm
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ELoader v-if="showLoader"></ELoader>
    </div>
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css'
import homeRes from '@/resources/home.js'

export default {
    name: 'CourseView',
    data() {
        return {
            showLoader: false,
            currentStep: 0,
            homeRes: homeRes,
            lang: 'vi',
        }
    },

    watch:{
        currentStep: function(newVal) {
            this.$refs.carouselStep.setActiveItem(newVal);
        }
    },

    created(){
        document.title = 'Các khóa học tại EVO';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    mounted(){
        window.setInterval(this.autoIncreaseStep, 5000);
        AOS.init({
            duration: 1000,
        })
    },

    methods: {
        mouseOverStep(stepId) {
            this.currentStep = stepId;
        },

        autoIncreaseStep(){
            if (this.currentStep+1 < 3) this.currentStep++;
            else this.currentStep = 0;
        }
    },
}
</script>
<style scoped> 
.see-more-btn__s3{
        padding: 8px 20px;
        border: unset;
        outline: unset;
        margin: 0 auto;
        border-radius: 8px;
        color: #fff;
        position: relative;
        left: 60px;
        top: 40px;
        cursor: pointer;
    }
.s3-p2-item > button:hover {
        cursor: pointer;
    }

    .s3-p2-item__icon--group{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10px;
        margin-top: 20px;
    }

    .s3-p2-item__content{
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        width: 100%;
        margin-top: 10px;
        row-gap: 10px;
    }

    .front-end-item{
        height: 28px;
        width: 28px;
        border-radius: 4px;
        background-color: #fff;
    }

    .s3-p2-item__subtitle{
        text-align: center;
        margin-top: 12px;
    }

    .s3-p2-item__title::after{
        content: '';
        display: block;
        height: 2px;
        background-color: #fff;
        width: 50%;
        margin: 0 auto;
        position: relative;
        top: 5px;
    }

    .s3-p2-item__title{
        text-align: center;
        font-size: 32px;
    }

    .s3-p2-item__header {
        height: 150px;
        width: 100%;
        border-radius: 20px;
        background-color: blue;
        padding: 10px 20px;
    }

    .s3-p2-item:nth-child(1) .s3-p2-item__header, .s3-p2-item:nth-child(1) .see-more-btn__s3 {
        margin-top: 0px;
        background-image: linear-gradient(#e65c00, #f9aa23);
    }

    .s3-p2-item:nth-child(2) .see-more-btn__s3{
        background-image: linear-gradient(#2193b0, #6dd5ed);
    }
    
    .s3-p2-item:nth-child(3) .see-more-btn__s3{
        background-image: linear-gradient(#ec008c, #fc6767);
    }

    .s3-p2-item:nth-child(4) .see-more-btn__s3{
        background-image: linear-gradient(#799F0C, #FFE000);
    }

    .s3-p2-item:nth-child(2) .s3-p2-item__header {
        margin-top: 30px;
        background-image: linear-gradient(#2193b0, #6dd5ed);
    }

    .s3-p2-item:nth-child(3) .s3-p2-item__header {
        margin-top: 60px;
        background-image: linear-gradient(#ec008c, #fc6767);
    }

    .s3-p2-item:nth-child(4) .s3-p2-item__header {
        margin-top: 90px;
        background-image: linear-gradient(#799F0C, #FFE000);
    }

    .s3-p2-item{
        height: 500px;
        width: 230px;
    }
        /* responsive */
        @media (max-width: 768px) {
        .e-banner-1 {
            height: 400px !important;
            background-repeat: no-repeat !important;
            background-size: contain !important;
        }
        .course-display {
            flex-direction: column;
            row-gap: 12px;
            align-items: center;
        }
        .step-bar .e-step .e-image {
            display: none;
        }
        .e-main-title-2 {
            display: none;
        }

        .reason-area {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .e-main-title, .e-main-title-3 {
            font-size: 30px !important;
        }

        .e-banner-1 {
            height: 180px !important;
        }

        .other-course-view{
            flex-direction: column;
            row-gap: 20px;
            height: 600px !important;
        }

        .other-course-item {
            height: 300px !important;
            width: 300px !important;
        }
    }

    .other-course-item .title{
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-size: 17px;
    }

    .other-course-item:nth-child(1) .title{
        color: #fff;
    }
    .other-course-item:nth-child(2) .title{
        color: #111;
    }

    .other-course-item:nth-child(1){
        background-image: url("@/assets/image/programming-kid.jpg");
        background-size: cover;
        background-position: -10px 5px;
    }

    .other-course-item:nth-child(2){
        background-image: url("@/assets/image/programming-18.jpg");
        background-size: cover;
    }

    .other-course-item:hover{
        transition-duration: 0.5s;
        transform: scale(1.01);
        cursor: pointer;
    }

    .other-course-item{
        position: relative;
        height: 350px;
        width: 350px;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .other-course-view{
        display: flex;
        column-gap: 50px;
        height: 400px;
        width: 100%;
        position: relative;
        top: 300px;
    }

    .e-carousel-item-1{
        background: url("@/assets/image/step-1.png");
        background-size: cover;
        background-position-y: -80px;
    }

    .e-carousel-item-2{
        background: url("@/assets/image/step-2.jpg");
        background-size: cover;
        background-position-y: -30px;
    }

    .e-carousel-item-3{
        background: url("@/assets/image/step-3.jpg");
        background-size: cover;
    }

    .e-carousel-item{
        width: 1200px;
    }

    ::v-deep .e-carousel .el-carousel__indicators{
        display: none !important;
    }

    .e-carousel, .e-carousel-item{
        height: 550px;
    }

    .e-step-selected .e-content{
        color: #00a4df;
    }

    .e-step-selected .e-image-1 {
        background: url("@/assets/icons/icons8-school-100-blue.png") !important;
        background-size: contain !important;
    }

    .e-step-selected .e-image-2 {
        background: url("@/assets/icons/icons8-skill-100-blue.png") !important;
        background-size: contain !important;
    }

    .e-step-selected .e-image-3 {
        background: url("@/assets/icons/icons8-reward-100-blue.png") !important;
        background-size: contain !important;
    }

    .step-bar .e-step .e-content{
        font-size: 22px;
        max-width: 250px;
        padding-left: 20px;
        padding-right: 10px;
    }

    .step-bar .e-step .e-image-1 {
        background: url("@/assets/icons/icons8-school-100.png");
        background-size: contain;
    }

    .step-bar .e-step .e-image-2 {
        background: url("@/assets/icons/icons8-skill-100.png");
        background-size: contain;
    }

    .step-bar .e-step .e-image-3 {
        background: url("@/assets/icons/icons8-reward-100.png");
        background-size: contain;
    }

    .step-bar .e-step .e-image{
        height: 70px;
        width: 70px;
        margin-left: 25px;
    }

    @keyframes selectStep {
        from{
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
        to{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }

    .step-bar .e-step-selected{
        animation-name: selectStep;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    .step-bar .e-step{
        height: 120px;
        width: 32%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background-color: #fff;
    }

    .reason-area .step-bar{
        height: 170px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .reason-area .carosel-area{
        height: calc(100% - 150px);
    }

    .reason-area{
        height: 700px;
        width: 100%;
        position: relative;
        top: 150px;
    }

    .course-kid-1 .main-image{
        background: url("@/assets/image/scratch-basic.webp");
        background-size: cover;
        background-position-y: -32px;
    }

    .course-kid-2 .main-image{
        background: url("@/assets/image/robotic-course.jpg");
        background-size: cover;
        background-position-y: -15px;
    }

    .course-kid-3 .main-image{
        background: url("@/assets/image/game-basic.jpg");
        background-size: cover;
        background-position-y: -15px;
    }

    @keyframes arrowNext {
        from{
            left: 10px;
        }
        to{
            left: 30px;
        }
    }

    @keyframes arrowBack {
        from{
            left: 30px;
        }
        to{
            left: 10px;
        }
    }

    .course-kid-container:hover .e-next{
        animation-name: arrowNext;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    .e-next{
        font-size: 32px;
        position: relative;
        top: 3px;
        left: 10px;
        color: red;
        animation-name: arrowBack;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    .course-display{
        display: flex;
        justify-content: space-between;
    }

    .course-kid-container .course-action{
        border-top: 2px solid rgba(149, 157, 165, 0.5);
        width: calc(100% - 40px);
        margin: 0 auto;
        line-height: 85px;
    }

    .course-kid-container .course-name{
        height: 15%;
        padding: 20px 20px;
        line-height: 26px;
        font-size: 26px;
    }

    .course-kid-container .main-image{
        height: 50%;
        width: 100%;
        border-radius: 20px 20px 0 0;
        background-color: blue;
    }

    @keyframes transformHover {
        from{
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
        to {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }

    .course-kid-container:hover{
        animation-name: transformHover;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        cursor: pointer;
    }

    .course-kid-container{
        border-radius: 20px;
        height: 380px;
        width: 380px;
        position: relative;
        top: 50px;
        border: solid 1px rgba(149, 157, 165, 0.2);
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        background-color: #fff;
    }

    .e-main-title-3{
        position: relative;
        max-width: 302px;
        top: 250px;
    }

    .e-main-title-2{
        position: relative;
        max-width: 650px;
        top: 150px;
    }

    .e-main-title{
        position: relative;
        max-width: 318px;;
    }

    .line-bar::after{
        content: '';
        height: 3px;
        width: 100%;
        display: block;
        position: absolute;
        bottom: -10px;
        background-color: #00a4df;
    }

    .e-course-main{
        margin-top: 70px;
    }

    .e-course{
        position: relative;
        top: 66px;
        height: 2900px;
        background-color: #00afef10;
    }
   .e-banner-1{
    height: 630px;
    width: 100%;
    background-image: url('@/assets/image/BannerNormalKid.png');
    background-size: cover;
    border-radius: 20px;
    background-position: 0 -20px;
    position: relative;
    top: 20px;
   }
</style>