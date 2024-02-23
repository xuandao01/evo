<template>
    <div class="event">
        <div class="e-container">
            <div class="header-fill"></div>
            <div class="event-main">
                <div class="event-banner" data-aos="fade-left"></div>
                <div class="event-container">
                    <div class="event-item" data-aos="fade-right" @click="eventClick('1')">
                        <div class="event-left news-1"></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">HTML là gì? Tìm hiểu chi tiết ngôn ngữ HTML trong lập trình web</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item" data-aos="fade-left" @click="eventClick('2')">
                        <div class="event-left news-2 "></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">Top 10 Phần mềm thiết kế giao diện app Android, IOS tốt nhất hiện nay</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item" data-aos="fade-right" @click="eventClick('3')">
                        <div class="event-left news-3" ></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">Nên chọn học lập trình web hay lập trình mobile app?</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item"  data-aos="fade-left" @click="eventClick('4')">
                        <div class="event-left news-4" ></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">Full Stack Developer là gì? Kỹ năng cần thiết cho một Full Stack?</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item"  data-aos="fade-right" @click="eventClick('5')">
                        <div class="event-left news-5" ></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">Lập trình hướng đối tượng là gì? Kiến thức bạn cần biết về OOP</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item"  data-aos="fade-left" @click="eventClick('6')">
                        <div class="event-left news-6" ></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">Top 10+ Web Development Framework được sử dụng phổ biến nhất hiện nay</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-fill"></div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'
export default{
    name: "newsView",
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'Tin tức nổi bật';
    },
    mounted() {
        AOS.init({
            duration: 1000,
        })
    },
    methods: {
        eventClick(event){
            switch(event) {
                case '1': {
                    window.open('https://dotnetguru.org/html-la-gi/', '_blank');
                    break;
                }
                case '2': {
                    window.open('https://dotnetguru.org/cong-cu-thiet-ke-giao-dien-app/', '_blank');
                    break;
                }
                case '3': {
                    window.open('https://dotnetguru.org/lap-trinh-web-hay-mobile-app/', '_blank');
                    break;
                }
                case '4': {
                    window.open('https://dotnetguru.org/full-stack-developer-la-gi/', '_blank');
                    break;
                }
                case '5': {
                    window.open('https://dotnetguru.org/lap-trinh-huong-doi-tuong-la-gi/', '_blank');
                    break;
                }
                case '6': {
                    window.open('https://dotnetguru.org/web-development-framework/', '_blank');
                    break;
                }
            }
        },
    }
}
</script>

<style scoped>
    @media (max-width: 480px) {
        .event-banner{
            height: 170px !important;
        }
        .event-item {
            height: 250px !important;
            display: flex !important;
            flex-direction: column !important;
            width: 245px !important;
            row-gap: 15px;
        }
        .event-container{
            width: 350px !important;
        }
        .event-left{
            width: 250px !important;
        }
    }
    .news-2{
        background-image: url("@/assets/icons/new-2.png") !important;
        background-position: 0 0 !important;
    }
    .news-3{
        background-image: url("@/assets/icons/new-3.png") !important;
        background-position: 0 0 !important;
    }
    .news-4{
        background-image: url("@/assets/icons/new-4.png") !important;
        background-position: 0 0 !important;
    }
    .news-5{
        background-image: url("@/assets/icons/new-5.png") !important;
        background-position: 0 0 !important;
    }
    .news-6{
        background-image: url("@/assets/icons/new-6.png") !important;
        background-position: 0 0 !important;
    }

    .event-container{
        margin: 0 auto;
        width: 800px;
        display: flex;
        flex-direction: column;
        row-gap: 40px;
        margin-top: 50px;
    }
    .event-right{
        max-width: 350px;
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }
    .event-left{
        height: 200px;
        width: 350px;
        background-size: cover;
        border-radius: 20px;
        background-position: -40px 0;
        background-image: url("@/assets/icons/new-1.png");
    }
    .event-item{
        height: 200px;
        background-color: #f2f2f2;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: 750px;
        column-gap: 20px;
        align-items: center;
        border: solid #e0e0e0 1px;
        display: flex;
        border-radius: 10px;
        padding: 25px;
    }
    .event-item:hover{
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .header-fill{
        height: 64px;
    }
    .event-banner{
        height: 675px;
        margin-top: 20px;
        width: 100%;
        background-size: contain;
        background-image: url("@/assets/image/hotnews.png");
        background-repeat: no-repeat;
        border-radius: 20px;
    }
</style>