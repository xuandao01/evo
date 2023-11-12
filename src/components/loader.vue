<template>
    <div class="e-loader">
        <span class="loader"></span>
    </div>
</template>
<script>
export default {
    name: "ELoader"
}
</script>
<style scoped>
    .e-loader{
        z-index: 99;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.55);
    }    
    .loader {
        top: calc((100% - 48px)/2);
        left: calc((100% - 48px)/2);
        width: 48px;
        height: 48px;
        border: 3px solid #FFF;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        }
        .loader::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid;
        border-color: rgb(35, 116, 255) transparent;
        }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>