<template>
    <div class="e-code-kid">
        <div class="e-container">
            <div class="e-main">
                <div class="e-header-distince"></div>
                <div class="e-banner">
                    <div class="banner-title bold">Khóa học cho trẻ em từ 6 - 17 tuổi
                        <div class="line-bar"></div>
                    </div>
                    <div class="banner-imgae"></div>
                </div>
                <div class="main-content">
                    <div class="progress-bar" ref="progressInstance">
                        <div class="progress-title semibold" @click="setActiveProgress(index)" v-for="(item, index) in progressData" :key="index">{{item.title}}</div>
                    </div>
                    <div class="content">
                        <div class="submit-form" ref="submitForm">
                            <div class="form-tite bold">Đăng ký học ngay</div>
                            <div class="form-sub-title">Tư vấn và học thử miễn phí</div>
                            <div class="main-form">
                                <div class="left-side">
                                    <div class="form-element">
                                        <div class="semibold">Họ và tên phụ huynh: <span class="required-field">*</span></div>
                                        <el-input class="inp-element" v-model="submitObject.parentName"></el-input>
                                    </div>
                                    <div class="form-element">
                                        <div class="semibold">Số điện thoại: <span class="required-field">*</span></div>
                                        <el-input class="inp-element" v-model="submitObject.parentName"></el-input>
                                    </div>
                                    <div class="form-element">
                                        <div class="semibold">Email: </div>
                                        <el-input class="inp-element" v-model="submitObject.parentName"></el-input>
                                    </div>
                                    <div class="form-element">
                                        <div class="semibold">Địa chỉ sinh sống: <span class="required-field">*</span></div>
                                        <el-input class="inp-element" v-model="submitObject.parentName"></el-input>
                                    </div>
                                    <div class="form-element">
                                        <div class="semibold">Tên học viên: </div>
                                        <el-input class="inp-element" v-model="submitObject.parentName"></el-input>
                                    </div>
                                    <div class="form-element">
                                        <div class="semibold">Môn học quan tâm: </div>
                                        <el-input class="inp-element" v-model="submitObject.parentName"></el-input>
                                    </div>
                                    <el-button class="submit-button" type="primary">Đăng ký</el-button>
                                </div>
                                <div class="right-side"></div>
                            </div>
                        </div>
                        <div class="overview">
                            <div class="overview-title bold">Tổng quan về ngành</div>
                            <div class="content">
                                <div class="left-content">
                                Ngành Công nghệ thông tin (CNTT) bao gồm phần cứng, phần mềm, mạng, và trí tuệ nhân tạo. Đóng vai trò quan trọng trong tăng hiệu suất, kết nối toàn cầu, và sáng tạo. Thách thức chính là an ninh mạng và quản lý dữ liệu. Tương lai của CNTT tập trung vào trí tuệ nhân tạo, Internet of Things, và mạng 5G.                                </div>
                                <div class="right-content"></div>
                            </div>
                        </div>
                        <div class="choose-reason" ref="chooseReason">
                            <div class="cr-title bold">Tại sao nên lựa chọn khóa học này</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ELoader v-if="showLoader"></ELoader>
    </div>
</template>
<script>
export default {
    name: 'CodeKidView',
    created() {
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
    },
    mounted() {
        this.setActiveProgress(0, false);
    },
    methods:{
        setActiveProgress(progressId, scrollToView = true) {
            let listProgressInstance = this.$refs.progressInstance.querySelectorAll(".progress-title");
            if (listProgressInstance && listProgressInstance.length > 0) {
                listProgressInstance.forEach(el => el.classList.remove("active-progress"));
                /*  eslint-disable no-debugger */
                // debugger
                if (progressId < listProgressInstance.length) {
                    listProgressInstance[progressId].classList.add("active-progress");
                    if (scrollToView) {
                        switch(progressId) {
                            case 0: {
                                this.$refs.submitForm.scrollIntoView({ behavior: "smooth", block: "center"});
                                break;
                            }
                            case 1: {
                                this.$refs.chooseReason.scrollIntoView({ behavior: "smooth", block: "start"});
                                break;
                            }
                        }
                    }
                }
            }
        }
    },
    data() {
        return {
            progressData: [
                {
                    title: "Tổng quan"
                },
                {
                    title: "Tại sao nên học khóa học này ?"
                },
                {
                    title: "Bạn nhận được gì sau khóa học ?"
                },
                {
                    title: "Lộ trình học"
                },
                {
                    title: "Sản phẩm của học viên"
                },
                {
                    title: "Chia sẻ của học viên"
                }
            ],
            currentProgress: 0,
            showLoader: true,
            submitObject: {
                parentName: '',
                phonenumber: '',
                email: '',
                studentname: '',
                location: '',
                address: '',
                subject: ''
            }
        }
    }
}
</script>

<style scoped>
    .choose-reason{
        padding-top: 50px;
    }

    .right-content{
        width: 48%;
        height: 250px;
        background: url("@/assets/image/overview-kid-course.jpg");
        background-size: cover;
    }

    .overview .content{
        width: 100% !important;
        display: flex;
        align-items: center;
    }

    .overview{
        width: 90%;
        margin-left: 8%;
    }

    .overview .left-content{
        width: 50%;
        text-align: justify;
    }

    .cr-title{
        font-size: 24px;
        text-align: center;
        padding: 40px 0;
    }

    .overview-title{
        font-size: 24px;
        text-align: center;
        padding: 40px 0;
    }

    .main-form .right-side{
        background: url("@/assets/image/submit-form-img.png");
        height: 300px;
        width: 300px;
        background-size: cover;
        position: absolute;
        bottom: 0;
        right: 20px;
    }

    .submit-button{
        width: 50%;
        margin-top: 20px;
    }

    .main-form .left-side{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    .form-element{
        width: 50%;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .main-form{
        padding: 20px;
        position: relative;
    }

    .form-tite{
        font-size: 22px;
        text-align: center;
        padding-top: 15px;
    }

    .form-sub-title{
        font-size: 16px;
        text-align: center;
    }

    .submit-form{
        height: 700px;
        width: 80%;
        margin-left: 10%;
        background-color: #00a4df42;
        border-radius: 10px;
    }

    .progress-bar .active-progress{
        background-color: rgb(236, 236, 236);
    }

    .progress-bar .active-progress::before{
        content: '';
        display: block;
        height: 100%;
        width: 4px;
        background-color: #00a4df;
        position: absolute;
        top: 0;
        left: 0;
    }

    .progress-title{
        height: 30px;
        line-height: 30px;
        padding: 20px;
        position: relative;
        cursor: pointer;
    }

    .main-content{
        margin-top: 110px;
        position: relative;
        height: 2600px;
        display: flex;
    }

    .main-content .content{
        height: 100%;
        width: 75%;
    }

    .progress-bar{
        height: 600px;
        width: 25%;
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 64px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
    .e-banner .banner-imgae{
        height: 650px;
        width: 100%;
        border-radius: 30px;
        margin-top: 30px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        background: url("@/assets/image/BannerKidCourse.png");
    }

    .line-bar{
        height: 3px;
        width: 100%;
        background-color: #00a4df; 
    }

    .banner-title{
        line-height: 60px;
        font-size: 24px;
        margin-top: 20px;
        width: 406px;
    }

    .e-banner{
        height: 700px;
    }

    .e-main{
        height: 3000px;
    }

    .e-header-distince{
        height: 64px;
    }
</style>