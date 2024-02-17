<template>
    <div class="abouts">
        <div class="sec-1">
            <div class="header-space"></div>
            <div class="e-container">
                <div class="sec-1-banner" data-aos="fade-left">

                </div>
            </div>
        </div>
        <div class="sec-2">
            <div class="e-container">
                <div class="title bold" data-aos="fade-right">Câu chuyện</div>
                <div class="t-line" data-aos="fade-right"></div>
                <div class="sec-2-main">
                    <div class="sec-2-main__left" data-aos="fade-right">Năm 2019, giữa lòng phố Nguyễn Hoàng, một trung tâm dạy lập trình mang tên EVO mở cửa, mang sứ mệnh khơi dậy niềm đam mê công nghệ trong lòng trẻ em. EVO không chỉ dạy lập trình, mà còn là nơi nuôi dưỡng tư duy sáng tạo và giải quyết vấn đề cho các em nhỏ. Tại đây, từng bàn học như một thế giới thu nhỏ, nơi các em được thử nghiệm, lập trình những robot, trò chơi và ứng dụng của riêng mình. Mỗi buổi học, niềm hứng khởi trong mắt trẻ thể hiện sự học hỏi không ngừng. EVO không chỉ dạy kỹ năng, mà còn truyền cảm hứng, mở ra một tương lai công nghệ cho thế hệ trẻ.</div>
                    <div class="sec-2-main__right" data-aos="fade-left"></div>
                </div>
            </div>
        </div>

        <div class="sec-3">
            <div class="e-container">
                <div class="title bold" data-aos="fade-left">Sứ mệnh</div>
                <div class="t-line line-right" data-aos="fade-left"></div>
                <div class="sec-3-main">
                    <div class="sec-3-main__right" data-aos="fade-right"></div>
                    <div class="sec-3-main__left" data-aos="fade-left">EVO mang sứ mệnh trang bị kỹ năng lập trình cho trẻ em, đồng thời phát triển tư duy sáng tạo và giải quyết vấn đề</div>
                </div>
            </div>
        </div>

        <div class="sec-2">
            <div class="e-container">
                <div class="title bold" data-aos="fade-right">Tầm nhìn</div>
                <div class="t-line" data-aos="fade-right"></div>
                <div class="sec-2-main">
                    <div class="sec-2-main__left" data-aos="fade-right">Tầm nhìn của EVO là tạo dựng nền tảng công nghệ vững chắc cho thế hệ tương lai, giúp họ tự tin và linh hoạt trong môi trường công nghệ biến đổi nhanh chóng. EVO không chỉ dạy lập trình, mà còn là nơi nuôi dưỡng niềm đam mê học hỏi, khám phá, và sự tự do sáng tạo, mở ra cánh cửa tương lai rộng lớn cho các em nhỏ.</div>
                    <div class="sec-4-main__right" data-aos="fade-left"></div>
                </div>
            </div>
        </div>

        <div class="sec-5">
            <div class="e-container">
                <div class="title bold" data-aos="zoom-in">Giá trị
                    <div class="center-line" data-aos="zoom-out"></div>
                </div>
                <div class="sec-5-main">
                    <div class="sec-5-item" data-aos="fade-right">
                        <div class="icon"></div>
                        <div class="sub-title bold">Đổi mới</div>
                        <div class="content">Đổi mới không chỉ trong cách thức giảng dạy lập trình, mà còn trong việc tạo dựng môi trường học tập linh hoạt, khuyến khích trẻ em tư duy sáng tạo và tự do thể hiện ý tưởng</div>
                    </div>
                    <div class="sec-5-item" data-aos="zoom-in">
                        <div class="icon"></div>
                        <div class="sub-title bold">Hợp tác</div>
                        <div class="content">Hợp tác là chìa khóa trong việc phát triển kỹ năng xã hội, giáo dục trẻ làm việc nhóm, giúp họ học cách tương tác, chia sẻ và cùng nhau giải quyết vấn đề</div>
                    </div>
                    <div class="sec-5-item" data-aos="fade-left">
                        <div class="icon"></div>
                        <div class="sub-title bold">Trách nhiệm</div>
                        <div class="content">Trách nhiệm được nhấn mạnh thông qua việc dạy trẻ hiểu và áp dụng công nghệ một cách có ý thức, hướng tới việc sử dụng lập trình để giải quyết các vấn đề thực tế và đóng góp cho xã hội</div>
                    </div>
                </div>
                <div class="sec-5-end" data-aos="fade-right">
                    EVO không chỉ là một trung tâm dạy lập trình, mà còn là một cộng đồng nơi trẻ em có thể phát triển toàn diện, học hỏi từ lỗi lầm và mạnh dạn thử thách bản thân. Sự tập trung vào việc phát triển kỹ năng sống cùng với kỹ năng kỹ thuật, chuẩn bị cho các em một nền tảng vững chắc để tiếp cận và đóng góp vào thế giới ngày càng kỹ thuật số hóa. EVO cam kết tạo ra một thế hệ trẻ thông thái, sáng tạo và có trách nhiệm, đặt nền móng cho tương lai công nghệ phát triển bền vững.
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default{
    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        AOS.init({
            duration: 1000,
        })
    },
}
</script>

<style scoped>
    .sec-5-end{
        width: 700px;
        margin: 0 auto;
        padding: 20px;
        margin-top: 50px;
        border: dashed 2px #00afef;
        border-radius: 20px;
    }
    .sub-title{
        font-size: 26px;
        text-align: center;
    }
    .sec-5-item .icon{
        height: 80px;
        width: 80px;
        border-radius: 50%;
        top: -40px;
        left: -20px;
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-image: url("@/assets/image/icon-change.png");
        background-color: #fff;
        background-size: cover;
    }
    .sec-5-item:nth-child(3) .icon{
        background-image: url("@/assets/image/responsibility.jpg");
    }
    .sec-5-item:nth-child(2) .icon{
        background-image: url("@/assets/image/support.jpg");
    }
    .sec-5-item .content{
        margin-top: 10px;
    }
    .sec-5-item{
        height: 180px;
        position: relative;
        width: 340px;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 20px;
    }
    .sec-5-main{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .sec-5{
        height: 600px;
    }

    .sec-5 .title{
        text-align: center;
    }
    .center-line{
        height: 3px;
        width: 50px;
        background-color: #00afef;
        margin: 0 auto;
    }
    .e-container{
        position: relative;
    }
    .sec-2-main, .sec-3-main{
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        align-items: center;
    }
    .sec-2-main__left{
        width: 45%;
        line-height: 30px;
    }
    .sec-3-main__right{
        width: 48%;
        background-size: cover;
        background-image: url("@/assets/image/Mission.jpg");
        background-position: 0 -50px;
        border-radius: 20px;
        height: 300px;
    }
    .sec-3-main__left{
        width: 45%;
        line-height: 30px;
    }
    .sec-2-main__right{
        width: 48%;
        height: 300px;
        background-size: cover;
        background-image: url("@/assets/image/about-sec2.png");
        border-radius: 20px;
    }
    .sec-4-main__right{
        width: 48%;
        height: 300px;
        background-size: cover;
        background-image: url("@/assets/image/Vision.jpg");
        border-radius: 20px;
    }
    .sec-2{
        height: 500px;
    }
    .sec-3{
        height: 500px;
    }
    .sec-3 .title{
        text-align: right;
    }
    .line-right{
        position: absolute;
        right: 0;
    }
    .title{
        font-size: 32px;
    }
    .t-line{
        height: 3px;
        width: 50px;
        background-color: #00afef;
    }
    .sec-1-banner{
        height: 600px;
        width: 100%;
        background: url("@/assets/image/about-banner.png");
        background-size: cover;
        border-radius: 20px;
    }
    .header-space{
        height: 94px;
    }
    .sec-1{
        height: 750px;
        width: 100%;
    }
</style>