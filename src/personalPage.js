/**
 * Created by alone on 2017/9/19.
 */
import onePart from './VueDir/HomePagePersonalC.vue';
import panelPart from './VueDir/PanelPart.vue';
new Vue({
    el: '.my-person-page',
    data: {
        imageSrc: ['./public/images/5.jpg', './public/images/2.jpg', './public/images/3.jpg',
            './public/images/4.jpg', './public/images/6.jpg', './public/images/7.jpg'],
        aosList: ["fade-down-right", 'zoom-out-down', 'fade-down-left', "fade-up-right", 'zoom-out-up', 'fade-up-left'],
        headerIdList:['headerOne','headerTwo','headerThree','headerFour','headerFive','headerSix'],
        toIdList:['collapseOne','collapseTwo','collapseThree','collapseFour','collapseFive','collapseSix'],
        tempHrefList:['#collapseOne','#collapseTwo','#collapseThree','#collapseFour','#collapseFive','#collapseSix'],
        personalList: [],
        parentContent: [],
    },
    components: {
        perPersonalPart: onePart,
        panelPart:panelPart
    },
    mounted: function () {
        var self = this;
        var imgSrc = this.imageSrc;
        var aosList = this.aosList;
        var offset = this.offsetList;
        var headerIdList = this.headerIdList;
        var toIdList = this.toIdList;
        var tempHrefList = this.tempHrefList;
        this.$http.jsonp("http://localhost:8888/result/person").then(response => {
            var code = response.body.code;
            var data = response.body.data;
            if (code == 200) {
                var personal = data.personal;
                for (var i = 0; i < personal.length; i++) {
                    personal[i].imageSrc = imgSrc[i];
                    personal[i].aosData = aosList[i];
                }
                self.personalList = personal;
                var otherContent = data.otherContent;
                for (var i = 0; i < personal.length; i++) {
                    otherContent[i].imageSrc = imgSrc[i];
                    otherContent[i].headerId = headerIdList[i];
                    otherContent[i].toId = toIdList[i];
                    otherContent[i].tempHref = tempHrefList[i];
                }
                self.parentContent = otherContent;
            }
        }, err => {
            throw err;
        });
    }
});