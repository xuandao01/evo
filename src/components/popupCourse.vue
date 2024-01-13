<template>
    <div class="popup">
        <div class="course-popup">
            <div class="popup-title"></div>
            
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
    created(){
    }
}
</script>

<style scoped>
    .course-popup{
        min-height: 66%;
        width: 60%;
        background-color: #fff;
        margin: 0 auto;
        position: relative;
        top: 17%;
        border-radius: 10px;
    }
</style>