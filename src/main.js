import HeaderC from './VueDir/HeaderC.vue'
import leftNavComponent from './VueDir/LeftNavigation.vue';
import './home/HomePage.css';
import './home/VueTransition.css';
//  .... 忘了很重要的一个点！！！  在这里指定名字是驼峰式，但是在html中使用的时候，不能是驼峰式啊。。连接处要变成  -
new Vue({
    el: '#HeaderApp',
    data: {
        leftNavData: [],
        url: "http://106.14.13.178:8888/"
    },
    components: {
        componentHeader: HeaderC,
        myLeftNav: leftNavComponent
    },
    mounted: function () {
        let self = this;
        this.$http.jsonp(self.url).then(response => {
            if (response.body.code == 200) {
                var temp = response.body.data;
                self.leftNavData = temp;
                var result = {
                    list: temp
                };
                localStorage.setItem("list", JSON.stringify(result));
            } else {
                throw new Error("Sync error");
            }
        }, err => {
            console.log("err", err);
        });
    }
});
document.getElementsByClassName("home-page-search-content")[0].style.backgroundImage = "url('./dist/hero.png')";