<template>
    <div class="e-home">
        <div class="section1">
            <div class="e-container">
                <div class="s-main" data-aos="fade-right">
                    <div class="s-main_leftside">
                        <div class="s-main_title bold">EVO Education</div>
                        <div class="s-main_subtitle semibold">Hệ Thống Giáo Dục Phát Triển Toàn Diện Cho Trẻ</div>
                        <div class="s-main_content semibold lh-28">Tại EVO Education, chúng tôi không chỉ truyền đạt kiến thức, chúng tôi tạo ra cơ hội để con bạn khám phá sâu hơn về khoa học và công nghệ. Với sứ mệnh giúp thế hệ trẻ phát triển toàn diện, khai phá tiềm năng của bản thân và xây dựng nền tảng vững chắc cho tương lai. Chúng tôi tin rằng mỗi đứa trẻ đều là một "nhà nghiên cứu" và "nhà phát triển" đầy tiềm năng.</div>
                        <button class="see-more-btn semibold" @click="scrollToForm">Tìm hiểu thêm</button>
                    </div>
                    <div class="s-main_rightside"></div>
                </div>
                <div data-aos="fade-right" class="s-impressive semibold">Những con số <span class="s-impressive impressive semibold">Ấn Tượng</span></div>
                <div class="s-impressive-main">
                    <div data-aos="zoom-in" class="impressive-item">
                        <div class="number bold" id="countExp">0</div>
                        <div class="title semibold">Năm kinh nghiệm</div>
                    </div>
                    <div data-aos="zoom-in-up" class="impressive-item">
                        <div class="number bold" id="countStudent">0</div>
                        <div class="title semibold">Học viên tốt nghiệp có việc làm</div>
                    </div>
                    <div data-aos="zoom-in-up" class="impressive-item">
                        <div class="number bold" id="countBase">0</div>
                        <div class="title semibold">Tổng số cơ sở</div>
                    </div>
                    <div data-aos="zoom-in-down" class="impressive-item">
                        <div class="number bold" id="countTeacher">0</div>
                        <div class="title semibold">Giáo viên dày dặn kinh nghiệm</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="section2">
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
                <div class="section2-part2">
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
        </div> -->
        <div class="section3">
            <div class="e-container">
                <div data-aos="fade-right" class="s3-title section-title bold">Các khóa học lập trình tại <span class="bold color-b">EVO Education</span></div>
                <div class="content">
                    <div class="sec-3-item" @click="redirectToCourse('kids')">
                        <div class="sec-3-item-image"></div>
                        <div class="sec-3-item-title bold">EVO KID</div>
                            <div class="sec-3-item-age__icon"></div>
                        <div class="sec-3-item-age semibold">🎂 6 - 15 Tuổi</div>
                        <div class="sec-3-item-des">Lộ trình được thiết kế cho 
                                                    những bạn nhỏ từ lớp 1
                                                    đến lớp 9 làm quen với 
                                                    máy tính và công nghệ
                                                </div>
                        <div class="sec-3-item-button bold">Tìm hiểu thêm</div>
                    </div>

                    <div class="sec-3-item sec-3-item-2" @click="redirectToCourse('teens')">
                        <div class="sec-3-item-image sec-3-item-image-2"></div>
                        <div class="sec-3-item-title sec-3-item-title-2 bold">EVO TEEN</div>
                            <div class="sec-3-item-age__icon"></div>
                        <div class="sec-3-item-age semibold">🎂 16 - 18 Tuổi</div>
                        <div class="sec-3-item-des">Lộ trình được thiết kế cho 
                                                    những bạn học sinh cấp 3 tiếp cận với một số ngôn ngữ lập trình thông dụng như java, c++, python, javascript,...
                                                </div>
                        <div class="sec-3-item-button sec-3-item-button-2 bold">Tìm hiểu thêm</div>
                    </div>

                    <div class="sec-3-item sec-3-item-3" @click="redirectToCourse('adult')">
                        <div class="sec-3-item-image sec-3-item-image-3"></div>
                        <div class="sec-3-item-title sec-3-item-title-3 bold">EVO ADULT</div>
                            <div class="sec-3-item-age__icon"></div>
                        <div class="sec-3-item-age semibold">🎂 Trên 18 Tuổi</div>
                        <div class="sec-3-item-des">Lộ trình được thiết kế học để đi làm định hướng nghề nghiệp theo backend hoặc frontend hay app developer,...
                                                </div>
                        <div class="sec-3-item-button sec-3-item-button-3 bold">Tìm hiểu thêm</div>
                    </div>
                </div>
                
                <!-- <el-carousel data-aos="fade-right" class="course-carosel pc-mode" :interval="5000" type="card" height="300px">
                    <el-carousel-item class="course-carousel-item" v-for="(item, index) in homeRes[lang].courseCarousel" :key="index">
                        <div class="cc-header">
                            <div class="cc-logo s-icon" :class="item.logo"></div>
                            <div class="cc-title bold color-3 ">{{ item.title }}</div>
                            <div class="cc-content">
                                <div class="cc-content-item" v-for="(content, inx) in item.content" :key="inx">{{ content }}</div>
                            </div>
                            <div class="cc-item-footer">
                                <div @click="scrollToForm" class="bold" style="color: rgba(56, 56, 255, 0.844);">Tìm hiểu thêm 🔎</div>
                                <div @click="scrollToForm" class="bold" style="color: rgb(78, 78, 78);">Đăng ký học thử 🚀</div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
                <el-carousel class="mobile-mode">
                    <el-carousel-item class="course-carousel-item" v-for="(item, index) in homeRes[lang].courseCarousel" :key="index">
                        <div class="cc-header">
                            <div class="cc-logo s-icon" :class="item.logo"></div>
                            <div class="cc-title bold color-3 ">{{ item.title }}</div>
                            <div class="cc-content">
                                <div class="cc-content-item" v-for="(content, inx) in item.content" :key="inx">{{ content }}</div>
                            </div>
                            <div class="cc-item-footer">
                                <div @click="scrollToForm" class="bold" style="color: rgba(56, 56, 255, 0.844);">Tìm hiểu thêm 🔎</div>
                                <div @click="scrollToForm" class="bold" style="color: rgb(78, 78, 78);">Đăng ký học thử 🚀</div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel> -->
                <div class="semibold" @click="watchAllCourse" style="cursor: pointer; width: 100%; text-align: center; margin-top: 30px; color: rgb(89, 89, 255);">Xem tất cả khóa học</div>
            </div>
            <div class="section-6">
                <div class="e-container">
                    <div data-aos="fade-left" class="s3-title section-title bold">Đội ngũ giảng viên tại <span class="bold color-b">EVO Education</span></div>
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
            </div>
            <div class="e-container">
                <!-- <div data-aos="fade-left" class="s3-title section-title bold">Học lập trình cho người lớn tại <span class="bold color-b">EVO Education</span></div>
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
                </div> -->
            </div>
        </div>
        <div class="section2">
            <div class="e-container">
                <div data-aos="fade-right" class="s-title bold">Tại sao phụ huynh nên chọn <span class="s-title s-title-evo bold">EVO Education</span></div>
                <div class="section2-main">
                    <div class="content-container">
                        <div data-aos="flip-left" class="section2-main-item">
                            <div class="section2-main-item__icon icon-overview"></div>
                            <div class="section2-main-item__text semibold">Lộ trình học toàn diện</div>
                        </div>
                        <div data-aos="flip-right" class="section2-main-item">
                            <div class="section2-main-item__icon icon-teacher"></div>
                            <div class="section2-main-item__text semibold">Đội ngũ giảng viên tâm huyết</div>
                        </div>
                        <div data-aos="flip-left" class="section2-main-item">
                            <div class="section2-main-item__icon icon-lesson"></div>
                            <div class="section2-main-item__text semibold">Bài giảng sinh động</div>
                        </div>
                        <div data-aos="flip-right" class="section2-main-item">
                            <div class="section2-main-item__icon icon-life"></div>
                            <div class="section2-main-item__text semibold">Đồng hành trọn đời</div>
                        </div>
                    </div>
                </div>
                <!--<div data-aos="fade-right" class="s-title bold"><span class="s-title s-title-evo bold">Lộ trình học</span> cá nhân hóa cho từng học viên</div>
                <div data-aos="fade-left" class="s2-progress">
                </div>-->
                <div data-aos="fade-right" class="s-title bold"><span class="s-title s-title-evo bold">Học viên</span> nói gì về EVO Education</div>
                <div class="s2-p2-content">
                    <div class="s2-p2-contaner">
                        <div data-aos="fade-right" class="parent-rate-item">
                            <div class="stars"></div>
                            <div class="main-rate">EVO đã thay đổi cách tôi nhìn nhận về học tập. Tôi rất vui khi trở thành một phần của cộng đồng EVO</div>
                            <div class="line"></div>
                            <div class="parent-name semibold">HV. Nguyễn Thị Hương</div>
                        </div>
                        <div data-aos="fade-up" class="parent-rate-item">
                            <div class="stars"></div>
                            <div class="main-rate">Các thầy tại EVO đã truyền cho con cảm hứng rất lớn đối với lập trình và để lại ấn tượng trong con.</div>
                            <div class="line"></div>
                            <div class="parent-name semibold">HV. Trần Văn Nam</div>
                        </div>
                        <div data-aos="fade-left" class="parent-rate-item">
                            <div class="stars"></div>
                            <div class="main-rate">Học tập tại EVO đã giúp em gặp gỡ rất nhiều bạn bè mới và biết thêm rất nhiều điều mới mẻ</div>
                            <div class="line"></div>
                            <div class="parent-name semibold">HV. Lê Thị Linh</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="section4">
            <div class="e-container" style="display: flex; align-items: center; column-gap: 30px;">
                <div>
                    <div data-aos="fade-right" class="s4-title bold color-3" style="font-size: 40px; padding-top: 50px;">Học thử <span class="bold color-b">trải nghiệm thật</span></div>
                    <div style="margin-top: 30px;">
                        <div data-aos="fade-right" class="semibold color-5 lh-44" style="font-size: 17px; " v-for="(item, index) in homeRes[lang].section4Content" :key="index"> {{ item }}</div>
                    </div>
                    <div data-aos="zoom-in" @click="scrollToForm" class="bold" style="cursor: pointer; padding: 10px 20px; border-radius: 8px; margin-top: 20px; color: #fff; max-width: 150px; text-align: center; background-color: #0297ce;">Đăng ký học thử</div>
                </div>
                <div data-aos="fade-left" class="s4-right-side"></div>
            </div>
        </div>

        <div class="section5" ref="submitForm" >
            <div class="e-container flex c-gap-10">
                <div data-aos="fade-right" class="s5-left-side"></div>
                <div class="s5-right-side" v-if="showSubmitForm">
                    <div class="bold color-1" style="font-size: 32px; position: relative; left: 100px;">Học trải nghiệm <span class="bold color-b"> miễn phí </span></div>
                    <div class="leave-inf-area" style="display: flex; flex-direction: column;">
                        <div data-aos="fade-left"><input ref="inpFullname" v-model="fullName" @blur="inpOnBlur('name')" placeholder="Họ tên học viên (Nguyễn Văn A)"></div>
                        <div data-aos="fade-left"><input ref="inpPhonenumber" v-model="phoneNumber" @blur="inpOnBlur('phoneNumber')" placeholder="Số điện thoại (0975123222)"></div>
                        <div data-aos="fade-left"><input ref="inpAge" type="number" v-model="age" @blur="inpOnBlur('age')" placeholder="Độ tuổi (8)"></div>
                        <div data-aos="fade-left"><input v-model="address" @blur="inpOnBlur('address')" placeholder="Địa chỉ (Cầu Giấy - Hà Nội)"></div>
                        <div data-aos="fade-left" class="e-subject">
                            <el-tree-select
                                class="e-subject-tree"
                                v-model="subjectValue"
                                :data="courseData"
                                :render-after-expand="false"
                                multiple
                            />
                        </div>
                        <button data-aos="zoom-in" class="semibold" @click="submit">Đăng ký ngay</button>
                    </div>
                </div>

                <div data-aos="zoom-in" class="s5-right-side-result" v-else>
                    <el-result
                        icon="success"
                        title="Đăng ký thành công"
                        sub-title="Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất"
                    ></el-result>
                    <div class="turn-back w-100">
                        <button class="semibold common-btn" @click="backToSubmit">Quay lại form đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
        <loader v-show="isLoading"></loader>
        <div @click="scrollToForm" class="e-trial-fixed">
        </div>

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
import homeRes from '@/resources/home.js'
import loader from '@/components/loader.vue'
import { ElMessage } from 'element-plus';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default {
    name: 'homeView',
    components: {loader },
    data(){
        return{
            homeRes: homeRes,
            lang: 'vi',
            isErrName: false,
            isErrPN: false,
            fullName: '',
            phoneNumber: '',
            address: '',
            subject: '',
            age: '',
            isLoading: false,
            showSubmitForm: true,
            subjectValue: null,
            centerDialogVisible: false,
            dialogTitle: '',
            isCounted: false,
            dialogMessage: '',
            courseData: [
                {
                    value: '1',
                    label: 'Lập trình cho trẻ em',
                    children: [
                    {
                        value: '1-1',
                        label: 'Lập trình Scratch',
                        children: [
                        {
                            value: '1-1-1',
                            label: 'Lập trình Scratch Basic',
                        },
                        {
                            value: '1-1-2',
                            label: 'Lập trình Scratch Advance',
                        },
                        {
                            value: '1-1-3',
                            label: 'Lập trình Scratch Intensive',
                        },
                        ],
                    },
                    {
                        value: '1-2',
                        label: 'Lập trình Game',
                        children: [
                        {
                            value: '1-2-1',
                            label: 'Lập trình Game Basic',
                        },
                        {
                            value: '1-2-2',
                            label: 'Lập trình Game Advance',
                        },
                        {
                            value: '1-2-3',
                            label: 'Lập trình Game Intensive',
                        },
                        ],
                    },
                    {
                        value: '1-3',
                        label: 'Lập trình Web',
                        children: [
                        {
                            value: '1-3-1',
                            label: 'Lập trình Web Basic',
                        },
                        {
                            value: '1-3-2',
                            label: 'Lập trình Web Advance',
                        },
                        {
                            value: '1-3-3',
                            label: 'Lập trình Web Intensive',
                        },
                        ],
                    },
                    {
                        value: '1-4',
                        label: 'Lập trình Python cơ bản',
                    }
                    ],
                },
                {
                    value: '2',
                    label: 'Lập trình cho người lớn',
                    children: [
                    {
                        value: '2-1',
                        label: 'Lập trình front-end',
                        children: [
                        {
                            value: '2-1-1',
                            label: 'HTML/CSS Cơ bản',
                        },
                        {
                            value: '2-1-2',
                            label: 'HTML/CSS Nâng cao',
                        },
                        {
                            value: '2-1-3',
                            label: 'Framework JS Vue-React-Angular',
                        },
                        ],
                    },
                    {
                        value: '2-2',
                        label: 'Lập trình back-end',
                    },
                    {
                        value: '2-2',
                        label: 'Restful API',
                    },
                    {
                        value: '2-2',
                        label: 'Cơ sở dữ liệu',
                    },
                    ],
                },
                ],
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
    },
    created(){
        if (sessionStorage.lang) this.lang = sessionStorage.lang;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'Trường học Công nghệ và Sáng tạo EVO';
    },
    mounted(){
        if (!this.isCounted) {
            this.setCounting('countStudent', 95, '%');
            this.setCounting('countExp', 5, '');
            this.setCounting('countBase', 12, '');
            this.setCounting('countTeacher', 100, '+');
            this.isCounted = true;
        }
        this.processWhenMounted();
        AOS.init({
            duration: 1000,
        })
    },

    watch:{

    },

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
        watchAllCourse(){
            this.$router.push('course-kid');
        },
        showDialog(title, message){
            this.dialogTitle = title;
            this.dialogMessage = message;
            this.centerDialogVisible = true;
        },

        processWhenMounted(){
            document.querySelector('.e-subject-tree .el-input__inner').placeholder = 'Môn học quan tâm';
        },

        backToSubmit(){
            this.showSubmitForm = true;
        },

        // convertIDToSubject(arr) {
        //     let result = '';
        //     if (arr && arr.length > 0) {
        //         /*eslint-disable no-debugger */
        //         debugger
        //     }
        // },

        async submit(){
            if (this.vaildate()) {
                this.isLoading = true;
                // let flatSubject = this.subject.flat(Infinity);
                // let subjectSelected = 
                let api = this.homeRes.sheetAPI + `?fullname=${this.fullName}&phone_number=${this.phoneNumber}&address=${this.address}&subject=${this.subjectValue}&age=${this.age}&submited_at=${new Date()}`,
                    res = await fetch(api),
                    json = await res.json();
                this.isLoading = false;
                
                if (json.result == 'success') {
                    this.showSubmitForm = false;
                    this.fullName = '';
                    this.phoneNumber = '';
                    this.address = '';
                    this.subjectValue = null;
                    this.subject = '';
                    this.age = '';
                    ElMessage({
                        message: 'Đăng ký thành công! Chúng tôi sẽ sớm liên hệ với bạn.',
                        type: 'success',
                        duration: 6000,
                    })
                }
            }
        },

        vaildate(){
            if (!this.fullName) {
                this.showDialog('Đăng ký không thành công', 'Họ và tên không được để trống!');
                this.$refs.inpFullname.focus();
                return false;
            } else if (!this.phoneNumber) {
                this.showDialog('Đăng ký không thành công', 'Số điện thoại không được để trống!')
                this.$refs.inpPhonenumber.focus();
                return false;
            } else if (!this.subjectValue || this.subjectValue.length == 0) {
                this.showDialog('Đăng ký không thành công', 'Bạn phải chọn ít nhất 1 môn học!')
                document.querySelector('.e-subject-tree .el-input__inner').focus();
                return false;
            } else if (!this.checkValidPhonenumber(this.phoneNumber)) {
                this.showDialog('Đăng ký không thành công', 'Số điện thoại không hợp lệ. Vui lòng nhập đúng số điện thoại!')
                this.$refs.inpPhonenumber.focus();
                return false;
            }
            return true;
        },

        checkValidPhonenumber(phoneNumber) {
            const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            return phoneNumber.match(regexPhoneNumber) ? true : false;
        },

        setCounting(id, countTo, after){
            let counts = setInterval(updated, 3000/countTo);
            let upto = 0;
            function updated() {
                let count = document.getElementById(id);
                if (!after && count) {
                    count.innerHTML = ++upto;
                } else {
                    if (count)
                        count.innerHTML = ++upto + after;
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
                        name = 'Họ tên học viên';
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
                    errText.style.marginLeft = '50px';
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
                if (event.target.parentElement.querySelector('.err-text')) {
                    event.target.parentElement.querySelector('.err-text').remove();
                }
                event.target.classList.remove('err-field');
            }
        },

        scrollToForm(){
            this.$refs.submitForm.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }
    },
}
</script>
<style scoped>

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
    }
    ::v-deep .el-carousel__container {
        height: 500px;
    }

    .teacher-item .teacher-image-inner{
        height: 190px;
        width: 190px;   
        border-radius: 50%;
        background-image: url('@/assets/image/txdao.jpg');
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

    .section-6{
        width: 100%;
        height: 800px;
        background-image: url('@/assets/image/bg-section4.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    .sec-3-item-title-2{
        color: #ff9103 !important;
    }

    .sec-3-item-button-2{
        background-color: #ff9103 !important;
    }

    .sec-3-item-2:hover{
        box-shadow: 0px 5px 20px #ff9103be !important;
    }

    .sec-3-item-title-3{
        color: #ff6f42 !important;
    }

    .sec-3-item-button-3{
        background-color: #ff6f42 !important;
    }

    .sec-3-item-3:hover{
        box-shadow: 0px 5px 20px #ff6f42be !important;
    }

    .sec-3-item .sec-3-item-button:hover{
        transition-duration: 0.5s;
        transform: scale(1.05);
    }

    .sec-3-item .sec-3-item-button {
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

    .sec-3-item .sec-3-item-des {
        text-align: center;
        margin-top: 20px;
    }

    .sec-3-item .sec-3-item-age {
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
    }

    .sec-3-item .sec-3-item-title{
        font-family: Bubble-gum !important;
        font-size: 28px;
        text-align: center;
        margin-top: 20px;
        color: #fbc22d;
    }

    .sec-3-item .sec-3-item-image{
        height: 237px;
        width: 300px;
        background-image: url('@/assets/icons/evo-kid.png');
        background-size: cover;
    }

    .sec-3-item .sec-3-item-image-2{
        background-image: url('@/assets/icons/evo-teen.png');
    }

    .sec-3-item .sec-3-item-image-3{
        background-image: url('@/assets/icons/evo-adult.png');
    }

    .sec-3-item:hover{
        box-shadow: 0px 5px 20px #fbc12dbe;
        transform: translateY(-10px);
    }

    .sec-3-item{
        height: 500px;
        width: 300px;
        box-shadow: 0px 5px 20px #8c8c8c9e;
        border-radius: 20px;
        padding: 25px;
        position: relative;
        cursor: pointer;
        transition-duration: 0.5s;
    }

    .section3 .content{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
    }

    .mobile-mode{
        display: none;
    }
    .parent-rate-item .line{
        width: 50px;
        height: 2px;
        background-color: #ffc911;
        position: relative;
        top: 4px;
    }
    .parent-rate-item .stars{
        width: 150px;
        background-size: 30px !important;
        height: 30px;
        background: url("@/assets/gif/icons8-star.gif");
    }
    .parent-rate-item .main-rate{
        text-align: center;
    } 
    .parent-rate-item{
        max-width: 300px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 12px;
    }
    .s2-p2-contaner{
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
    }
    .s2-progress{
        height: 565px;
        margin-top: 80px;
        width: 100%;
        background: url("@/assets/image/lotrinh_v2.png") no-repeat;
        background-size: contain;
    }
    .section2-main-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }
    .section2-main-item__text{
        align-items: center;
    }
    .section2-main-item__icon{
        height: 50px;
        width: 50px;
        background-size: contain !important;
        align-items: center;
    }
    .icon-overview{
        background: url("@/assets/icons/icons8-overview-64.png");
    }
    .icon-teacher{
        background: url("@/assets/icons/icons8-teach-50.png");
    }
    .icon-lesson{
        background: url("@/assets/icons/icons8-lesson-50.png");
    }
    .icon-life{
        background: url("@/assets/icons/icons8-life-cycle-64.png");
    }
    .section2-main .content-container{
        display: grid;
        grid-template-columns: auto auto;
        row-gap: 80px;
        margin-top: 80px;
    }

    .el-input--suffix{
        width: 100%;
        height: 72px;
        border: unset;
        outline: unset;
    }

    .e-subject-tree{
        width: 100%;
    }

    .e-subject-tree .el-input__wrapper{
        border-radius: 10px;
        padding: 6px;
    }

    ::v-deep .el-input__wrapper{
        border-radius: 10px;
        padding: 6px;
        border: solid 1px #666 !important;
        outline: unset;
    }

    .e-subject{
        width: 126%;
        height: 72px;
        margin-top: 20px;
        margin-left: 50px;
        border-radius: 10px;
        background-color: transparent;
    }

    .e-trial-fixed:hover{
        cursor: pointer;
        opacity: 1;
    }

    .e-trial-fixed{
        position: fixed;
        bottom: 0;
        right: 0px;
        border-radius: 20px; 
        opacity: .7;
        z-index: 95;
        height: 150px;
        width: 180px;
        background: url('@/assets/image/submit-now.png') no-repeat;
        background-size: cover;
    }

    .s5-right-side-result{
        flex: 1;
    }

    .s5-right-side-result .el-result{
        width: 100%;
        height: 70%;
        margin: 0 auto;
    }

    .common-btn{
        height: 44px;
        position: relative;
        left: 31%;
        top: 20px;
        border: unset;
        outline: unset;
        border-radius: 12px;
        background-color: #00afef;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        padding: 10px 20px;
    }

    .leave-inf-area > button{
        height: 44px;
        position: relative;
        left: 110px;
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
        height: 36px;
        border-radius: 12px;
        border: solid #666666 1px;
        width: 120%;
        position: relative;
        left: 0px;
        margin-top: 20px;
        padding: 0 12px;
        margin-left: 50px;
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
        background-image: linear-gradient(74deg, #fff0d2, #ffdb94);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .el-carousel__item:nth-child(3n + 1) {
        background-image: linear-gradient(74deg, #d7e6ff, #a3c5ff);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .el-carousel__item:nth-child(3n + 2) {
        background-image: linear-gradient(74deg, #ffe4e4, #ffc3c3);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .section-title{
        font-size: 38px;
        color: #373737;
        margin-top: 100px;
        text-align: center;
    }

    .section3{
        background-color: #bb7d0006;
        height: 1750px;
        position: relative;
        padding-top: 20px;
    }

    .section2{
        height: 1000px;
        background-color: #00afef10;
        position: relative;
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
        color: #fdb830;
    }

    .section1{
        position: relative;
        padding-top: 100px;
        height: 670px;
        background-color: #00afef10;
        background-image: url('@/assets/image/sec-1-bg-3.jpg');
        background-position: 0 -15px;
        background-repeat: no-repeat;
        background-size: cover;
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
        color: #fdb830;
        font-size: 44px;
    }

    .s-main_subtitle{
        color: #fff;
        font-size: 28px;
        margin-top: 12px;
    }

    .s-main_content{
        color: #fff;
        font-size: 18px;
        margin-top: 18px;
        text-align: justify;
    }

    .s-main_rightside{
        width: 100%;
        max-width: 575px;
        max-height: 330px;
        background-color: #00afef30;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .s-main_rightside{
        background: url('@/assets/image/HomeBanner.png') no-repeat;
        background-size: cover !important;
    }

    .see-more-btn{
        height: 40px;
        width: 200px;
        border-radius: 8px;
        border: unset;
        background-color: #fdb830;
        color: #fff;
        font-size: 18px;
        margin-top: 40px;
        cursor: pointer;
    }

    .see-more-btn:hover{
        background-color: #fcaf14;

    }

    .s-impressive{
        margin-top: 60px;
        color: #fff;
        font-size: 32px;
    }

    .impressive{
        color: #fdb830;
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
        color: #fff;
        font-size: 44px;
    }

    .impressive-item .title{
        color: #fff;
        font-size: 18px;
    }
</style>