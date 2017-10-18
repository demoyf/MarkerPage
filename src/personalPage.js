/**
 * Created by alone on 2017/9/19.
 */
import onePart from './VueDir/HomePagePersonalC.vue';
new Vue({
    el: '.my-person-page',
    data: {
        imageSrc: ['./public/images/5.jpg','./public/images/2.jpg','./public/images/3.jpg',
            './public/images/4.jpg','./public/images/6.jpg','./public/images/7.jpg'],
        aosList:["fade-down-right",'zoom-out-down','fade-down-left',"fade-up-right",'zoom-out-up','fade-up-left'],
        personalList:[],
        parentContent:[],
    },
    components: {
        perPersonalPart: onePart
    },
    mounted:function () {
        var self = this;
        var imgSrc = this.imageSrc;
        var aosList = this.aosList;
        var offset = this.offsetList;
        this.$http.jsonp("http://localhost:8888/result/person").then(response=>{
            var code = response.body.code;
            var data = response.body.data;
            if (code == 200) {
                var personal = data.personal;
                for (var i = 0;i<personal.length;i++) {
                    personal[i].imageSrc = imgSrc[i];
                    personal[i].aosData = aosList[i];
                }
                self.personalList = personal;
                self.parentContent = personal.otherContent;
            }
        },err=>{
            throw err;
        });
    }
});