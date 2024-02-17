<template>
    <div class="popup">
        <div class="course-popup">
            <div class="close-icon" @click="$emit('closeMe')"></div>
            <div class="popup-title f-22 bold">
                <div class="popup-title-line"></div>
                {{ subObject.title }}
            </div>
            <div class="popup-main">
                <div class="class-inf">
                    <div class="class-inf__item study-type">
                        <div class="study-type__title semibold">Hình thức học</div>
                        <div class="study-title__value">{{ subObject.studyType }}</div>
                    </div>
                    <div class="class-inf__item num-of-lesson">
                        <div class="num-of-lesson__title semibold">Tổng số buổi học</div>
                        <div class="num-of-lesson__value">{{ subObject.numOfLesson }}</div>
                    </div>
                    <div class="class-inf__item num-of-student">
                        <div class="num-of-student__title semibold">Số học sinh</div>
                        <div class="num-of-student__value">{{ subObject.numOfStudent }}</div>
                    </div>
                </div>
                <div class="subject-info">
                    <div class="subject-info__item" v-for="(item, index) in subObject.content" :key="index">{{ item }}</div>
                </div>
            </div>
            <div class="popup-action semibold" @click="$emit('actionPerform')">
                {{ subObject.action }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopupCourse',
    props: {
        subObject: {
            type: Object,
            required: true,
        }
    },
    data() {
        return{
            showPopup: true,
        }
    },
    created(){
    }
}
</script>

<style scoped>
    .subject-info__item{
        line-height: 26px;
    }
    .subject-info{
        padding: 12px;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        margin-top: 10px;
        max-height: 320px;
        overflow-y: auto;
    }
    .class-inf{
        margin-top:30px;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        background-color: #efefef;
        padding: 12px;
        border-radius: 8px;
    }
    .class-inf__item{
        display: flex;
        justify-content: space-between;
    }
    .popup-title{
        position: relative;
        padding-left: 10px;
    }
    .popup-title-line{
        height: 100%;
        width: 3px;
        background-color: #00afef;
        position: absolute;
        left: 0px;
    }
    .popup-action:hover{
        background-color: #2ac6ff;
        cursor: pointer;
    }
    .popup-action{
        height: 40px;
        min-width: 100px;
        text-align: center;
        border-radius: 8px;
        position: absolute;
        bottom: 20px;
        line-height: 40px;
        background-color: #00afef;
        color: #fff;
        padding: 0 12px;
    }
    .close-icon{
        height: 20px;
        width: 20px;
        cursor: pointer;
        background: url("@/assets/icons/icons8-close-50.png");
        background-size: contain;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10;
    }
    .course-popup{
        min-height: 66%;
        width: 60%;
        background-color: #fff;
        margin: 0 auto;
        position: relative;
        top: 17%;
        border-radius: 10px;
        padding: 18px;
    }
</style>