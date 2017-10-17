/**
 * Created by alone on 2017/10/16.
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
        var which = localStorage.getItem("which");
        var params = {};
        var temp = localStorage.getItem("list");
        var list = JSON.parse(temp);
        this.leftNavData = list.list;
        var url = "";
        if (which == "child") {
            var parentId = localStorage.getItem("parentId");
            var childId = localStorage.getItem("childId");
            console.log(parentId, childId);
            params = {
                parentId: parentId,
                childId: childId
            }
            url = "http://localhost:3000/result/child";
        } else {
            var id = localStorage.getItem("parentId");
            console.log(id);
            params = {
                parentId: id,
            }
            url = "http://localhost:3000/result/parent";
        }
        this.$http.jsonp(url, {
            params: params
        }).then(response => {
            var code = response.body.code;
            var data = response.body.data;
            if (code == 123) {
                self.childList = [];
                self.parentList =  data;
            } else if (code == 456) {
                self.childList = data.childData;
                self.parentList =  data.parentData;
            } else {
                throw ERROR("TypeError");
            }
        }, err => {
            throw err;
        });
    }
});