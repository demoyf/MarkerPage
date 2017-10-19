/**
 * Created by alone on 2017/10/16.
 */
import HeaderC from './../VueDir/HeaderC.vue'
import leftNavComponent from './../VueDir/LeftNavigation.vue';
import onePart from './../VueDir/HomePagePersonalC.vue';
import './../home/HomePage.css';
new Vue({
    el: '#resultPageApp',
    data: {
        otherList: [],
        leftNavData: [],
        otherImageSrc: ['./public/images/p5.jpeg', './public/images/p2.jpg', './public/images/p3.jpg',
            './public/images/p4.jpeg', './public/images/p6.jpg', './public/images/p7.jpg', './public/images/5.jpg', './public/images/2.jpg', './public/images/3.jpg',
            './public/images/4.jpg', './public/images/6.jpg', './public/images/7.jpg'],
        otherTitle: ""
    },
    components: {
        componentHeader: HeaderC,
        myLeftNav: leftNavComponent,
        perPersonalPart: onePart,
    },
    methods: {
        randomSrc: function () {
            return this.otherImageSrc[Math.floor(Math.random() * this.otherImageSrc.length)];
        }
    },
    mounted: function () {
        let self = this;
        var which = localStorage.getItem("which");
        var params = {};
        var temp = localStorage.getItem("list");
        var list = JSON.parse(temp);
        this.leftNavData = list.list;
        var url = "";
        this.otherTitle = localStorage.getItem("otherTitle");
        if (which == "child") {
            var parentId = localStorage.getItem("parentId");
            var childId = localStorage.getItem("childId");
            params = {
                parentId: parentId,
                childId: childId
            }
            url = "http://localhost:8888/result/child";
        } else if (which == "parent") {
            var id = localStorage.getItem("parentId");
            params = {
                parentId: id,
            };
            url = "http://localhost:8888/result/parent";
        } else {
            url = "http://localhost:8888/result/allPersonal";
            params = {};
        }
        this.$http.jsonp(url, {
            params: params
        }).then(response => {
            var code = response.body.code;
            var data = response.body.data;
            self.otherList = [];
            for (var i = 0; i < data.length; i++) {
                data[i].imageSrc = self.randomSrc();
            }
            self.otherList = data;
        }, err => {
            throw err;
        });
    }
});