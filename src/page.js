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
        },
        scrollToNextPage:function () {
            var y = 0;
            var scrollHeight = this.$el.scrollHeight+35;
            var temp = window.requestAnimationFrame(scroll);
            function scroll() {
                if (y>=scrollHeight) {
                    window.cancelAnimationFrame(temp);
                    return false;
                }else {
                    y += 15;
                    window.scrollTo(0, y);
                    temp = window.requestAnimationFrame(scroll);
                }
            }
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
        this.scrollHeight = this.$el.scrollHeight;
    }
});