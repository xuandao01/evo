<template>
    <div class="e-code-kid">
        <div class="e-container">
            <div class="e-main">
                <div class="e-header-distince"></div>
                <div class="e-banner">
                    <div class="banner-title bold">Khóa học Robotics: Lắp ráp & chế tạo robot STEM cho trẻ em
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
                                    Robotics là ngành thuộc lĩnh vực chế tạo robot, nằm trong ngành kỹ thuật điều khiển và tự động hóa. Chúng liên quan trực tiếp đến việc nghiên cứu, thiết kế và vận hành các hệ thống hay dây chuyền tự động tại các nhà máy. Ngày nay, Robotics được ứng dụng thực tế rất nhiều trong các lĩnh vực của đời sống như: sản xuất, vận chuyển, y tế,...</div>
                                <div class="right-content"></div>
                            </div>
                        </div>
                        <div class="choose-reason" ref="chooseReason">
                            <div class="cr-title bold">Tại sao nên lựa chọn khóa học này
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="cr-content">
                                <div class="cr-left-side">
                                    <div class="cr-left-side-item"><span class="cr-item-text semibold">Phát triển bộ kỹ năng 5Cs</span>
                                        <div class="cr-item-icon cr-item-icon-1"></div>
                                        <div class="cr-item-content">
                                            Bộ kỹ năng 5Cs (Critical Thinking - Tư duy phê phán, Creativity - Sự sáng tạo, Communication - Giao tiếp, Collaboration - Hợp tác, và Citizenship - Tinh thần công dân)
                                        </div>
                                    </div>
                                    <div class="down-arrow-animated"></div>
                                    <div class="cr-left-side-item"><span class="cr-item-text semibold">Phương pháp giáo dục STEAM</span>
                                        <div class="cr-item-icon cr-item-icon-2"></div>
                                        <div class="cr-item-content">
                                            Phương pháp giáo dục STEAM kết hợp Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật, và Toán học, thúc đẩy sự sáng tạo và giải quyết vấn đề thông qua dự án thực hành.
                                        </div>
                                    </div>
                                    <div class="down-arrow-animated"></div>

                                    <div class="cr-left-side-item"><span class="cr-item-text semibold">Giáo trình chuẩn đầu ra Mỹ</span>
                                        <div class="cr-item-icon cr-item-icon-3"></div>
                                        <div class="cr-item-content">
                                            Giáo trình được biên soạn theo chuẩn đầu ra giáo dục robotic tại Mỹ
                                        </div>
                                    </div>
                                    <div class="down-arrow-animated"></div>

                                    <div class="cr-left-side-item"><span class="cr-item-text semibold">Tham gia tranh tài các giải đấu Robotics</span>
                                        <div class="cr-item-icon cr-item-icon-4"></div>
                                        <div class="cr-item-content">
                                            Tham gia tranh tài cùng những người xuất sắc tại các giải đấu Robotics trong & ngoài nước
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rewarded" ref="reward">
                            <div class="cr-title bold">Bạn nhận được gì sau khóa học này
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="rewarded-img rewarded-img-mobile-0"></div>
                            <div class="rewarded-img rewarded-img-mobile rewarded-img-mobile-1"></div>
                            <div class="rewarded-img rewarded-img-mobile rewarded-img-mobile-2"></div>
                            <div class="rewarded-img rewarded-img-mobile rewarded-img-mobile-3"></div>
                            <div class="rewarded-img rewarded-img-mobile rewarded-img-mobile-4"></div>
                            <div class="rewarded-img rewarded-img-mobile rewarded-img-mobile-5"></div>
                        </div>

                        <div class="rewarded" ref="studyLine">
                            <div class="cr-title bold">Lộ trình học
                                <div class="line-cr-title"></div>
                            </div>
                            <div class="study-line">

                                <div class="sl-item" @click="courseClick('kodu')">
                                    <div class="sl-item-avt sl-kodu-img"></div>
                                    <div class="sl-item-year semibold">Năm 1</div>
                                    <div class="sl-item-title bold">Khám Phá Cùng Robotic</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 1-2 (6 ➜ 7 tuổi)</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="10"  :color="customColors"/>
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
                                    <div class="sl-item-title bold">Robotic và Sự Sáng Tạo</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 3-5 (8 ➜ 10 tuổi)</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="25"  :color="customColors"/>
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
                                    <div class="sl-item-title bold">Điều Khiển Robotic</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Lớp 5-7 (10 ➜ 12 tuổi)</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="40" :color="customColors"/>
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
                                    <div class="sl-item-title bold">Thách Thức Robotic</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Trên 12 tuổi</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="65" :color="customColors"/>
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
                                    <div class="sl-item-title bold">Nghệ Sĩ Robotic</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Trên 13 tuổi</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="85" :color="customColors"/>
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
                                    <div class="sl-item-title bold">Đấu trường Robotics</div>
                                    <div class="sl-item-group">
                                        <div class="sl-item-age">
                                            <div class="sl-item-age-title">Độ tuổi phù hợp</div>
                                            <div class="sl-item-age-value bold">Trên 15 tuổi</div>
                                        </div>
                                        <div class="sl-item-rate">
                                            <div class="sl-item-rate-title">Độ khó</div>
                                            <div class="sl-item-rate-value">
                                                <el-progress :percentage="100" :color="customColors"/>
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'Khóa học robotics cho trẻ em tại EVO';
        window.addEventListener("scroll", () => {
            me.onScroll();
        });
    },
    mounted() {
        this.setActiveProgress(0, false);
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
                        this.subjectDetail.title = 'Khám Phá Cùng Robot: 🤖📚 Học Tập Cơ Bản Cho Trẻ Em';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'offline';
                        this.subjectDetail.numOfLesson = '15 buổi học';
                        this.subjectDetail.numOfStudent = '4 - 6 học sinh';
                        this.subjectDetail.content = [
                            '🥇 Dành cho trẻ em tiếp xúc lần đầu với robotica, giúp họ hiểu cơ bản về nguyên lý hoạt động của robot và tạo quen thuộc với các khái niệm cơ bản về lập trình.',

                            '🥇 Học sinh sẽ tham gia vào các hoạt động thực hành đơn giản như lập trình cơ bản và kiểm soát cơ bản để xây dựng sự hiểu biết vững về robot và công nghệ.',

                            '🥇 Mục tiêu là khuyến khích sự tò mò và sẵn sàng tiếp xúc với môi trường học tập STEM thông qua robotica.',

                            '🥇 Giao tiếp và chia sẻ ý tưởng là một phần quan trọng để xây dựng cộng đồng học tập tích cực.'
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'scratch': {
                        this.subjectDetail.title = 'Robot và Sự Sáng Tạo: 🚀🧠 Mức Độ Học Tập Tiên Tiến Cho Trẻ Em';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'offline';
                        this.subjectDetail.numOfLesson = '15 buổi học';
                        this.subjectDetail.numOfStudent = '4 - 6 học sinh';
                        this.subjectDetail.content = [
                            '🏆 Học sinh sẽ phát triển kỹ năng sáng tạo thông qua việc thiết kế và xây dựng các dự án robot độc đáo.',
                            '🏆 Được hướng dẫn về cách kết hợp lý thuyết và thực hành, họ sẽ hiểu rõ hơn về ứng dụng của robot trong thế giới thực.',
                            '🏆 Trải nghiệm dự án sẽ khuyến khích tư duy sáng tạo, kỹ năng giải quyết vấn đề, và tìm kiếm giải pháp sáng tạo cho các thách thức.',
                            '🏆 Giao tiếp và hợp tác nhóm sẽ được đặc biệt nhấn mạnh để phát triển kỹ năng xã hội.',
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'game': {
                        this.subjectDetail.title = 'Điều Khiển Robot, Điều Khiển Tư Duy: 🎯💡 Phát Triển Kỹ Năng Tư Duy Cao Cấp Ở Trẻ Em';
                        this.subjectDetail.studyType = 'offline';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.numOfLesson = '15 buổi học';
                        this.subjectDetail.numOfStudent = '4 - 6 học sinh';
                        this.subjectDetail.content = [
                            '🎲 Tập trung vào việc lập trình và điều khiển robot, giúp học sinh phát triển tư duy logic và quyết định thông qua việc giải quyết các vấn đề phức tạp.',
                            '🎲 Học sinh sẽ trải nghiệm các dự án yêu cầu sự đặc trưng và sáng tạo trong quy trình lập trình.',
                            '🎲 Phát triển kỹ năng tư duy phê phán, khám phá cách xử lý các vấn đề một cách có tổ chức và có chủ đích.',
                            '🎲 Học sinh sẽ học cách chia sẻ ý tưởng và kiến thức thông qua giao tiếp hiệu quả.',
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'app': {
                        this.subjectDetail.title = 'Thách Thức Robotic: 🌐🔧 Mức Độ Học Tập Chuyên Sâu Cho Trẻ Em Tài Năng';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'offline';
                        this.subjectDetail.numOfLesson = '15 buổi học';
                        this.subjectDetail.numOfStudent = '4 - 6 học sinh';
                        this.subjectDetail.content = [
                            '📲 Đối với trẻ em có kỹ năng đặc biệt, chương trình này đặt ra các thách thức robotica phức tạp và thú vị.',
                            '📲 Học sinh sẽ tham gia vào nghiên cứu và phát triển các ứng dụng robotica trong các lĩnh vực đặc biệt như y tế, môi trường, hoặc công nghiệp.',
                            '📲 Phát triển kỹ năng nghiên cứu, đổi mới, và khả năng áp dụng kiến thức vào bối cảnh thực tế.',
                            '📲 Giao tiếp và hợp tác trong các dự án nhóm sẽ được đặc biệt chú trọng để xây dựng khả năng làm việc nhóm hiệu quả.',
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'web': {
                        this.subjectDetail.title = 'Nghệ Sĩ Robot: 🤖🎓 Hướng Dẫn Đội Ngũ Siêu Tài Năng Trong Lĩnh Vực Công Nghệ và Kỹ Thuật';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'offline';
                        this.subjectDetail.numOfLesson = '15 buổi học';
                        this.subjectDetail.numOfStudent = '4 - 6 học sinh';
                        this.subjectDetail.content = [
                            '💻 Đào tạo trẻ em trở thành những chuyên gia robotica, đặt họ vào bối cảnh thách thức và dự án phức tạp.',
                            '💻 Tập trung vào nâng cao kỹ năng nghiên cứu và phát triển công nghệ mới, đồng thời khuyến khích tinh thần sáng tạo và lãnh đạo.',
                            '💻 Học sinh sẽ được thách thức với các dự án đặc biệt, từ việc giải quyết các vấn đề toàn cầu đến việc phát triển công nghệ đột phá.',
                            '💻 Giao tiếp hiệu quả, quản lý dự án và làm việc nhóm sẽ là những kỹ năng chính để chuẩn bị họ cho sự nghiệp trong lĩnh vực công nghiệp và nghiên cứu robotica.',
                        ]
                        this.showPopupSubject = true;
                        break;
                    }
                    case 'python': {
                        this.subjectDetail.title = 'Đấu trường robotic: 🤖🔑 Hướng Dẫn Đội Ngũ Siêu Tài Năng Trong Lĩnh Vực Công Nghệ và Kỹ Thuật';
                        this.subjectDetail.action = 'Đăng ký học thử miễn phí';
                        this.subjectDetail.studyType = 'offline';
                        this.subjectDetail.numOfLesson = '15 buổi học';
                        this.subjectDetail.numOfStudent = '4 - 6 học sinh';
                        this.subjectDetail.content = [
                            '💻 Đào tạo trẻ em trở thành những chuyên gia robotica, đặt họ vào bối cảnh thách thức và dự án phức tạp.',
                            '💻 Tập trung vào nâng cao kỹ năng nghiên cứu và phát triển công nghệ mới, đồng thời khuyến khích tinh thần sáng tạo và lãnh đạo.',
                            '💻 Học sinh sẽ được thách thức với các dự án đặc biệt, từ việc giải quyết các vấn đề toàn cầu đến việc phát triển công nghệ đột phá.',
                            '💻 Giao tiếp hiệu quả, quản lý dự án và làm việc nhóm sẽ là những kỹ năng chính để chuẩn bị họ cho sự nghiệp trong lĩnh vực công nghiệp và nghiên cứu robotica.',
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
            left: 36px;
            margin-left: 0 !important;
            top: -8px;
        }
        .cr-title{
            margin-left: 0 !important;
        }
        .rewarded-img{
            left: 10px !important;
            width: 238px !important;
            height: 195px !important;
        }
        .rewarded-img-mobile-0{
            background-image: url('@/assets/image/5c-title.png') !important;
            width: 290px !important;
            height: 34px !important;
        }
        .rewarded-img-mobile{
            display: block !important;
        }
        .rewarded-img-mobile-1{
            background-image: url('@/assets/image/5c-1.png') !important;
        }
        .rewarded-img-mobile-2{
            background-image: url('@/assets/image/5c-2.png') !important;
        }
        .rewarded-img-mobile-3{
            background-image: url('@/assets/image/5c-3.png') !important;
        }
        .rewarded-img-mobile-4{
            background-image: url('@/assets/image/5c-4.png') !important;
        }
        .rewarded-img-mobile-5{
            background-image: url('@/assets/image/5c-5.png') !important;
        }
        .study-line{
            grid-template-columns: auto !important;
            left: 10px !important;
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
        width: 60px;
        border-radius: 50%;
    }

    .sl-scratch-img{
        background: url("@/assets/icons/robotic-2.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-kodu-img{
        background: url("@/assets/icons/robotic-1.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-game-img{
        background: url("@/assets/icons/robotic-5.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-app-img{
        background: url("@/assets/icons/robotic-4.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-web-img{
        background: url("@/assets/icons/robotic-3.png");
        background-size: cover;
        background-color: #00a4df20;
    }

    .sl-python-img{
        background: url("@/assets/icons/robotic-6.png");
        background-size: cover;
        background-position: -10px 0;
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
        width: 822px;
        position: relative;
        left: 20px;
        background: url("@/assets/image/robotic-reward.png");
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
        width: 38%;
        height: 250px;
        position: relative;
        left: 50px;
        background: url("@/assets/image/robotic.png");
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
        width: 60%;
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
        background: url("@/assets/image/robotic-banner.jpg");
        background-size: cover;
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
        width: 726px;
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