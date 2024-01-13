<template>
    <div class="ai-quest">
        <div class="ai-container">
            <div class="ai-history">
                <div class="history-bar">
                    <div class="history-action">
                        <div class="history-item">
                            <div class="add-icon"></div>
                            <button @click="switchToNewConversation" class="semibold">Hội thoại mới</button>
                        </div>
                        <div class="history-item" v-if="historyQuestions.length > 0">
                            <div class="delete-icon"></div>
                            <button @click="deleteHistoryConversation" class="semibold">Xóa lịch sử trò chuyện</button>
                        </div>
                    </div>
                    <div class="recent-text" v-if="historyQuestions.length > 0">Hôm nay</div>
                    <div class="history-conversation">
                        <div class="history-conversation-item pop-1" v-for="(item, index) in historyQuestions" :key="index">
                            {{ item }}
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="user-avt semibold">G</div>
                        <div class="user-name">Chưa đăng nhập</div>
                    </div>
                </div>
            </div>
            <div class="ai-main-conversation">
                <div class="ai-title  ">
                    <div class="bold">
                        EVO AI <span class="semibold" style="font-size: 12px; color: #00afef;">beta</span>
                    </div>
                </div>
                <div class="main-conversation">
                    <div :class="{'respone-area': displaySuggestion, 'respone-area-maximize': !displaySuggestion}">
                        <div class="respone-area-minimize">
                            <div class="response-first-view" v-if="displaySuggestion">
                                <div class="ai-icon pop-2"></div>
                                <div class="response-first-text pop-1 f-22 bold">Tôi có thể giúp gì cho bạn ?</div>
                            </div>
                            <div class="response-main-view" v-else>
                                <div class="response-messgae-item" v-for="(item, index) in responseItems" :key="index">
                                    <div class="response-request">
                                        <div class="account-request">
                                            <div class="account-logo">G</div>
                                            <div class="account-name bold">You</div>
                                        </div>
                                        <div class="request-message">{{ item.message }}</div>
                                    </div>
                                    <div class="response-ai">
                                        <div class="ai-response">
                                            <div class="ai-logo"></div>
                                            <div class="ai-name bold">EVO AI</div>
                                        </div>
                                        <div class="response-message" :id="item.id">{{ item.response }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="{'input-area': displaySuggestion, 'input-area-without-suggestion': !displaySuggestion}">
                        <div class="input-area-minimize">
                            <div class="suggestion-area" v-if="displaySuggestion">
                                <div class="suggestion-item pop semibold" @click="handleClickSuggestion(item)" v-for="(item, index) in suggestionItem" :key="index">{{item}}</div>
                            </div>
                            <div class="input-value">
                                <input placeholder="Message here . . ." v-model="currentQuest">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
export default{
    name: "aiQuestion",
    mounted() {
        // this.sendRequest();
        window.addEventListener('keydown', this.handleOnKeydown)
    },
    methods: {
        handleClickSuggestion(item){
            this.sendMessage(item);
        },
        deleteHistoryConversation() {
            this.historyQuestions = [];
        },
        switchToNewConversation() {
            this.responseItems = [];
            this.displaySuggestion = true;
        },
        handleOnKeydown(e) {
            if (e && e.keyCode) {
                switch(e.keyCode){
                    case 13: {
                        if (this.currentQuest) {
                            this.sendMessage(this.currentQuest);
                        }
                        break;
                    }
                }
            }
            console.log(e);
        },
        async sendMessage(message){
            if (message) {
                let response = await this.sendRequest(message, true);
                if (response) {
                    this.handleAddMainConversation(message, response);
                }
            }
        },
        handleAddMainConversation(message, response){
            if (this.responseItems.length == 0) {
                this.displaySuggestion = false;
            }
            let cursurs = document.querySelectorAll('.Typewriter__cursor');
            if (cursurs && cursurs.length > 0) {
                cursurs.forEach(el => el.innerHTML = '');
            }
            this.responseItems.push({
                message: message,
                response: ' ',
                id: 'suggestionItemId' + this.responseItems.length
            })
            this.currentQuest = '';
            this.i = 0;
            try{
                setTimeout(() => {
                    document.querySelector(`#suggestionItemId${this.responseItems.length - 1}`).scrollIntoView({ behavior: "smooth", block: "end"})
                    new Typewriter(`#suggestionItemId${this.responseItems.length - 1}`, {
                        strings: response,
                        autoStart: true,
                        delay: 30,
                        cursor: '✦',
                    });
                }, 150);
            } catch (e) {
                console.log(e);
            }
            this.historyQuestions.push(message);
        },
        async sendRequest(message, isTest){
            if (!isTest) {
                const response = await fetch('https://api.google.com/bard/v1/generateText', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer API_TOKEN', // Obtain a valid API token
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: message,
                }),
                });
    
                const text = await response.json();
                return text;
            }
            else {
                return 'Hệ thống đang trong quá trình nâng cấp cho phiên bản mới. Bạn vui lòng thử lại sau nhé !';
            }
        },

        async request(data){
            try{
                const headers = {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
                const options = {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                }
                let res = await fetch(this.baseOpenAIURL, options);
                let json = await res.json();
                console.log(json);
            } catch (ex) {
                console.log(ex);
            }
        }
    },
    data() {
        return {
            token: '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',
            baseOpenAIURL: 'https://api.openai.com/v1/completions',
            currentQuest: '',
            suggestionItem: ['Lập trình là gì ?', 'Cách để học tốt lập trình', 'Các ngôn ngữ lập trình phổ biến', 'Trẻ em học lập trình'],
            displaySuggestion: true,
            responseItems: [],
            historyQuestions: [],
            i: 0,
            speed:500,
        }
    }
}
</script>

<style scoped>
    .user-info .user-name{
        color: #fff;
    }
    .user-info .user-avt{
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background-color: rgb(25, 128, 0);
        color: #fff;
        line-height: 35px;
        text-align: center;
    }
    .user-info{
        height: 50px;
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        column-gap: 12px;
        padding: 0 20px;
    }
    .response-main-view{
        height: 100%;
        overflow: auto;
    }
    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
    .recent-text{
        padding-left: 22px;
        position: relative;
        top: 8px;
        color: #aaaaaa;
        font-size: 12px;
    }
    .history-conversation-item{
        height: 50px;
        border-radius: 12px;
        color: #fff;
        padding-left: 10px;
        line-height: 50px;
    }

    .history-conversation-item:hover{
        background-color: #232323;
        cursor: pointer;
        align-items: center;
    }
    .history-conversation{
        padding: 12px;
        display: flex;
        flex-direction: column;
        row-gap: 2px;
    }
    ::v-deep .Typewriter__cursor{
        font-size: 20px;
    }
    
    .request-message, .response-message{
        padding-left: 42px;
        padding-right: 8px;
    }
    .response-request, .response-messgae-item{
        padding-bottom: 40px;
    }
    .account-request, .ai-response{
        display: flex;
        align-items: center;
        column-gap: 12px;
    }
    .account-logo, .ai-logo{
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }
    .account-logo{
        line-height: 30px;
        text-align: center;
        background-color: rgb(25, 128, 0);
        color: #fff;
    }
    .ai-logo{
        background: url("@/assets/icons/icons8-ai-40.png") no-repeat;
        background-size: 25px 25px;
        background-position: 3px 0.5px;
        border: solid #00afef50 1px;
    }
    .history-item{
        display: flex;
        column-gap: 8px;
        border-radius: 12px;
        height: 35px;
        padding: 8px;
        cursor: pointer;
        align-items: center;
    }

    .add-icon{
        height: 30px;
        width: 30px;
        background: url("@/assets/icons/icons8-add-60.png");
        background-size: contain;
    }
    .delete-icon{
        height: 30px;
        width: 30px;
        background: url("@/assets/icons/icons8-delete-60.png");
        background-size: contain;
    }
    .history-action{
        height: 90px;
        padding: 12px;
    }
    .history-item:hover{
        background-color: #232323;
        cursor: pointer;
    }
    .history-action button{
        height: 30px;
        background-color: transparent;
        border: unset;
        outline: unset;
        color: #fff;
        align-items: center;
    }
    .pop-1 {
        animation: pulse 0.5s linear 1;
    }
    .pop-2 {
        animation: pulse2 0.5s linear 1;
    }
    .ai-icon{
        margin-top: 20px;
        height: 60px;
        width: 60px;
        border: solid #00afef50 1px;
        border-radius: 50%;
        background: url("@/assets/icons/icons8-ai-40.png") no-repeat;
        background-size: 40px 40px;
        background-position: 10px 7px;
    }
    .response-first-view{
        height: 150px;
        width: 400px;
        position: absolute;
        top: 150px;
        left: 150px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        align-items: center;
    }

    .suggestion-area .pop:nth-child(1) {
        animation: pulse 0.5s linear 1;
    }

    .suggestion-area .pop:nth-child(2) {
        animation: pulse2 0.5s linear 1;
    }

    .suggestion-area .pop:nth-child(3) {
        animation: pulse 0.3s linear 1;
    }

    .suggestion-area .pop:nth-child(4) {
        animation: pulse2 0.3s linear 1;
    }

    @keyframes pulse{
        25%  {transform: scale(0.9);}
        75%  {transform: scale(1.1);}
    }
    @keyframes pulse2{
        35%  {transform: scale(0.9);}
        65%  {transform: scale(1.1);}
    }
    .ai-title > div {
        position: absolute;
        left: 20px;
        line-height: 40px;
    }

    .ai-title{
        height: 40px;
        position: relative;
    }

    .input-value > input {
        width: 100%;
        height: 48px;
        margin-top: 18px;
        border: solid 1px #dddddd;
        outline: unset;
        border-radius: 10px;
        color: #111;
        padding-left: 18px;
    }
    .input-value{
        width: 630px;
        position: absolute;
        bottom: 20px;
    }
    .suggestion-item:hover{
        cursor: pointer;
        background-color: #f7f7f7;
    }
    .suggestion-item{
        padding: 20px;
        border: solid 1px #dddddd;
        border-radius: 10px;
        width: 280px;
        color: #111;
    }
    .input-area-minimize, .respone-area-minimize{
        width: 100%;
        max-width: 672px;
        margin: 0 auto;
    }

    .respone-area-minimize{
        height: 100%;
        position: relative;
    }

    .suggestion-area{
        display: flex;
        column-gap: 8px;
        flex-wrap: wrap;
        padding-top: 12px;
        row-gap: 8px;
    }
    .ai-quest{
        height: 100vh;
        width: 100%;
        background-color: #fff;
        position: relative;
        top: 64px;
    }
    .ai-history{
        height: calc(100vh - 64px);
        width: 260px;
        float: left;
        background-color: #111;
        position: relative;
    }
    .ai-main-conversation{
        left: 260px;
        width: calc(100% - 260px);
    }
    .ai-main-conversation, .main-conversation{
        position: relative;
        height: calc(100vh - 104px);
    }

    .respone-area{
        height: calc(100% - 250px);
    }

    .respone-area-maximize{
        height: calc(100% - 100px);
    }

    .input-area{
        height: 250px;
        position: relative;
    }

    .input-area-without-suggestion{
        height: 100px;
        position: relative;
    }
</style>