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
                        <div class="progress-title semibold" @click="setActiveProgress(index, true, true)" v-for="(item, index) in progressData" :key="index">{{item.title}}</div>
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
                                        <el-input class="inp-element" v-model="submitObject.phonenumber"></el-input>
                                    </div>
                                    <div class="form-element">
                                        <div class="semibold">Email: </div>
                                        <el-input class="inp-element" v-model="submitObject.email"></el-input>
                                    </div>
                                    <div class="form-element">
                                        <div class="semibold">Địa chỉ sinh sống: <span class="required-field">*</span></div>
                                        <el-input class="inp-element" v-model="submitObject.address"></el-input>
                                    </div>
                                    <div class="form-element">
                                        <div class="semibold">Tên học viên: </div>
                                        <el-input class="inp-element" v-model="submitObject.studentname"></el-input>
                                    </div>
                                    <div class="form-element">
                                        <div class="semibold">Môn học quan tâm: </div>
                                        <el-input class="inp-element" v-model="submitObject.subject"></el-input>
                                    </div>
                                    <el-button class="submit-button" @click="submit" type="primary">Đăng ký</el-button>
                                </div>
                                <div class="right-side"></div>
                            </div>
                        </div>
                        <div class="overview">
                            <div class="overview-title bold">Tổng quan về ngành
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="content">
                                <div class="left-content">
                                Ngành Công nghệ thông tin (CNTT) bao gồm phần cứng, phần mềm, mạng, và trí tuệ nhân tạo. Đóng vai trò quan trọng trong tăng hiệu suất, kết nối toàn cầu, và sáng tạo. Thách thức chính là an ninh mạng và quản lý dữ liệu. Tương lai của CNTT tập trung vào trí tuệ nhân tạo, Internet of Things, và mạng 5G.                                </div>
                                <div class="right-content"></div>
                            </div>
                        </div>
                        <div class="choose-reason" ref="chooseReason">
                            <div class="cr-title bold">Tại sao nên lựa chọn khóa học này
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="cr-content">
                                <div class="cr-left-side">
                                    <div class="cr-left-side-item"><span class="cr-item-text semibold">Phát triển tư duy và kỹ năng mềm</span>
                                        <div class="cr-item-icon cr-item-icon-1"></div>
                                        <div class="cr-item-content">
                                            Thông qua việc thực hành, các em có cơ hội áp dụng kiến thức vào các dự án thực tế, tạo nền tảng cho sự phát triển 
                                            công nghệ và khám phá sở thích cá nhân từ khi còn nhỏ.
                                        </div>
                                    </div>
                                    <div class="down-arrow-animated"></div>
                                    <div class="cr-left-side-item"><span class="cr-item-text semibold">Học thực chiến tại thung lũng công nghệ</span>
                                        <div class="cr-item-icon cr-item-icon-2"></div>
                                        <div class="cr-item-content">
                                            Nơi đây tập trung nhiều doanh nghiệp công nghệ, các dự án sáng tạo, và cộng đồng khởi nghiệp, 
                                            góp phần thúc đẩy sự phát triển của công nghệ và đổi mới tại Việt Nam.
                                        </div>
                                    </div>
                                    <div class="down-arrow-animated"></div>

                                    <div class="cr-left-side-item"><span class="cr-item-text semibold">Cơ hội làm việc tại các công ty lớn</span>
                                        <div class="cr-item-icon cr-item-icon-3"></div>
                                        <div class="cr-item-content">
                                            Có cơ hội được học tập và làm việc tại những công ty lớn top đầu tại Việt Nam
                                        </div>
                                    </div>
                                    <div class="down-arrow-animated"></div>

                                    <div class="cr-left-side-item"><span class="cr-item-text semibold">Bảo trợ việc làm đối với học viên</span>
                                        <div class="cr-item-icon cr-item-icon-4"></div>
                                        <div class="cr-item-content">
                                            Bảo trợ, hỗ trợ việc làm đối với các học viên đã tham gia và hoàn thành quá trình đào tạo tại EVO Education
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rewarded" ref="reward">
                            <div class="cr-title bold">Bạn nhận được gì sau khóa học này
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="rewarded-img"></div>
                        </div>

                        <div class="rewarded" ref="studyLine">
                            <div class="cr-title bold">Lộ trình học
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="study-line">

                                <div class="sl-item">
                                    <div class="sl-item-avt sl-kodu-img"></div>
                                    <div class="sl-item-year semibold">Năm 1</div>
                                    <div class="sl-item-title bold">Kodu Game Lab</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 3-5 (8 -> 10 tuổi)</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="15"  :color="customColors"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sl-item-btn semibold">Tìm hiểu thêm
                                        <div class="right-arrow-animated"></div>
                                    </div>
                                </div>

                                <div class="sl-item">
                                    <div class="sl-item-avt sl-scratch-img"></div>
                                    <div class="sl-item-year semibold">Năm 1</div>
                                    <div class="sl-item-title bold">Lập trình Scatch</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 3-5 (8 -> 10 tuổi)</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="30"  :color="customColors"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sl-item-btn semibold">Tìm hiểu thêm
                                        <div class="right-arrow-animated"></div>
                                    </div>
                                </div>

                                <div class="sl-item">
                                    <div class="sl-item-avt sl-game-img"></div>
                                    <div class="sl-item-year semibold">Năm 2</div>
                                    <div class="sl-item-title bold">Lập trình game</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 5-7 (10 -> 12 tuổi)</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="45" :color="customColors"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sl-item-btn semibold">Tìm hiểu thêm
                                        <div class="right-arrow-animated"></div>
                                    </div>
                                </div>

                                <div class="sl-item">
                                    <div class="sl-item-avt sl-app-img"></div>
                                    <div class="sl-item-year semibold">Năm 3</div>
                                    <div class="sl-item-title bold">Lập trình app</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 6-8 (11 -> 13 tuổi)</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="60" :color="customColors"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sl-item-btn semibold">Tìm hiểu thêm
                                        <div class="right-arrow-animated"></div>
                                    </div>
                                </div>

                                <div class="sl-item">
                                    <div class="sl-item-avt sl-web-img"></div>
                                    <div class="sl-item-year semibold">Năm 4</div>
                                    <div class="sl-item-title bold">Lập trình web</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 8-11 (14 -> 17 tuổi)</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="75" :color="customColors"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sl-item-btn semibold">Tìm hiểu thêm
                                        <div class="right-arrow-animated"></div>
                                    </div>
                                </div>

                                <div class="sl-item">
                                    <div class="sl-item-avt sl-python-img"></div>
                                    <div class="sl-item-year semibold">Năm 5</div>
                                    <div class="sl-item-title bold">Lập trình python</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 9-12 (15 -> 18 tuổi)</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="90" :color="customColors"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sl-item-btn semibold">Tìm hiểu thêm
                                        <div class="right-arrow-animated"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="rewarded" ref="studentProduct">
                            <div class="cr-title bold">Sản phẩm của học viên
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="student-product">
                                <div class="sp-item"><span class="loader"></span></div>
                                <div class="sp-item"><span class="loader"></span></div>
                                <div class="sp-item"><span class="loader"></span></div>
                            </div>
                        </div>

                        <div class="rewarded" ref="studentShare">
                            <div class="cr-title bold">Chia sẻ của học viên
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="student-product">
                                <div class="sp-item"><span class="loader"></span></div>
                                <div class="sp-item"><span class="loader"></span></div>
                                <div class="sp-item"><span class="loader"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ELoader v-if="showLoader"></ELoader>
        <PopupCourse :subObject="subjectDetail"></PopupCourse>
    </div>
</template>
<script>
import { ElMessage } from 'element-plus';
import homeRes from '@/resources/home.js';
import PopupCourse from '@/components/popupCourse.vue';

export default {
    name: 'CodeKidView',
    components: {PopupCourse},
    created() {
        let me = this;
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
        window.addEventListener("scroll", () => {
            me.onScroll();
        });
    },
    mounted() {
        this.setActiveProgress(0, false);
    },
    methods:{
        setActiveProgress(progressId, scrollToView = true, isClick = false) {
            if (this.$refs.progressInstance) {
                let listProgressInstance = this.$refs.progressInstance.querySelectorAll(".progress-title");
                if (listProgressInstance && listProgressInstance.length > 0) {
                    if (!isClick) {
                        listProgressInstance.forEach(el => el.classList.remove("active-progress"));
                    }
                    if (progressId < listProgressInstance.length) {
                        if (!isClick) {
                            listProgressInstance[progressId].classList.add("active-progress");
                        }
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
                                case 2: {
                                    this.$refs.reward.scrollIntoView({ behavior: "smooth", block: "center"});
                                    break;
                                }
                                case 3: {
                                    this.$refs.studyLine.scrollIntoView({ behavior: "smooth", block: "center"});
                                    break;
                                }
                                case 4: {
                                    this.$refs.studentProduct.scrollIntoView({ behavior: "smooth", block: "center"});
                                    break;
                                }
                                case 5: {
                                    this.$refs.studentShare.scrollIntoView({ behavior: "smooth", block: "center"});
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        },

        onScroll(){
            console.log(window.scrollY);
            switch(true) {
                case window.scrollY < 1600: {
                    this.setActiveProgress(0, false);
                    break;
                }
                case window.scrollY > 1601 && window.scrollY < 2300: {
                    this.setActiveProgress(1, false);
                    break;
                }
                case window.scrollY > 2350 && window.scrollY < 2900: {
                    this.setActiveProgress(2, false);
                    break;
                }
                case window.scrollY > 3000 && window.scrollY < 3500: {
                    this.setActiveProgress(3, false);
                    break;
                }
                case window.scrollY > 3550 && window.scrollY < 3800: {
                    this.setActiveProgress(4, false);
                    break;
                }
                case window.scrollY > 3850: {
                    this.setActiveProgress(5, false);
                    break;
                }
            }
        },  

        async submit(){
            this.showLoader = true;
            let api = this.homeRes.sheetAPI + `?fullname=${this.submitObject.parentName + ' - phu huynh hoc sinh: ' + this.submitObject.studentname }&phone_number=${this.submitObject.phonenumber}&address=${this.submitObject.address}&subject=${this.submitObject.subject}&submited_at=${new Date()}`,
                res = await fetch(api),
                json = await res.json();
            this.showLoader = false;
            if (json.result == 'success') {
                ElMessage({
                    message: 'Đăng ký thành công! Chúng tôi sẽ sớm liên hệ với bạn.',
                    type: 'success',
                    duration: 6000,
                })
                this.submitObject = {
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
            subjectDetail: null,
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
            },
            customColors: [
                { color: '#6eff19', percentage: 21 },
                { color: '#b7eb34', percentage: 41 },
                { color: '#ebe234', percentage: 61 },
                { color: '#eba834', percentage: 81 },
                { color: '#eb4f34', percentage: 100 },
            ],
            homeRes: homeRes,
        }
    }
}
</script>

<style scoped>

    .e-code-kid{
        background-color: #00afef10;
    }


    .loader {
        position: relative;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-block;
        border-top: 3px solid #FFF;
        border-right: 3px solid transparent;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        left: 112px;
        top: 74px;
    }

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 

    .student-product{
        position: relative;
        left: 50px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .sp-item{
        height: 200px;
        width: 280px;
        background-color: #d8d8d8;
        border-radius: 8px;
    }

    .right-arrow-animated{
        height: 30px;
        width: 30px;
        background: url("@/assets/gif/icons8-arrow-right.gif");
        position: absolute;
        top: -3px;
        left: 120px;
        background-size: cover;
    }
    .sl-item-btn{
        color: #111111;
        position: absolute;
        top: 250px;
    }

    .study-line{
        position: relative;
        left: 20px;
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 16px;
        row-gap: 16px;
    }

    .sl-item{
        height: 250px;
        width: 240px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;
        padding: 24px;
        position: relative;
        cursor: pointer;
        background-color: #fff;
    }

    .sl-item:hover{
        transition-duration: 0.5s;
        transform: scale(1.05);
    }

    .sl-item-avt {
        position: absolute;
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }

    .sl-scratch-img{
        background: url("@/assets/icons/Scratch_Cat_Pictture.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-kodu-img{
        background: url("@/assets/icons/kodu.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-game-img{
        background: url("@/assets/image/game-basic.jpg");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-app-img{
        background: url("@/assets/icons/app_dev.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-web-img{
        background: url("@/assets/icons/html-icon.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-python-img{
        background: url("@/assets/icons/Dev.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-item-year{
        position: absolute;
        top: 90px;
    }

    .sl-item-title{
        position: absolute;
        top: 130px;
        font-size: 18px;
    }

    .sl-item-group{
        position: absolute;
        top: 170px;
        display: flex;
        width: calc(100% - 48px);
    }

    .sl-item-age-title, .sl-item-age-value{
        font-size: 14px;
        color: #222222;
    }

    .sl-item-age-value{
        margin-top: 10px;
    }

    .sl-item-rate-title{
        position: absolute;
        right: 0;
        font-size: 14px;
        color: #222222;
    }
    .sl-item-rate-value{
        position: absolute;
        right: -25px;
        top: 30px;
        width: 100px;
    }

    .rewarded{
        position: relative;
        top: 50px;
    }

    .rewarded-img{
        height: 292px;
        width: 800px;
        position: relative;
        left: 20px;
        background: url("@/assets/image/reward-2.png");
        background-size: cover;
        margin: 0 auto;
    }

    .line-cr-title{
        height: 2px;
        width: 100px;
        background-color: #00a4df;
        margin: 0 auto;
        margin-top: 8px;
    }

    .down-arrow-animated{
        height: 25px;
        width: 20px;
        background-color: red;
        margin: 0 auto;
        background: url("@/assets/gif/output-onlinegiftools.gif");
        background-repeat: no-repeat;
    }

    .cr-content{
        display: flex;
        align-items: center;
    }

    .cr-item-content{
        padding-left: 45px;
        padding-top: 30px;
        color: #222222;
        line-height: 24px;
    }

    .cr-item-text{
        margin-left: 45px;
    }

    .cr-item-icon-1 {
        background: url("@/assets/gif/icons8-idea.gif");
    }

    .cr-item-icon-2 {
        background: url("@/assets/gif/icons8-pen.gif");
    }
    .cr-item-icon-3 {
        background: url("@/assets/gif/icons8-company.gif");
    }
    .cr-item-icon-4 {
        background: url("@/assets/gif/icons8-task.gif");
    }

    .cr-item-icon{
        height: 50px;
        width: 50px;
        position: absolute;
        left: 10px;
        top: 14px;
        background-size: contain;
    }

    .cr-left-side{
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        margin: 0 auto;
        position: relative;
        left: 30px;
    }

    @keyframes extendsCRItem {
        from{
            height: 22px;
        }
        to{
            height: 140px;
        }
    }

    @keyframes collapseCRItem {
        from{
            height: 140px;
        }
        to{
            max-height: 78px;
            height: 22px;
        }
    }

    .cr-left-side-item:hover{
        animation-name: extendsCRItem;
        animation-duration: 0.6s;
        animation-fill-mode: forwards;
        max-height: 140px;
    }

    .cr-left-side-item{
        max-width: 380px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 10px;
        padding: 28px;
        animation-name: collapseCRItem;
        overflow: hidden;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        position: relative;
        background-color: #fff;
    }

    .choose-reason{
        padding-top: 50px;
    }

    .right-content{
        width: 48%;
        height: 250px;
        background: url("@/assets/image/overview-kid-course.png");
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
        margin-left: 50px;
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
        height: 3575px;
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
        background-color: #fff;
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
        height: 4600px;
    }

    .e-header-distince{
        height: 64px;
    }
</style>