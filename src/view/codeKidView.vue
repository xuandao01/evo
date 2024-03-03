<template>
    <div class="e-code-kid">
        <div class="e-container">
            <div class="e-main">
                <div class="e-header-distince"></div>
                <div class="e-banner">
                    <div data-aos="fade-right"  class="banner-title bold">Khóa học cho trẻ em từ 6 - 17 tuổi
                        <div class="line-bar"></div>
                    </div>
                    <div data-aos="zoom-in"  class="banner-imgae"></div>
                </div>
                <div class="main-content">
                    <div data-aos="fade-right" class="progress-bar" ref="progressInstance">
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
                            <div class="rewarded-img rewarded-img-mobile rewarded-img-mobile-1"></div>
                            <div class="rewarded-img rewarded-img-mobile rewarded-img-mobile-2"></div>
                            <div class="rewarded-img rewarded-img-mobile rewarded-img-mobile-3"></div>
                        </div>

                        <div class="rewarded" ref="studyLine">
                            <div class="cr-title bold">Lộ trình học
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="study-line">

                                <div class="sl-item" @click="courseClick('kodu')">
                                    <div class="sl-item-avt sl-kodu-img"></div>
                                    <div class="sl-item-year semibold">Năm 1</div>
                                    <div class="sl-item-title bold">Kodu Game Lab</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 1-2 (6 ➜ 7 tuổi)</div>
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

                                <div class="sl-item" @click="courseClick('scratch')">
                                    <div class="sl-item-avt sl-scratch-img"></div>
                                    <div class="sl-item-year semibold">Năm 2</div>
                                    <div class="sl-item-title bold">Lập trình Scatch</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 3-5 (8 ➜ 10 tuổi)</div>
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

                                <div class="sl-item" @click="courseClick('game')">
                                    <div class="sl-item-avt sl-game-img"></div>
                                    <div class="sl-item-year semibold">Năm 3</div>
                                    <div class="sl-item-title bold">Lập trình Game</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 5-7 (10 ➜ 12 tuổi)</div>
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

                                <div class="sl-item" @click="courseClick('app')">
                                    <div class="sl-item-avt sl-app-img"></div>
                                    <div class="sl-item-year semibold">Năm 4</div>
                                    <div class="sl-item-title bold">Lập trình App Mobile</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 6-8 (11 ➜ 13 tuổi)</div>
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

                                <div class="sl-item" @click="courseClick('web')">
                                    <div class="sl-item-avt sl-web-img"></div>
                                    <div class="sl-item-year semibold">Năm 5</div>
                                    <div class="sl-item-title bold">Lập trình Web</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 8-11 (14 ➜ 17 tuổi)</div>
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

                                <div class="sl-item" @click="courseClick('python')">
                                    <div class="sl-item-avt sl-python-img"></div>
                                    <div class="sl-item-year semibold">Năm 6</div>
                                    <div class="sl-item-title bold">Lập trình Python</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 9-12 (15 ➜ 18 tuổi)</div>
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
                        <div class="submit-remind">
                            <div class="cr-title bold">Đăng ký học
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="submit-remind-content">
                                <div class="submit-remind-content__left">
                                    <div class="semibold">EVO đồng hành cùng con chinh phục thế giới công nghệ</div>
                                    <div class="semibold">Đăng ký để nhận tư vấn chi tiết</div>
                                    <button @click="gotoSubmitForm" class="semibold">Nhận tư vấn chi tiết</button>
                                </div>
                                <div class="submit-remind-content__right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ELoader v-if="showLoader"></ELoader>
        <PopupCourse @closeMe="showPopupSubject = false" @actionPerform="popupAction" v-if="showPopupSubject" :subObject="subjectDetail"></PopupCourse>
        <el-dialog v-model="centerDialogVisible" :title="dialogTitle" width="30%" center>
            <span>
            {{ this.dialogMessage }}
            </span>
            <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="centerDialogVisible = false">
                    Đồng ý
                </el-button>
            </span>
            </template>
        </el-dialog>
    </div>
</template>
<script>
import { ElMessage } from 'element-plus';
import homeRes from '@/resources/home.js';
import PopupCourse from '@/components/popupCourse.vue';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default {
    name: 'CodeKidView',
    components: {PopupCourse},
    created() {
        let me = this;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'Khóa học lập trình cho trẻ em tại EVO';
        window.addEventListener("scroll", () => {
            me.onScroll();
        });
    },
    mounted() {
        this.setActiveProgress(0, false);
        AOS.init({
            duration: 1000,
        })
    },
    methods:{
        gotoSubmitForm() {
            this.$refs.submitForm.scrollIntoView({ behavior: "smooth", block: "center"});
        },
        popupAction(){
            this.showPopupSubject = false;
            this.$refs.submitForm.scrollIntoView({ behavior: "smooth", block: "center"});
        },
        courseClick(courseName){
            if (courseName) {
                switch(courseName) {
                    case 'kodu': {
                        this.subjectDetail.title = 'Khóa học lập trình Kodu game lab 3D cho trẻ';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'Online / Offline kết hợp';
                        this.subjectDetail.numOfLesson = '15 Buổi Học';
                        this.subjectDetail.numOfStudent = '5 - 8 học sinh';
                        this.subjectDetail.content = [
                            '🥇 Khóa học Kodu Game Lab 3D cho trẻ em là một chương trình học sáng tạo, giúp trẻ phát triển kỹ năng lập trình và tư duy logic thông qua việc tạo ra các trò chơi 3D độc đáo. Với giao diện thân thiện, Kodu Game Lab giúp trẻ dễ dàng hiểu và ứng dụng kiến thức lập trình thông qua việc thiết kế và xây dựng thế giới 3D của riêng mình.',

                            '🥇 Trong khóa học này, các em sẽ được hướng dẫn cách sử dụng công cụ Kodu để tạo ra những trải nghiệm chơi game thú vị và độc đáo. Các em sẽ học cách thiết lập môi trường, tạo nhân vật, xây dựng cấu trúc thế giới, và thậm chí là lập trình các quy tắc để tạo ra các tình huống khác nhau trong trò chơi của mình.',

                            '🥇 Khóa học không chỉ giúp trẻ phát triển kỹ năng lập trình mà còn khuyến khích sự sáng tạo, tư duy logic, và teamwork thông qua việc họ cùng nhau xây dựng và chia sẻ những trò chơi độc đáo của mình. Đây là cơ hội tuyệt vời để trẻ em khám phá thế giới của công nghệ và lập trình một cách sáng tạo và thú vị.']
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'scratch': {
                        this.subjectDetail.title = 'Khóa học lập trình Scratch cho trẻ';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'Online / Offline kết hợp';
                        this.subjectDetail.numOfLesson = '15 Buổi Học';
                        this.subjectDetail.numOfStudent = '5 - 8 học sinh';
                        this.subjectDetail.content = [
                            '🏆 Khóa học Scratch cho trẻ em là một hành trình sáng tạo, giúp phát triển kỹ năng lập trình một cách dễ dàng và thú vị. Sử dụng môi trường lập trình đồ họa và trực quan, Scratch cho phép trẻ em tạo ra những tác phẩm nghệ thuật số, trò chơi, và câu chuyện theo cách riêng.',
                            '🏆 Trong khóa học này, trẻ em sẽ khám phá cơ bản của lập trình thông qua việc kéo và thả các khối lệnh đơn giản để tạo ra các hoạt động logic. Các em sẽ học cách tạo nhân vật, điều khiển chúng, và tạo ra các hiệu ứng đồ họa một cách sáng tạo',
                            '🏆 Khóa học Scratch không chỉ làm cho việc học lập trình trở nên thú vị, mà còn tạo ra cơ hội cho trẻ em tự do sáng tạo và chia sẻ những tác phẩm kỹ thuật số của mình với cộng đồng trực tuyến."'
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'game': {
                        this.subjectDetail.title = 'Khóa học lập trình Game cho trẻ';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'Online / Offline kết hợp';
                        this.subjectDetail.numOfLesson = '15 Buổi Học';
                        this.subjectDetail.numOfStudent = '5 - 8 học sinh';
                        this.subjectDetail.content = [
                            '🎲 Khóa học Lập trình Game cho trẻ em là một chương trình học thú vị, nhằm giúp trẻ phát triển kỹ năng lập trình thông qua việc tạo ra các trò chơi điện tử. Trong khóa học này, trẻ sẽ học cách sử dụng ngôn ngữ lập trình đơn giản để tạo nhân vật, thiết kế cảnh quan, và xây dựng các thử thách trong trò chơi của mình.',
                            '🎲 Không chỉ giúp trẻ làm quen với các khái niệm cơ bản về lập trình, khóa học còn khuyến khích sự sáng tạo bằng cách cho phép trẻ tự do thiết kế và thực hiện ý tưởng của mình trong thế giới game. Việc học lập trình thông qua game không chỉ làm cho quá trình học trở nên thú vị mà còn phát triển kỹ năng tư duy logic, giải quyết vấn đề, và teamwork.',
                            '🎲 Với khóa học này, các em sẽ không chỉ trở thành người chơi mà còn là những nhà phát triển game nhí, tạo ra những trải nghiệm sống động và độc đáo theo ý tưởng của chính họ.'
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'app': {
                        this.subjectDetail.title = 'Khóa học lập trình App Mobile cho trẻ';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'Online / Offline kết hợp';
                        this.subjectDetail.numOfLesson = '15 Buổi Học';
                        this.subjectDetail.numOfStudent = '5 - 8 học sinh';
                        this.subjectDetail.content = [
                            '📲 Khóa học Lập trình Ứng dụng cho trẻ em là một hành trình hấp dẫn, giúp trẻ phát triển kỹ năng lập trình để tạo ra ứng dụng di động đơn giản của riêng mình. Trong khóa học này, trẻ sẽ khám phá quy trình phát triển ứng dụng từ ý tưởng đến hiện thực bằng cách sử dụng các công cụ phát triển thân thiện với đối tượng.',
                            '📲 Trẻ em sẽ học cách sử dụng môi trường lập trình dành cho di động, tạo giao diện người dùng, và thêm các tính năng cơ bản bằng cách sử dụng ngôn ngữ lập trình đơn giản. Khóa học không chỉ giúp trẻ phát triển kỹ năng kỹ thuật mà còn khuyến khích sự sáng tạo và tư duy logic.',
                            '📲 Với việc tạo ra ứng dụng đầu tiên của mình, trẻ em sẽ trải qua một trải nghiệm thực tế và có cơ hội hiểu rõ hơn về thế giới lập trình ứng dụng di động, từ việc thiết kế đến triển khai.'
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'web': {
                        this.subjectDetail.title = 'Khóa học lập trình Web cho trẻ';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'Online / Offline kết hợp';
                        this.subjectDetail.numOfLesson = '15 Buổi Học';
                        this.subjectDetail.numOfStudent = '5 - 8 học sinh';
                        this.subjectDetail.content = [
                            '💻 Khóa học Lập trình Web cho trẻ em là hành trình tuyệt vời để giới thiệu về thế giới lập trình và phát triển web. Trong khóa học này, trẻ sẽ học cách tạo ra trang web đơn giản bằng cách sử dụng ngôn ngữ và công cụ phát triển web phù hợp với khả năng.',
                            '💻 Các em sẽ tìm hiểu về cấu trúc cơ bản của trang web, làm quen với ngôn ngữ HTML và CSS để thiết kế giao diện. Họ cũng sẽ được giới thiệu với khái niệm cơ bản về lập trình JavaScript để thêm các yếu tố tương tác vào trang web của mình.',
                            '💻 Khóa học không chỉ cho các em hiểu về quy trình phát triển web mà còn khuyến khích tư duy logic, sự sáng tạo và kỹ năng giải quyết vấn đề. Với việc tạo ra trang web đầu tiên của mình, trẻ em sẽ có cơ hội tự tin và thấy hứng thú với thế giới lập trình web.'
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'python': {
                        this.subjectDetail.title = 'Khóa học lập trình Python cho trẻ';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'Online / Offline kết hợp';
                        this.subjectDetail.numOfLesson = '15 Buổi Học';
                        this.subjectDetail.numOfStudent = '5 - 8 học sinh';
                        this.subjectDetail.content = [
                            '⌨️ Khóa học Lập trình Python cho trẻ em là một cơ hội tuyệt vời để giới thiệu ngôn ngữ lập trình đơn giản và mạnh mẽ này cho các em. Trong khóa học này, trẻ sẽ học cách sử dụng Python để tạo ra các chương trình đơn giản, từ việc hiển thị thông điệp đến việc tạo ra các trò chơi và ứng dụng nhỏ.',
                            '⌨️ Khóa học tập trung vào việc làm cho quá trình học lập trình trở nên thú vị và dễ hiểu. Trẻ em sẽ tìm hiểu cú pháp cơ bản của Python, làm quen với các khái niệm lập trình như biến, điều kiện, và vòng lặp. Ngoài ra, họ cũng sẽ có cơ hội ứng dụng kiến thức của mình để tạo ra những dự án nhỏ và sáng tạo.',
                            '⌨️ Khóa học này không chỉ giúp trẻ em hiểu về lập trình Python mà còn khuyến khích tư duy logic và sự sáng tạo, mở ra một cánh cửa để trẻ phát triển kỹ năng lập trình ứng dụng trong tương lai.'
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                }
            }
        },
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
                case window.scrollY > 2910 && window.scrollY < 3500: {
                    this.setActiveProgress(3, false);
                    break;
                }
                case window.scrollY > 3510 && window.scrollY < 3800: {
                    this.setActiveProgress(4, false);
                    break;
                }
                case window.scrollY > 3810: {
                    this.setActiveProgress(5, false);
                    break;
                }
            }
        },  

        validateBeforeSubmit() {
            if (!this.submitObject.parentName) {
                this.showDialog('Đăng ký không thành công', 'Họ và tên phụ huynh không được để trống!');
                return false;
            } else if (!this.submitObject.phonenumber) {
                this.showDialog('Đăng ký không thành công', 'Số điện thoại không được để trống!');
                return false;
            } else if (!this.submitObject.address) {
                this.showDialog('Đăng ký không thành công', 'Địa chỉ không được để trống!');
                return false;
            } else if (!this.checkValidPhonenumber(this.submitObject.phonenumber)) {
                this.showDialog('Đăng ký không thành công', 'Số điện thoại không đúng, vui lòng nhập lại!');
                return false;
            }
            return true;
        },

        checkValidPhonenumber(phoneNumber) {
            const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            return phoneNumber.match(regexPhoneNumber) ? true : false;
        },

        showDialog(title, message){
            this.dialogTitle = title;
            this.dialogMessage = message;
            this.centerDialogVisible = true;
        },

        async submit(){
            if (this.validateBeforeSubmit()) {
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
        }
    },
    data() {
        return {
            showPopupSubject: false,
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
            subjectDetail: {
                title: 'a',
                action: 'b'
            },
            currentProgress: 0,
            showLoader: false,
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
            centerDialogVisible: false,
            dialogTitle: '',
            dialogMessage: '',
        }
    }
}
</script>

<style scoped>
    @media (max-width: 480px) {
        .submit-remind-content__right{
            height: 130px !important;
        }
        .submit-remind-content{
            flex-direction: column-reverse;
        }
        .submit-remind{
            margin-left: 0 !important;
        }
        .student-product{
            flex-direction: column;
            left: 10px !important;
            row-gap: 15px;
        }
        .e-main{
            height: 7900px !important;
        }
        .banner-title{
            line-height: 30px !important;
            width: 300px !important;
        }
        .e-banner{
            height: 280px !important;
        }
        .main-content{
            margin-top: 30px !important;
        }
        .main-content .content{
            flex-direction: column;
            row-gap: 15px;
        }
        .overview{
            width: 100% !important;
            margin-left: 0 !important;
        }
        .choose-reason .cr-title, .cr-left-side{
            margin-left: 0 !important;
            left: 0 !important;
        }
        .cr-item-text {
            position: relative;
            left: 40px;
            margin-left: 0 !important;
            top: -8px;
        }
        .cr-title{
            margin-left: 0 !important;
        }
        .rewarded-img{
            left: 10px !important;
            width: 205px !important;
        }
        .rewarded-img-mobile{
            display: block !important;
        }
        .rewarded-img-mobile-1{
            background-position: -180px !important;
        }
        .rewarded-img-mobile-2{
            background-position: -415px !important;
        }
        .rewarded-img-mobile-3{
            background-position: -594px !important;
        }
        .study-line{
            grid-template-columns: auto !important;
        }
        .cr-item-content{
            padding-top: 2px !important;
        }
        .overview .left-content, .overview .right-content{
            width: 100% !important;
        }
        .progress-bar, .submit-form .right-side{
            display: none !important;
        }
        .content, .submit-form, .form-element{
            width: 100% !important;
            margin-left: 0 !important;
        }
        .e-banner .banner-imgae{
            height: 150px !important;
        }
    }
    .rewarded-img-mobile{
        display: none;
    }

    .submit-remind-content__right{
        height: 300px;
        width: 100%;
        background: url("@/assets/image/s2-p2.jpg") no-repeat;
        background-size: contain;
    }
    .submit-remind-content__left > button {
        height: 40px;
        max-width: 250px;
        background-color: #00afef;
        color: #fff;
        border: unset;
        outline: unset;
        border-radius: 12px;
        cursor: pointer;
        margin-top: 20px;
    }
    .submit-remind-content__left > button:hover{
        background-color: #2ac6ff;
    }
    .submit-remind-content__left{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    .submit-remind-content{
        display: flex;
        padding: 40px;
        column-gap: 20px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius: 20px;
        background-color: #fff;
        align-items: center;
    }
    .submit-remind{
        height: 400px;
        width: 100%;
        margin-left: 50px;
        margin-top: 100px;
    }

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
        width: 64px;
        background-size: contain;
    }

    .sl-scratch-img{
        background: url("@/assets/icons/Scratch.png");
        background-size: cover;
        /* background-color: #00a4df20; */
    }

    .sl-kodu-img{
        background: url("@/assets/icons/Kodu Game Lab.png");
        background-size: cover;
        /* background-color: #00a4df20; */
    }

    .sl-game-img{
        background: url("@/assets/icons/Game.png");
        background-size: cover;
        /* background-color: #00a4df20; */
    }

    .sl-app-img{
        background: url("@/assets/icons/App mobile.png");
        background-size: cover;
        /* background-color: #00a4df20; */
    }

    .sl-web-img{
        background: url("@/assets/icons/Web.png");
        background-size: cover;
        /* background-color: #00a4df20; */
    }

    .sl-python-img{
        background: url("@/assets/icons/Python.png");
        background-size: cover;
        /* background-color: #00a4df20; */
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
        background-size: cover;
        background-position: 0 -20px;
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
        height: 5100px;
    }

    .e-header-distince{
        height: 64px;
    }
</style>