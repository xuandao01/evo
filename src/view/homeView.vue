<template>
    <div class="e-home">
        <div class="section1">
            <div class="e-container">
                <div class="s-main">
                    <div class="s-main_leftside">
                        <div class="s-main_title bold">EVO Education</div>
                        <div class="s-main_subtitle semibold">Nền tảng học tập hàng đầu Việt Nam</div>
                        <div class="s-main_content semibold lh-28">Nền tảng học tập EVO Education cải thiện và nâng cao học lực của bạn với nhiều loại hình giảng dạy kết hợp với công nghệ thu thập và xử lý dữ liệu theo từng buổi học.</div>
                        <button class="see-more-btn semibold">Tìm hiểu thêm</button>
                    </div>
                    <div class="s-main_rightside"></div>
                </div>
                <div class="s-impressive semibold">Những con số <span class="s-impressive impressive semibold">Ấn Tượng</span></div>
                <div class="s-impressive-main">
                    <div class="impressive-item">
                        <div class="number bold" id="countExp">0</div>
                        <div class="title semibold">Năm kinh nghiệm</div>
                    </div>
                    <div class="impressive-item">
                        <div class="number bold" id="countStudent">0</div>
                        <div class="title semibold">Học viên được đào tạo bài bản</div>
                    </div>
                    <div class="impressive-item">
                        <div class="number bold" id="countBase">0</div>
                        <div class="title semibold">Cơ sở tại Hà Nội</div>
                    </div>
                    <div class="impressive-item">
                        <div class="number bold" id="countTeacher">0</div>
                        <div class="title semibold">Giáo viên dày dặn kinh nghiệm</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section2">
            <div class="e-container">
                <div class="s-title bold">Học tập cùng <span class="s-title s-title-evo bold">EVO Education</span> </div>
                <div class="s-subtitle">Với các phương thức và khoá học đa dạng, EVO Education đáp ứng nhu cầu học tập của từng học sinh với cam kết kết quả tốt nhất.</div>
                <div class="s-sec2-content">
                    <div class="section2-item" v-for="(item, index) in homeRes[lang].courseSection2" :key="index">
                        <div class="s-item-logo s-icon" :class="item.logo"></div>
                        <div class="s-item-title bold">{{ item.title }}</div>
                        <div class="s-item-content">
                            <div v-for="(content, inx) in item.content" :key="inx">{{ content }}</div>
                        </div>
                        <div class="s-item-action semibold">{{ item.action }}</div>
                    </div>
                </div>

                <div class="s-title bold">Chương trình theo <span class="s-title s-title-evo bold">Bộ Giáo Dục</span> </div>
                <div class="s-subtitle" style="font-size: 18px; max-width: 550px; margin: 0 auto; margin-top: 12px;">EVO Education biên soạn bài giảng bám sát với chương trình của Bộ Giáo Dục, giúp học viên đạt thành tích học tập cao nhất.</div>
                <div class="s-sec2-content2" style=" border-radius: 12px; max-width: 640px; padding: 30px; margin: 0 auto; box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px; margin-top: 40px; height: 200px; background-color: #fff;" >
                    <div class="sec2-item flex" style="align-items: center;">
                        <div class="sec2-item-title semibold color-3">Tiểu học: </div>
                        <div class="sec2-subitem-group flex c-gap-10" style="margin-left: 20px;">
                            <div class="sec2-subitem item-primary-school" v-for="(item, index) in 5" :key="index">{{ 'Lớp ' + (index + 1) }}</div>
                        </div>
                    </div>

                    <div class="sec2-item flex" style="align-items: center; margin-top: 12px;">
                        <div class="sec2-item-title semibold color-3">THCS: </div>
                        <div class="sec2-subitem-group flex c-gap-10" style="margin-left: 44px;">
                            <div class="sec2-subitem item-secondary-school" v-for="(item, index) in 4" :key="index">{{ 'Lớp ' + (index + 6) }}</div>
                        </div>
                    </div>

                    <div class="sec2-item flex" style="align-items: center; margin-top: 12px;">
                        <div class="sec2-item-title semibold color-3">THPT: </div>
                        <div class="sec2-subitem-group flex c-gap-10" style="margin-left: 44px;">
                            <div class="sec2-subitem item-hight-school" v-for="(item, index) in 3" :key="index">{{ 'Lớp ' + (index + 10) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section3">
            <div class="e-container">
                <div class="s3-title section-title bold">Trẻ em học lập trình tại <span class="bold color-b">EVO Education</span></div>
                <el-carousel class="course-carosel" :interval="5000" type="card" height="300px">
                    <el-carousel-item class="course-carousel-item" v-for="(item, index) in homeRes[lang].courseCarousel" :key="index">
                        <div class="cc-header">
                            <div class="cc-logo s-icon" :class="item.logo"></div>
                            <div class="cc-title bold color-3 ">{{ item.title }}</div>
                            <div class="cc-content">
                                <div class="cc-content-item" v-for="(content, inx) in item.content" :key="inx">{{ content }}</div>
                            </div>
                            <div class="cc-item-footer">
                                <div class="bold" style="color: rgba(56, 56, 255, 0.844);">Tìm hiểu thêm 🔎</div>
                                <div class="bold" style="color: rgb(78, 78, 78);">Đăng ký học thử 🚀</div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
                <div class="semibold" style="cursor: pointer; width: 100%; text-align: center; margin-top: 30px; color: rgb(89, 89, 255);">Xem tất cả khóa học</div>
            </div>
            <div class="e-container">
                <div class="s3-title section-title bold">Học lập trình cho người lớn tại <span class="bold color-b">EVO Education</span></div>
                <div class="flex" style="margin-top: 50px; justify-content: space-evenly;">
                    <div class="s3-p2-item">
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
                        <button class="see-more-btn__s3 semibold">Đăng ký học</button>
                    </div>
                    <div class="s3-p2-item">
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
                        <button class="see-more-btn__s3 semibold">Đăng ký học</button>
                    </div>
                    <div class="s3-p2-item">
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
                        <button class="see-more-btn__s3 semibold">Đăng ký học</button>

                    </div>
                    <div class="s3-p2-item">
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
                        <button class="see-more-btn__s3 semibold">Đăng ký học</button>

                    </div>
                </div>
            </div>
        </div>

        <div class="section4">
            <div class="e-container" style="display: flex; align-items: center; column-gap: 30px;">
                <div>
                    <div class="s4-title bold color-3" style="font-size: 40px; padding-top: 50px;">Học thử <span class="bold color-b">trải nghiệm thật</span></div>
                    <div style="margin-top: 30px;">
                        <div class="semibold color-5 lh-44" style="font-size: 17px; " v-for="(item, index) in homeRes[lang].section4Content" :key="index"> {{ item }}</div>
                    </div>
                    <div class="bold" style="cursor: pointer; padding: 10px 20px; border-radius: 8px; margin-top: 20px; color: #fff; max-width: 150px; text-align: center; background-color: #0297ce;">Đăng ký học thử</div>
                </div>
                <div class="s4-right-side"></div>
            </div>
        </div>

        <div class="section5">
            <div class="e-container flex c-gap-10">
                <div class="s5-left-side"></div>
                <div class="s5-right-side">
                    <div class="bold color-1" style="font-size: 32px; position: relative; left: 100px;">Học trải nghiệm <span class="bold color-b"> miễn phí </span></div>
                    <div class="leave-inf-area" style="display: flex; flex-direction: column;">
                        <div><input @blur="inpOnBlur('name')" placeholder="Họ tên"></div>
                        <div><input @blur="inpOnBlur('phoneNumber')" placeholder="Số điện thoại"></div>
                        <div><input @blur="inpOnBlur('address')" placeholder="Địa chỉ (optional)"></div>
                        <div><input @blur="inpOnBlur('subject')" placeholder="Môn học quan tâm (optional)"></div>
                        <button class="semibold">Đăng ký ngay</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import homeRes from '@/resources/home.js'
export default {
    name: 'homeView',
    data(){
        return{
            homeRes: homeRes,
            lang: 'vi',
            isErrName: false,
            isErrPN: false,
        }
    },
    created(){
        if (sessionStorage.lang) this.lang = sessionStorage.lang;
    },
    mounted(){
        this.setCounting('countStudent', 900, true);
        this.setCounting('countExp', 3, false);
        this.setCounting('countBase', 12, false);
        this.setCounting('countTeacher', 25, true);
    },

    methods: {
        setCounting(id, countTo, havePlus){
            let counts = setInterval(updated, 3000/countTo);
            let upto = 0;
            function updated() {
                let count = document.getElementById(id);
                if (!havePlus) {
                    count.innerHTML = ++upto;
                } else {
                    count.innerHTML = ++upto + '+';
                }
                if (upto === countTo) {
                    clearInterval(counts);
                }
            }
        },

        inpOnBlur(field) {
            let name = '';
            let isPrintText = true;
            if (!event.target.value) {
                switch(field) {
                    case 'name': {
                        name = 'Họ và tên';
                        if (this.isErrName) isPrintText = false;
                        break;
                    }
                    case 'phoneNumber': {
                        if (this.isErrPN) isPrintText = false;
                        name = 'Số điện thoại';
                        break;
                    }
                }
                if (name && isPrintText) {
                    let errText = document.createElement('div');
                    errText.classList.add('err-text');
                    errText.textContent = `${name} không được bỏ trống.`;
                    event.target.parentElement.append(errText);
                    event.target.classList.add('err-field');
                }
                switch(field) {
                    case 'name': {
                        this.isErrName = true;
                        break;
                    }
                    case 'phoneNumber': {
                        this.isErrPN = true;

                        break;
                    }
                }
            } else {
                switch(field) {
                    case 'name': {
                        this.isErrName = false;
                        break;
                    }
                    case 'phoneNumber': {
                        this.isErrPN = false;
                        break;
                    }
                }
                event.target.parentElement.querySelector('.err-text').remove();
                event.target.classList.remove('err-field');
            }
        }
    },
}
</script>
<style>

    .leave-inf-area > button{
        height: 44px;
        position: relative;
        left: 120px;
        top: 20px;
        border: unset;
        outline: unset;
        border-radius: 12px;
        background-color: #00afef;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
    }

    .leave-inf-area > div > input{
        height: 44px;
        border-radius: 12px;
        border: solid #666666 1px;
        width: 150%;
        position: relative;
        left: 0px;
        margin-top: 20px;
        padding: 0 12px;
        outline: unset;
    }

    .leave-inf-area > div > input:focus {
        border-color: #0089bb;
    }

    .section5{
        height: 500px;
        background-color: #00afef10;
        padding-top: 100px;
        position: relative;
        top: 60px;
    }

    .section5 .s5-left-side{
        height: 370px;
        width: calc(50% - 5px);
        background: url('@/assets/image/s5-img.jpg');
        background-size: cover;
        border-radius: 20px;
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    }

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

    .s4-right-side{
        height: 380px;
        width: 550px;
        border-radius: 10px;
        background: url('@/assets/image/teaching.jpg');
        background-size: cover;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin-top: 50px;
    }

    .section4{
        height: 500px;
        background-color: #bb7d0006;
        position: relative;
        top: 60px;
    }

    .cc-item-footer{
        position: absolute;
        bottom: 30px;
        display: flex;
        column-gap: 50px;
    }

    .cc-content-item{
        text-align: justify;
        line-height: 22px;
    }

    .cc-content{
        position: absolute;
        top: 60px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .cc-header{
        height: 40px;
        padding: 20px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 30px;
    }

    .cc-header::after{
        height: 2px;
        width: 50%;
        content: '';
        display: block;
        background-color: #fff;
        position: absolute;
        border-radius: 4px;
        top: 70px;
    }

    .cc-logo{
        height: 40px;
        width: 40px;
    }

    .course-carousel-item{
        border-radius: 4px;
    }

    .course-carosel{
        margin-top: 100px;
    }

    .el-carousel__item:nth-child(3n) {
        background-color: #ffdb94;
    }

    .el-carousel__item:nth-child(3n + 1) {
        background-color: #c3efff;
    }

    .el-carousel__item:nth-child(3n + 2) {
        background-color: #ffc3c3;
    }

    .section-title{
        font-size: 38px;
        color: #373737;
        margin-top: 100px;
        text-align: center;
    }

    .section3{
        background-color: #00afef10;
        height: 1400px;
        position: relative;
        top: 60px;
        padding-top: 20px;
    }

    .section2{
        height: 1520px;
        background-color: #bb7d0006;
        position: relative;
        top: 60px;
        padding-top: 10px;
    }

    .section2 .item-hight-school{
        background-color: rgba(179, 0, 255, 0.123);
        padding: 15px 25px !important;
    }

    .section2 .item-hight-school:hover{
        background-color: rgba(179, 0, 255, 0.323);
        cursor: pointer;
    }

    .section2 .item-secondary-school{
        background-color: rgba(255, 213, 0, 0.123);
    }

    .section2 .item-secondary-school:hover{
        background-color: rgba(255, 213, 0, 0.323);
        cursor: pointer;
    }

    .section2 .item-primary-school{
        background-color: rgba(0, 174, 255, 0.123);
    }

    .section2 .item-primary-school:hover{
        background-color: rgba(0, 174, 255, 0.323);
        cursor: pointer;
    }

    .section2 .sec2-subitem{
        padding: 15px 30px;
        border-radius: 6px;
    }

    .section2 .s-item-action{
        color: #00afef;
        position: absolute;
        bottom: 40px;
        right: 40px;
        user-select: none;
    }

    .section2 .s-item-action:hover{
        color: #008abc;
        cursor: pointer;
    }

    .section2 .s-item-content{
        margin-top: 26px;
        color: #111111;

    }

    .section2 .s-item-title{
        margin-top: 22px;
        font-size: 16px; 
        color: #373737;
    }

    .section2-item{
        height: 260px;
        width: 260px;
        padding: 20px;
        background-color: #fff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 10px;
        position: relative;
    }

    .section2 .s-item-logo{
        height: 48px;
        width: 48px;
        border-radius: 8px;
    }

    .s-sec2-content{
        display: grid;
        grid-template-columns: auto auto auto;
        height: 670px;
        width: 1020px;
        margin: 0 auto;
        position: relative;
        left: 20px;
        margin-top: 50px;
    }

    .s-title{
        font-size: 38px;
        color: #373737;
        margin-top: 100px;
        text-align: center;
    }

    .s-subtitle{
        color: #575757;
        text-align: center;
        margin-top: 12px;
    }

    .s-title-evo{
        color: #00afef;
    }

    .section1{
        top: 60px;
        position: relative;
        padding-top: 50px;
        height: 550px;
        background-color: #00afef10;
        background-image: url('@/assets/image/section1_bg_2.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    @media(min-width: 1250px){
        .e-container{
            width: 1200px;
            margin: 0 auto;
        }
    }

    .s-main{
        display: flex;
        column-gap: 50px;
        min-height: 300px;
    }

    .s-main_leftside{
        max-width: 575px;
    }

    .s-main_title{
        color: #00afef;
        font-size: 44px;
    }

    .s-main_subtitle{
        color: #565656;
        font-size: 28px;
        margin-top: 12px;
    }

    .s-main_content{
        color: #838383b5;
        font-size: 18px;
        margin-top: 18px;
        text-align: justify;
    }

    .s-main_rightside{
        width: 100%;
        max-width: 575px;
        max-height: 300px;
        background-color: #00afef30;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .s-main_rightside{
        background: url('@/assets/image/banner.jpg') no-repeat;
        background-size: cover !important;
    }

    .see-more-btn{
        height: 40px;
        width: 200px;
        border-radius: 8px;
        border: unset;
        background-color: #00afef;
        color: #fff;
        font-size: 18px;
        margin-top: 40px;
        cursor: pointer;
    }

    .see-more-btn:hover{
        background-color: #0089bb;

    }

    .s-impressive{
        margin-top: 60px;
        color: #565656;
        font-size: 32px;
    }

    .impressive{
        color: #00afef;
    }

    .s-impressive-main{
        margin-top: 10px;
        min-height: 100px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .impressive-item{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .impressive-item .number{
        color: #373737;
        font-size: 44px;
    }

    .impressive-item .title{
        color: #545454;
        font-size: 18px;
    }
</style>