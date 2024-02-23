<template>
    <div class="event">
        <div class="e-container">
            <div class="header-fill"></div>
            <div class="event-main">
                <div class="event-banner" data-aos="fade-right"></div>
                <div class="event-container">
                    <div class="event-item" data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine" @click="eventClick('ces')">
                        <div class="event-left"></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">Wrapping up CES 2024 and Looking to the Future of Tech</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item" data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine" @click="eventClick('web-submit')">
                        <div class="event-left web-submit-event "></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">Web Summit Coming February</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item" data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine" @click="eventClick('gg-next')">
                        <div class="event-left gg-next" ></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">Next ’24 has something for everyone</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item"  data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine" @click="eventClick('gg-io')">
                        <div class="event-left gg-io" ></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">That's a wrap on Google I/O 2023</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item"  data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine" @click="eventClick('dublin-tech')">
                        <div class="event-left dublin-tech" ></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">Dublin Tech Summit</div>
                            <div class="event-item-right__see-more semibold">Xem chi tiết ➜</div>
                        </div>
                    </div>
                    <div class="event-item"  data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine" @click="eventClick('london-tech')">
                        <div class="event-left london-tech" ></div>
                        <div class="event-right">
                            <div class="event-item-right__title bold">London Tech Week</div>
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
    name: "eventView",
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'Sự kiện nổi bật';
    },
    mounted() {
        AOS.init({
            duration: 1000,
        })
    },
    methods: {
        eventClick(event){
            switch(event) {
                case 'ces': {
                    window.open('https://www.ces.tech/', '_blank');
                    break;
                }
                case 'web-submit': {
                    window.open('https://qatar.websummit.com/', '_blank');
                    break;
                }
                case 'gg-next': {
                    window.open('https://cloud.withgoogle.com/next', '_blank');
                    break;
                }
                case 'gg-io': {
                    window.open('https://io.google/2023/', '_blank');
                    break;
                }
                case 'dublin-tech': {
                    window.open('https://dublintechsummit.tech/', '_blank');
                    break;
                }
                case 'london-tech': {
                    window.open('https://londontechweek.com/', '_blank');
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
    .web-submit-event{
        background-image: url("@/assets/image/web-submit-event.png") !important;
        background-position: 0 0 !important;
    }
    .gg-next{
        background-image: url("@/assets/image/gg-next.png") !important;
        background-position: 0 0 !important;
    }
    .gg-io{
        background-image: url("@/assets/image/gg-io.png") !important;
        background-position: 0 0 !important;
    }
    .dublin-tech{
        background-image: url("@/assets/image/dublin-tech.png") !important;
        background-position: -35px 0 !important;
    }
    .london-tech{
        background-image: url("@/assets/image/london-tech.png") !important;
        background-position: 0px 0px !important;
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
        background-image: url("@/assets/image/ces-tech.png");
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
        width: 100%;
        margin-top: 20px;
        background-size: contain;
        background-image: url("@/assets/image/event-banner.png");
        border-radius: 20px;
        background-repeat: no-repeat;
    }
</style>