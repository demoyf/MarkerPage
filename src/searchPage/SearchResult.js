/**
 * Created by alone on 2017/10/18.
 */
import HeaderC from './../VueDir/HeaderC.vue'
import leftNavComponent from './../VueDir/LeftNavigation.vue';
import onePart from './../VueDir/HomePagePersonalC.vue';
new Vue({
    el: '#resultPageApp',
    data: {
        otherList: [],
        personalList: [],
        leftNavData: [],
        otherImageSrc: ['./public/images/p5.jpeg', './public/images/p2.jpg', './public/images/p3.jpg',
            './public/images/p4.jpeg', './public/images/p6.jpg', './public/images/p7.jpg', './public/images/5.jpg', './public/images/2.jpg', './public/images/3.jpg',
            './public/images/4.jpg', './public/images/6.jpg', './public/images/7.jpg'],
        hasPersonal: false,
        hasOther: false
    },
    components: {
        componentHeader: HeaderC,
        myLeftNav: leftNavComponent,
        perPersonalPart: onePart
    },
    methods: {
        randomSrc: function () {
            return this.otherImageSrc[Math.floor(Math.random() * this.otherImageSrc.length)];
        }
    },
    mounted: function () {
        let self = this;
        var searchText = localStorage.getItem("searchText");
        var params = {searchText: searchText};
        var temp = localStorage.getItem("list");
        var list = JSON.parse(temp);
        this.leftNavData = list.list;
        var url = "http://106.14.13.178:8888/result/search";
        this.$http.jsonp(url, {
            params: params
        }).then(response => {
            var data = response.body.data;
            var person = data.personContent;
            var other = data.otherContent;
            for (var i = 0; i < person.length; i++) {
                person[i].imageSrc = self.randomSrc();
            }
            for (var i = 0; i < other.length; i++) {
                other[i].imageSrc = self.randomSrc();
            }
            if (person && person.length > 0) {
                self.hasPersonal = true;
            }
            if (other && other.length > 0) {
                self.hasOther = true;
            }
            self.otherList = other;
            self.personalList = person;
        }, err => {
            throw err;
        });
    }
});