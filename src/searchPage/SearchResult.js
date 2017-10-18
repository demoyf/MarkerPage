/**
 * Created by alone on 2017/10/18.
 */
import HeaderC from './../VueDir/HeaderC.vue'
import leftNavComponent from './../VueDir/LeftNavigation.vue';
new Vue({
    el: '#resultPageApp',
    data: {
        childList: [],
        parentList: [],
        leftNavData: []
    },
    components: {
        componentHeader: HeaderC,
        myLeftNav: leftNavComponent
    },
    mounted: function () {
        let self = this;
        var searchText = localStorage.getItem("searchText");
        var params = {searchText:searchText};
        var temp = localStorage.getItem("list");
        var list = JSON.parse(temp);
        this.leftNavData = list.list;
        var url = "http://localhost:8888/result/search";
        this.$http.jsonp(url, {
            params: params
        }).then(response => {
            console.log(response.body);
        }, err => {
            throw err;
        });
    }
});