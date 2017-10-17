/**
 * Created by alone on 2017/9/18.
 */
new Vue({
    el: '.home-page-search-content',
    data: {
        isShow: false,
        searchText: "",
        closeOrSearchIcon: true,
    },
    methods: {
        changeSearchText: function () {
            if (this.closeOrSearchIcon) {
                this.searchText = "";
                this.closeOrSearchIcon = false;
            }
        },
        submitSearchText: function () {
            console.log("xyf", this.searchText);
        }
    },
    computed: {
        searchInput: function () {
            if (this.searchText == "") {
                this.closeOrSearchIcon = false;
            } else {
                this.closeOrSearchIcon = true;
            }
        }
    },
    mounted: function () {
        var self = this;
        setTimeout(function () {
            self.isShow = true;
        }, 300);
    }
});