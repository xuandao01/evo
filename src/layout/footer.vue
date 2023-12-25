<template>
    <div class="s-footer">
        <div class="e-container">
            <div class="main-content">
                <div class="main-content-item">
                    <div class="mitem-logo"></div>
                    <div class="mitem-content" style="margin-top: 20px">
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
                    <div class="footer-item top-30 f-14">Giới thiệu</div>
                    <div class="footer-item top-20 f-14">Giảng viên tiêu biểu</div>
                    <div class="footer-item top-20 f-14">Học viên tiêu biểu</div>
                    <div class="footer-item top-20 f-14">Tài liệu học tập</div>
                    <div class="footer-item top-20 f-14">Thông tin liên hệ</div>
                    <div class="footer-item top-20 f-14">Thông tin tuyển dụng</div>
                </div>
                <div class="main-content-item">
                    <div class="semibold color-3"> Chính sách & hỗ trợ</div>
                    <div class="footer-item top-30 f-14">Chính sách & quy định</div>
                    <div class="footer-item top-20 f-14">Chính sách bảo mật</div>
                    <div class="footer-item top-20 f-14">Điều khoản sử dụng</div>
                </div>
                <div class="main-content-item">
                    <div class="semibold color-3"> Chương trình học tiêu biểu</div>
                    <div class="footer-item top-30 f-14">Lập trình Scratch</div>
                    <div class="footer-item top-30 f-14">Lập trình Game for Kid</div>
                    <div class="footer-item top-30 f-14">Lập trình App for Kid</div>
                    <div class="footer-item top-30 f-14">Lập trình Web for Kid</div>
                    <div class="footer-item top-20 f-14">Lập trình cơ bản cho người lớn</div>
                    <div class="footer-item top-20 f-14">Học 1-1 theo chương trình bộ giáo dục</div>
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
                    return;
                }
            }
            window.open(url);
        }
    },
}
</script>
<style scoped>

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
        bottom: 190px;
        right: 20px;
        background-size: contain !important;
        z-index: 100;
        background: url('@/assets/icons/phone-icon-blue.png');
    }

    .quick-message{
        height: 44px;
        bottom: 250px;
        right: 20px;
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
    }

    .mitem-logo{
        height: 60px;
        background: url('@/assets/image/logo.png') no-repeat;
        width: 70%;
        background-size: contain;
    }
    
</style>