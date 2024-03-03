<template>
    <div class="home-view-v3">
        <div class="header-distinct"></div>
        <section class="section sec-1">
            <div class="e-container">
                <div class="sec-1-main">
                    <div class="sec-1-leftside">
                        <p>Cung cấp các khóa học</p>
                        <p class="bold">PHÁT TRIỂN <span class="bold yellow-text">TƯ DUY</span> VÀ <span class="bold yellow-text">KỸ NĂNG</span></p>
                        <p>cho trẻ em từ <span class="bold">6 - Trên 18 Tuổi</span></p>
                        <p class="sec-1-button">
                            <button class="semibold learn-course">TÌM HIỂU KHÓA HỌC</button>
                            <button class="semibold submit-trial">ĐĂNG KÝ TRẢI NGHIỆM</button>
                        </p>
                    </div>
                    <div class="sec-1-rightside"></div>
                </div>
            </div>
        </section>

        <section class="section sec-2">
            <div class="e-container">
                <div class="section-title bold">CÁC KHÓA HỌC</div>
                <div class="sec-2-main">
                    <div class="sec-2-item" @click="redirectToCourse('kids')">
                        <div class="sec-2-item-image"></div>
                        <div class="sec-2-item-title bold">EVO KID</div>
                            <div class="sec-2-item-age__icon"></div>
                        <div class="sec-2-item-age semibold">🎂 6 - 15 Tuổi</div>
                        <div class="sec-2-item-des">Lộ trình được thiết kế cho 
                                                    những bạn nhỏ từ lớp 1
                                                    đến lớp 9 làm quen với 
                                                    máy tính và công nghệ
                                                </div>
                        <div class="sec-2-item-button bold">Tìm hiểu thêm</div>
                    </div>

                    <div class="sec-2-item sec-2-item-2" @click="redirectToCourse('teens')">
                        <div class="sec-2-item-image sec-2-item-image-2"></div>
                        <div class="sec-2-item-title sec-2-item-title-2 bold">EVO TEEN</div>
                            <div class="sec-2-item-age__icon"></div>
                        <div class="sec-2-item-age semibold">🎂 16 - 18 Tuổi</div>
                        <div class="sec-2-item-des">Lộ trình được thiết kế cho 
                                                    những bạn học sinh cấp 3 tiếp cận với một số ngôn ngữ lập trình thông dụng như java, c++, python, javascript,...
                                                </div>
                        <div class="sec-2-item-button sec-2-item-button-2 bold">Tìm hiểu thêm</div>
                    </div>

                    <div class="sec-2-item sec-2-item-3" @click="redirectToCourse('adult')">
                        <div class="sec-2-item-image sec-2-item-image-3"></div>
                        <div class="sec-2-item-title sec-2-item-title-3 bold">EVO ADULT</div>
                            <div class="sec-2-item-age__icon"></div>
                        <div class="sec-2-item-age semibold">🎂 Trên 18 Tuổi</div>
                        <div class="sec-2-item-des">Lộ trình được thiết kế học để đi làm định hướng nghề nghiệp theo backend hoặc frontend hay app developer,...
                                                </div>
                        <div class="sec-2-item-button sec-2-item-button-3 bold">Tìm hiểu thêm</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section sec-3">
            <div class="e-container">
                <div class="section-title bold">ĐỘI NGŨ GIẢNG VIÊN VÀ CHUYÊN GIA</div>
                <div class="sec-6-content">
                        <el-carousel :interval="25000" arrow="always">
                            <el-carousel-item class="teacher-item-container" v-for="(item, index) in teacherData" :key="index">
                                <div class="teacher-item" v-for="(teacher, inx) in item" :key="inx">
                                    <div class="teacher-image" :class="teacher.imageClass">
                                        <div class="teacher-image-inner">

                                        </div>
                                    </div>
                                    <div class="teacher-info">
                                        <div class="teacher-name bold">{{ teacher.teacherNane }}</div>
                                        <div class="teacher-short-des semibold">{{ teacher.teacherShortDescription }}</div>
                                        <div class="short-line"></div>
                                        <div class="teacher-long-des">{{ teacher.teacherLongDescription }}</div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
            </div>
        </section>

        <section class="section sec-4">
            <div class="e-container">
                <div class="section-title bold">ĐĂNG KÝ TRẢI NGHIỆM MIỄN PHÍ</div>
                <div class="sec-4-main">
                    <div class="sec-4-rocket"></div>
                    <div class="sec-4-content">
                        <div class="sec-4-top">
                            <div class="inp-top">
                                <input placeholder="Họ và tên phụ huynh">
                                <input placeholder="Họ và tên học viên">
                                <input placeholder="Số điện thoại">
                            </div>
                            <div class="inp-bottom">
                                <input placeholder="Độ tuổi của con">
                                <input placeholder="Môn học bạn quan tâm">
                            </div>
                        </div>
                        <div class="sec-4-bottom">
                            <button class="bold">ĐĂNG KÝ TRẢI NGHIỆM</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: "HomeViewV3",
    methods: {
        redirectToCourse(course){
            switch(course) {
                case 'teens':
                case 'kids': {
                    this.$router.push('code-kid');
                    break;
                }
                case 'adult': {
                    this.$router.push('code-adult');
                    break;
                }
            }
        },
    },
    data() {
        return {
            teacherData: [
                [
                    {
                        imageClass: 'teacher-image-1',
                        teacherNane: 'Trịnh Xuân Đào',
                        teacherShortDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                        teacherLongDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                    },
                    {
                        imageClass: 'teacher-image-1',
                        teacherNane: 'Trịnh Xuân Đào',
                        teacherShortDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                        teacherLongDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                    },
                    {
                        imageClass: 'teacher-image-1',
                        teacherNane: 'Trịnh Xuân Đào',
                        teacherShortDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                        teacherLongDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                    }
                ],
                [
                {
                        imageClass: 'teacher-image-1',
                        teacherNane: 'Trịnh Xuân Đào',
                        teacherShortDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                        teacherLongDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                    },
                    {
                        imageClass: 'teacher-image-1',
                        teacherNane: 'Trịnh Xuân Đào',
                        teacherShortDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                        teacherLongDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                    },
                    {
                        imageClass: 'teacher-image-1',
                        teacherNane: 'Trịnh Xuân Đào',
                        teacherShortDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                        teacherLongDescription: 'Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN Cử nhân kỹ thuật phần mềm ĐH Công Nghiệp HN',
                    }
                ]
            ]
        }
    }
}
</script>
<style scoped>

    .sec-4-bottom button{
        padding: 15px 40px;
        border-radius: 10px;
        border: unset;
        outline: unset;
        background-color: #ff9103;
        color: #fff;
        cursor: pointer;
    }

    .sec-4-bottom{
        height: 50px;
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    .sec-4-top input{
        padding: 15px 30px;
        width: 210px;
        border-radius: 10px;
        border: unset;
        outline: unset;
    }

    .inp-bottom{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .inp-bottom input:nth-child(2){
        flex: 0.97;
    }

    .inp-top{
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }
    .sec-4-top{
        height: 200px;
        width: 70%;
        margin: 0 auto;
    }
    .sec-4-rocket{
        height: 315px;
        width: 150px;
        background-image: url('@/assets/image/rocket-submit.png');
        position: absolute;
        top: -150px;
        left: -25px;
    }
    .sec-4-main{
        width: 100%;
        height: 500px;
        border: solid 5px #fff;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 20px;
        margin-top: 30px;
        background-image: url('@/assets/image/bg-form-2.png');
        background-size: cover;
        background-position: 50% 50%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .sec-4-content{
        display: flex;
        flex-direction: column;
    }
    .sec-4{
        margin-top: 50px;
    }
    .teacher-short-des{
        margin-top: 10px;
        text-align: center;
    }
    .teacher-long-des{
        margin-top: 10px;
        text-align: center;
    }
    .teacher-name{
        text-align: center;
        margin-top: 100px;
        font-size: 24px;
        color:#0d2786
    }
    ::v-deep .el-carousel__container {
        height: 500px;
    }

    .teacher-item .teacher-image-inner{
        height: 190px;
        width: 190px;   
        border-radius: 50%;
        background-image: url('@/assets/image/avatar-default.jpg');
        background-size: cover;
        position: relative;
        top: 10px;
    }

    .teacher-item .teacher-image{
        height: 200px;
        width: 200px;
        border-radius: 50%;
        position: absolute;
        left: 50px;
        background-image: linear-gradient(#ffc911, #ff6f42);
        z-index: 3;
    }

    .short-line{
        background-image: linear-gradient(45deg,#ffc911, #ff6f42);
        height: 3px;
        width: 100%;
        margin-top: 5px;
    }
    .sec-6-content{
        margin-top: 90px;
    }
    .teacher-item-container{
        display: flex;
        justify-content: space-evenly;
    }
    .teacher-info{
        position: relative;
        top: 100px;
        height: 300px;
        width: 250px;
        border-radius: 20px;
        background-color: #fff;
        padding: 25px;
    }
    .teacher-item {
        height: 550px;
        width: 300px;
        position: relative;
    }
    ::v-deep .el-carousel__item{
        background-image: unset !important;
        box-shadow: unset !important;
    }
    .sec-3{
        margin-top: 100px;
    }

    .sec-2-item-title-2{
        color: #ff9103 !important;
    }

    .sec-2-item-button-2{
        background-color: #ff9103 !important;
    }

    .sec-2-item-2:hover{
        box-shadow: 0px 5px 20px #ff9103be !important;
    }

    .sec-2-item-title-3{
        color: #ff6f42 !important;
    }

    .sec-2-item-button-3{
        background-color: #ff6f42 !important;
    }

    .sec-2-item-3:hover{
        box-shadow: 0px 5px 20px #ff6f42be !important;
    }

    .sec-2-item .sec-2-item-button:hover{
        transition-duration: 0.5s;
        transform: scale(1.05);
    }

    .sec-2-item .sec-2-item-button {
        position: absolute;
        bottom: 30px;
        padding: 10px 30px;
        border-radius: 20px;
        color: #fff;
        background-color: #fbc22d;
        margin: 0 auto;
        right: 90px;
        cursor: pointer;
    }

    .sec-2-item .sec-2-item-des {
        text-align: center;
        margin-top: 20px;
    }

    .sec-2-item .sec-2-item-age {
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
    }

    .sec-2-item .sec-2-item-title{
        font-family: Bubble-gum !important;
        font-size: 28px;
        text-align: center;
        margin-top: 20px;
        color: #fbc22d;
    }

    .sec-2-item .sec-2-item-image{
        height: 237px;
        width: 300px;
        background-image: url('@/assets/icons/evo-kid.png');
        background-size: cover;
    }

    .sec-2-item .sec-2-item-image-2{
        background-image: url('@/assets/icons/evo-teen.png');
    }

    .sec-2-item .sec-2-item-image-3{
        background-image: url('@/assets/icons/evo-adult.png');
    }

    .sec-2-item:hover{
        box-shadow: 0px 5px 20px #fbc12dbe;
        transform: translateY(-10px);
    }

    .sec-2-item{
        height: 500px;
        width: 300px;
        box-shadow: 0px 5px 20px #8c8c8c9e;
        border-radius: 20px;
        padding: 25px;
        position: relative;
        cursor: pointer;
        transition-duration: 0.5s;
    }
    .sec-2-main{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
    .section-title{
        width: 100%;
        text-align: center;
        color: #0d2786;
        font-size: 28px;
    }
    .sec-1-button{
        display: flex;
        column-gap: 30px;
        margin-top: 30px;
    }
    
    .sec-1-button button{
        color: #fff;
        width: 230px;
        padding: 10px;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
    }
    .learn-course{
        border: solid 2px #fff;
        background-color: unset;
    }
    .learn-course:hover{
        transition-duration: 0.5s;
        background-color: #fff;
        color: #555;
    }
    .submit-trial{
        border: unset;
        background-color: #ffb32c;
    }
    .sec-1-rightside{
        height: 250px;
        width: 450px;
        border-radius: 10px;
        
        background-color: #fff;
    }

    .sec-1-main{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 30px;
        height: 500px;
    }
    .header-distinct{
        height: 64px;
    }
    .section{
        width: 100%;
    }
    .sec-1-leftside{
        font-size: 28px;
        color: #fff;
    }
    .sec-1{
        height: 700px;
        background-image: url('@/assets/image/banner_bg_v3.jpg');
        background-position: 50% 50%;
        background-size: cover;
    }

</style>