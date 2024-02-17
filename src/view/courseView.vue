<template>
    <div class="e-course">
        <div class="e-container">
            <div class="tech-courses">
                <div class="banner">
                    <div class="left-side bold color-3 f-36">Khóa học lập trình tại <div class="bold color-b f-36">EVO Education</div></div>
                    <div class="right-side"></div>
                </div>
                <div class="age-range">
                    <div class="f-16">
                        <div class="semibold color-3 title">Độ tuổi: </div>
                        <div @click="ageOnClick(item.id)" class="age-range-selection-item" v-for="(item, index) in courseRes.vi.ageRange" :key="index">{{ item.text }}</div>
                    </div> 
                </div>
                <div class="view-type">
                    <div @click="changeView(0)" ref="gridView" class="view-type-item grid-view-icon view-selected"></div>
                    <div @click="changeView(1)" ref="listView" class="view-type-item list-view-icon"></div>
                </div>
                <div class="courses-area" v-if="viewType == 0">
                    <div class="course-item" v-for="(item, index) in courseData" :key="index" v-show="item.isEnable">
                        <div class="course-item__image" :class="item.classes"></div>
                        <div style="position: absolute; bottom: 4px; margin: 0 auto; width: calc(100% - 40px); padding: 20px;">
                            <div class="course-item__title semibold f-14" style="text-align: center; padding-bottom: 10px;">{{ item.courseName }}</div>
                            <div style="display: flex; justify-content: space-between;">
                                <div class="course-item__age-range f-12 semibold color-1">{{ item.ageRangeDisplay }}</div>
                                <div class="course-item__education-time f-12 semibold color-1">{{ item.educationTime }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="viewType == 1">
                    <div class="course-item__listview" v-for="(item, index) in courseData" :key="index" v-show="item.isEnable">
                        <div class="list-view-item__age-range semibold">{{ item.ageRangeDisplay }}</div>
                        <div class="list-view-item-image-left" v-if="index % 2 == 0">
                            <div class="list-view-item__left--side" :class="item.classes"></div>
                            <div class="list-view-item__right--side">
                                <div class="list-view-item__title bold color-1">
                                    👩‍🏫{{ item.courseName }}👩‍🏫
                                </div>
                                <div class="list-view-item__age ">
                                    Độ tuổi: {{ item.ageRangeDisplay }}
                                </div>
                                <div class="list-view-item__course--time">
                                    Thời gian học: {{ item.educationTime }}
                                </div>
                                <div class="list-view-item__button">Đăng ký học</div>
                            </div>
                        </div>
                        <div class="list-view-item-image-right" v-else>
                            <div class="list-view-item__left--side">
                                <div class="list-view-item__title bold color-1">
                                    👨‍🏫{{ item.courseName }}👨‍🏫
                                </div>
                                <div class="list-view-item__age">
                                    Độ tuổi: {{ item.ageRangeDisplay }}
                                </div>
                                <div class="list-view-item__course--time">
                                    Thời gian học: {{ item.educationTime }}
                                </div>
                                <div class="list-view-item__button">Đăng ký học</div>

                            </div>
                            <div class="list-view-item__right--side" :class="item.classes"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ELoader v-if="showLoader"></ELoader>
    </div>
</template>
<script>
import courseRes from '@/resources/course.js'
export const ViewType = {
    gridView: 0,
    listView: 1
}
export default {
    name: 'CourseView',
    data() {
        return {
            courseRes: courseRes,
            courseData: null,
            ageRangeList: [],
            currentTechCourseSelectedCategory: 0,
            viewType: ViewType.gridView,
            showLoader: true,
        }
    },
    created(){
        this.courseData = courseRes.vi.techCourse;
        setTimeout(() => {
            this.showLoader = false;
        }, 1500);
    },

    mounted(){
        this.ageRangeList = document.querySelectorAll('.age-range .age-range-selection-item');
        this.ageRangeList[0].classList.add('age-range-selection-item__selected');
    },

    methods: {

        changeView(viewType){
            this.viewType = viewType;
            if (viewType == ViewType.gridView) {
                this.$refs.gridView.classList.add('view-selected');
                this.$refs.listView.classList.remove('view-selected');
            } else if (viewType == ViewType.listView) {
                this.$refs.gridView.classList.remove('view-selected');
                this.$refs.listView.classList.add('view-selected');
            }
        },

        updateCategorySelected(id){
            this.ageRangeList.forEach(e => {
                e.classList.remove('age-range-selection-item__selected');
            })
            this.ageRangeList[id].classList.add('age-range-selection-item__selected');
        },

        disableAllTechCourse(){
            this.courseData.forEach(element => {
                element.isEnable = false;
            });
        },

        EnableAllTechCourse(){
            this.courseData.forEach(element => {
                element.isEnable = true;
            });
        },

        ageOnClick(id) {
            this.disableAllTechCourse();
            if (id == 0) {
                this.EnableAllTechCourse();
            }
            this.courseData.forEach(element => {
                if (element.ageRange == id)
                    element.isEnable = true;
            });
            this.updateCategorySelected(id);
        }
    },
}
</script>
<style scoped>  

    .list-view-item__button{
        text-align: center;
        padding: 8px 12px;
        background-image: linear-gradient(45deg, #02AAB0, #00CDAC);
        max-width: 200px;
        margin: 0 auto;
        color: #fff;
        border-radius: 20px;
        margin-top: 36px;
        cursor: pointer;
        user-select: none;
    }

    .list-view-item__button:hover{
        background-image: linear-gradient(45deg, rgba(2, 170, 176, 0.7), rgba(0, 205, 161, 0.7));
    }

    .list-view-item__title{
        margin-top: 22px;
    }

    .list-view-item__title, .list-view-item__age, .list-view-item__course--time{
        text-align: center;
        margin-bottom: 22px;
    }

    .list-view-item__age-range{
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        width: 150px;
        background-image: linear-gradient(45deg,#ff9966, #ff5e62);
        border-radius: 20px;
    }

    .list-view-item-image-left, .list-view-item-image-right{
        height: 70%;
        width: 100%;
        margin-top: 3%;
        display: flex;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 10px;
    }

    .list-view-item-image-right .list-view-item__left--side{
        width: 40%;
        height: 100%;
    }

    .list-view-item-image-left .list-view-item__right--side{
        width: 40%;
        height: 100%;
    }

    .list-view-item-image-left .list-view-item__left--side{
        border-radius: 10px 0 0 10px;
    }

    .list-view-item-image-right .list-view-item__right--side{
        border-radius: 0 10px 10px 0;
    }

    .list-view-item-image-left .list-view-item__left--side, .list-view-item-image-right .list-view-item__right--side {
        height: 100%;
        width: 60%;
        background-size: cover !important;
        background-position: 40% 70%;
    }

    .course-item__listview{
        height: 350px;
        width: 70%;
        margin: 0 auto;
        margin-bottom: 48px;
    }

    .view-selected{
        border-color: #00a4df !important;
        border-radius: 2px;
    }

    .view-type{
        display: flex;
        column-gap: 12px;
        margin-top: 10px;
        margin-right: 34px;
        justify-content: flex-end;

    }

    .view-type-item{
        height: 32px;
        width: 32px;
        background-color: #fff;
        border: solid transparent 1px;
        background-size: contain;
        cursor: pointer;
    }

    .age-range-selection-item__selected{
        background-color: #bcecff;
        transform: scale(1.05);
    }


    .course-item__image{
        height: 65%;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
        background-size: cover;
    }

    .courses-area{
        display: grid;
        grid-template-columns: auto auto auto auto;
        padding-top: 30px;
        padding-left: 16px;
    }

    .course-item{
        height: 260px;
        width: 260px;
        background-color: #00afef22;
        border-radius: 10px;
        transition-duration: 0.4s;
        margin-bottom: 35px;
        position: relative;
    }
    .course-item:hover{
        transform: scale(1.07);
        cursor: pointer;
    }
    .age-range-selection-item{
        padding: 4px 8px;
        border: solid #00a4df 2px;
        border-radius: 8px;
        transition-duration: 0.3s;
    }

    .age-range-selection-item:hover{
        background-color: #e3f7ff;
        cursor: pointer;
        transform: scale(1.1);
    }

    .age-range .title{
        padding: 4px 8px;
    }

    .age-range > .f-16{
        padding-top: 20px;
        display: flex;
        line-height: 28px;
        column-gap: 12px;
    }

    .banner .right-side{
        height: 390px;
        width: 490px;
        background-size: cover !important;
        background: url('@/assets/gif/version-finale-unscreen.gif');
    }
    .e-course{
        padding-top: 60px;
        background-color: #bb7d0006;
    }

    .tech-courses{
        padding-top: 10px
    }

    .banner{
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>