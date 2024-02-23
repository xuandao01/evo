<template>
    <div class="s-footer">
        <div class="e-container">
            <div class="main-content">
                <div class="main-content-item">
                    <div class="mitem-logo"></div>
                    <div class="mitem-content" style="margin-top: 20px">
                        <div class="m-top-50"></div>
                        <div class="f-14">Mọi vấn đề vui lòng liên hệ:</div>
                        <div class="top-15 f-14"><span class="bold f-14">Hotline:</span> 0847 432 432 </div>
                        <div class="top-15 f-14"><span class="bold f-14">Địa chỉ:</span> Tầng 3, Tòa Dolphin Plaza, 06 Nguyễn Hoàng, Phường Mỹ Đình, Quận Nam Từ Liêm, Hà Nội </div>
                        <div class="top-10 f-14"><span class="bold f-14">Email:</span> contact@evo.edu.vn</div>
                        <div class="f-media">
                            <div class="f-media-item" @click="redirectTo(index)" v-for="(item, index) in 4" :key="index"></div>
                        </div>
                    </div>
                </div>
                <div class="main-content-item">
                    <div class="semibold color-3"> Về chúng tôi</div>
                    <div class="footer-item top-30 f-14 clickable" @click="redirectTo('abouts')">Giới thiệu</div>
                    <div class="footer-item top-20 f-14">Giảng viên tiêu biểu</div>
                    <div class="footer-item top-20 f-14">Học viên tiêu biểu</div>
                    <div class="footer-item top-20 f-14">Tài liệu học tập</div>
                    <div class="footer-item top-20 f-14">Thông tin liên hệ</div>
                    <div class="footer-item top-20 f-14">Thông tin tuyển dụng</div>
                </div>
                <div class="main-content-item">
                    <div class="semibold color-3"> Chính sách & hỗ trợ</div>
                    <!-- <div class="footer-item top-30 f-14 clickable" @click="redirectTo('policies-regulations')">Chính sách & quy định</div> -->
                    <div class="footer-item top-20 f-14 clickable" @click="redirectTo('privacy-policy')">Chính sách bảo mật</div>
                    <div class="footer-item top-20 f-14 clickable" @click="redirectTo('terms-of-use')">Điều khoản sử dụng</div>
                </div>
                <div class="main-content-item">
                    <div class="semibold color-3"> Chương trình học tiêu biểu</div>
                    <div class="footer-item top-30 f-14 clickable" @click="redirectTo('scratch-course')">Lập trình Scratch</div>
                    <div class="footer-item top-30 f-14 clickable" @click="redirectTo('game-course')">Lập trình Game for Kid</div>
                    <div class="footer-item top-30 f-14 clickable" @click="redirectTo('app-course')">Lập trình App for Kid</div>
                    <div class="footer-item top-30 f-14 clickable" @click="redirectTo('web-course')">Lập trình Web for Kid</div>
                    <div class="footer-item top-20 f-14 clickable" @click="redirectTo('adult-course')">Lập trình cho sinh viên và người đi làm</div>
                </div>
            </div>
            <div class="f-copyright">© 2023 EVO Education. Đã Đăng Ký Bản Quyền</div>
        </div>
        <div class="quick-phone pop-effect" @click="redirectTo(3)"></div>
        <div class="quick-message pop-effect"  @click="redirectTo(1)"></div>
    </div>
</template>
<script>
export default {
    name: "EFooter",

    methods: {
        redirectTo(index){
            let url = '';
            switch(index){
                case 0: {
                    url = 'https://www.facebook.com/evoeduschool';
                    break;
                }
                case 1: {
                    url = 'https://www.facebook.com/messages/t/137034729494864';
                    break;
                }
                case 2: {
                    url = 'https://chat.zalo.me/';
                    break;
                }
                case 3: {
                    url = 'tel:0847432432';
                    break;
                }
                default: {
                    if (index == 'scratch-course' || index == 'game-course' || index == 'app-course' || index == 'web-course') {
                        this.$router.push('code-kid');
                    } else {
                        this.$router.push(index);
                    }
                    return;
                }
            }
            window.open(url);
        }
    },
}
</script>
<style scoped>
    @media(max-width: 480px){
        .mitem-logo{
            top: -150px !important;
        }
    }
    .pop-effect:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

    .pop-effect{
        transition-duration: 0.3s;
    }

    .quick-phone{
        height: 44px;
        width: 44px;
        position: fixed;
        bottom: 140px;
        right: 25px;
        background-size: contain !important;
        z-index: 100;
        background: url('@/assets/icons/phone-icon-blue.png');
    }

    .quick-message{
        height: 44px;
        bottom: 200px;
        right: 25px;
        position: fixed;
        background-size: contain !important;
        width: 44px;
        z-index: 100;
        background: url('@/assets/icons/message-icon-png-3.png');
    }
    .f-copyright{
        font-size: 12px;
        color: #111111;
    }

    .f-media{
        display: flex;
        margin-top: 20px;
        column-gap: 10px;
    }

    .f-media-item{
        height: 32px;
        width: 32px;
        background-size: cover !important;
        cursor: pointer;
        transition: 0.3s;
    }

    .f-media-item:hover{
        transform: scale(1.1);
    }

    .f-media-item:nth-child(1) {
        background: url('@/assets/icons/fb-icon.webp');
    }

    .f-media-item:nth-child(2) {
        background: url('@/assets/icons/mess-icon.png');
    }

    .f-media-item:nth-child(3) {
        background: url('@/assets/icons/zalo-icon.png');
    }

    .f-media-item:nth-child(4) {
        background: url('@/assets/icons/phone-icon.webp');
    }

    .footer-item {
        cursor: pointer;
        color: #555555;
    }

    .footer-item:hover{
        color: #111111;
        cursor: not-allowed;
    }

    .clickable:hover{
        cursor: pointer !important;
    }

    .s-footer{
        height: 500px;
        background-color: #bb7d0006;
        position: relative;
    }

    .main-content{
        height: 300px;
        display: flex;
        column-gap: 30px;
        justify-content: space-evenly;
        padding-top: 100px;
    }

    .main-content-item{
        height: 100%;
        width: 300px;
        position: relative;
    }

    .mitem-logo{
        height: 130px;
        background: url('@/assets/image/logo_v2.png') no-repeat;
        width: 75%;
        background-size: contain;
        position: absolute;
        top: -40px;
    }

    .m-top-50{
        margin-top: 70px;
    }
    
</style>