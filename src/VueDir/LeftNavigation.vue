<template>
    <div id="left-nav-component" @click="changeShouldHide">
        <transition name="hide-navigation">
            <div class="my-navigation" v-show="shouldShow">
                <a class="text-left close-navigation" @click="hideLeftByA"><span
                        class="glyphicon glyphicon-remove"></span></a>
                <ul class="list-unstyled has-border-top one-part-nav">
                    <li class="hover-default"><span class="glyphicon glyphicon-user"></span>Create Free Accounts</li>
                    <li class="hover-default"><span class="glyphicon glyphicon-log-in"></span>Login</li>
                </ul>
                <ul class="list-unstyled has-border-top one-part-nav">
                    <li class="hover-default" @click="toPersonalPage()"><span class="glyphicon glyphicon-fire"></span>IndividualWorks</li>
                </ul>
                <ul class="list-unstyled has-border-top one-part-nav">
                    <div v-for="(temp,index) in navData">
                        <li :class="randomColor()" :data-role="temp.id"
                            v-on:click="changeChildList($event,temp.hasChild,index)"><i
                                class="circle-icon"></i>{{temp.title}}
                            <span v-if="temp.hasChild" class="glyphicon glyphicon-menu-down"></span>
                        </li>
                        <ul v-if="temp.hasChild" style="display: none;padding: 0;">
                            <li v-for="child in temp.childList" class="child-list"
                                @click="getChildPageById(temp.id,child.id)">
                                {{child.title}}
                            </li>
                        </ul>
                    </div>
                </ul>
                <ul class="list-unstyled has-border-top one-part-nav">
                    <li class="hover-default">
                        <span class="glyphicon glyphicon-comment"></span>
                        Community
                    </li>
                    <li class="hover-default">
                        <span class="glyphicon glyphicon-envelope"></span>
                        Newsletters
                    </li>
                </ul>
                <ul class="list-unstyled has-border-top one-part-nav">
                    <li class="hover-default">
                        Advertise
                    </li>
                    <li class="hover-default">
                        Contract Us
                    </li>
                    <li class="hover-default">
                        Support
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<!--两个不关联组件之间的通信，可以用bus，即创建一个返回一个空Vue对象的文件，在两个单文件组件中各自引用这个对象，在其中一个组件的
指定事件中使用bus.$emit触发事件，而另外一个负责接收此事件触发的则在生命周期mounted中用bus.$on监听事件。注意！如果要修改data中的值
，必须先保留一个self对象指向组件vue，否则在on事件中获取的this是bus！！！！-->
<script>
    import bus from './../bus';
    export default {
        name: 'left-nav-component',
        props: ['navData'],
        data: function () {
            return {
                shouldShow: false,
                colorList: ["hover-orange", "hover-yellow", "hover-purple",
                    "hover-green", "hover-blue", "hover-blue-muted", "hover-blue"],
                hideList: [],
            };
        },
        methods: {
            changeShouldHide: function (event) {
                if (event.clientX > 260) {
                    this.shouldShow = false;
                    setTimeout(function () {
                        document.getElementById("left-nav-component").style.display = "none";
                    }, 600);
                }
            },
            hideLeftByA: function () {
                this.shouldShow = false;
                setTimeout(function () {
                    document.getElementById("left-nav-component").style.display = "none";
                }, 600);
            },
            randomColor: function () {
                var index = Math.floor(Math.random() * 7);
                var length = this.colorList.length;
                if (index > length - 1) {
                    index = length - 1;
                }
                return this.colorList[index];
            },
            changeChildList: function (event, isShow, index) {
                var current = event.currentTarget;
                if (!isShow) {
                    var id = current.getAttribute("data-role");
                    localStorage.setItem("which", "parent");
                    localStorage.setItem("parentId", id);
                    window.location.href = "Other.html";
                    return false;
                }
                var next = current.nextElementSibling;
                var childSpan = current.getElementsByTagName("span")[0];
                if (this.hideList[index]) {
                    next.style.display = "none";
                    childSpan.className = "glyphicon glyphicon-menu-down";
                } else {
                    next.style.display = "block";
                    childSpan.className = "glyphicon glyphicon-menu-up";
                }
                this.hideList[index] = !this.hideList[index];
            },
            getChildPageById: function (parentId, id) {
                localStorage.setItem("which", "child");
                localStorage.setItem("parentId", parentId);
                localStorage.setItem("childId", id);
                window.location.href = "Other.html";
            },
            toPersonalPage:function () {
                localStorage.setItem("which", "personal");
                window.location.href = "Other.html";
            }
        },
        mounted: function () {
            let self = this;
            document.getElementById("left-nav-component").style.display = "none";
            bus.$on('changeshow', function () {
                document.getElementById("left-nav-component").style.display = "block";
                self.shouldShow = true;
            });
        }
    };
</script>
<style>
    #left-nav-component {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1040;
        left: 0;
        top: 0;
    }

    #left-nav-component .my-navigation {
        width: 17%;
        height: 100%;
        min-width: 250px;
        background-color: white;
        display: flex;
        flex-direction: column;
        overflow: scroll;
        position: relative;
    }

    #left-nav-component .my-navigation .close-navigation {
        margin: 15px;
        font-size: 20px;
        font-weight: 100;
        color: rgba(0, 0, 0, 0.6);
    }

    #left-nav-component .my-navigation .close-navigation:hover {
        cursor: pointer;
        color: rgba(0, 0, 0, 0.6);
    }

    #left-nav-component .my-navigation .has-border-top {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        margin-left: 0;
        margin-right: 0;
        padding-top: 10px;
    }

    #left-nav-component .my-navigation .one-part-nav {
        font-family: cursive, "FangSong";
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
    }

    #left-nav-component .my-navigation .one-part-nav li {
        padding-top: 10px;
        padding-left: 15px;
        padding-bottom: 10px;
    }

    #left-nav-component .my-navigation .one-part-nav li > span {
        margin-right: 10px;
        font-size: 13px;
    }

    #left-nav-component .my-navigation .one-part-nav div > li > i.circle-icon::before {
        display: block;
        content: ' ';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        color: rebeccapurple;
        background-color: rebeccapurple;
        float: left;
        margin-top: 4px;
        margin-right: 10px;
    }

    #left-nav-component .my-navigation .one-part-nav div > li > span {
        margin-top: 4px;
        float: right;
        margin-right: 10px;
    }

    #left-nav-component .my-navigation .one-part-nav div > li > span::after {
        clear: both;
    }

    #left-nav-component .my-navigation .one-part-nav div > li > i.circle-icon::after {
        clear: both;
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-blue > i.circle-icon::before {
        background-color: #1C94C6;
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-blue-muted > i.circle-icon::before {
        background-color: #248aaf;
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-green > i.circle-icon::before {
        background-color: #24b3b5;
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-purple > i.circle-icon::before {
        background-color: #669;
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-yellow > i.circle-icon::before {
        background-color: #f6b33c;
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-orange > i.circle-icon::before {
        background-color: #ef8d24;
    }

    #left-nav-component .my-navigation .one-part-nav .hover-default:hover {
        color: rgba(0, 0, 0, 0.7);
        background-color: #3ec9cb66;
        cursor: pointer;
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-orange:hover {
        background-color: #ef8d24aa;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-yellow:hover {
        background-color: #f6b33caa;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-green:hover {
        background-color: #24b3b5aa;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-purple:hover {
        background-color: #6f6f9faa;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-blue:hover {
        background-color: #1C94C6aa;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
    }

    #left-nav-component .my-navigation .one-part-nav div > li.hover-blue-muted:hover {
        background-color: #248aafaa;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
    }

    #left-nav-component .my-navigation .one-part-nav div ul > li.child-list {
        list-style: none;
        padding-left: 30px;
        font-size: 13px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #left-nav-component .my-navigation .one-part-nav div ul > li.child-list:hover {
        cursor: pointer;
        background: rgba(193, 33, 122, 0.4);
    }

    #left-nav-component .my-navigation .one-part-nav div ul > li.child-list:before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        color: rgb(193, 33, 122);
        background-color: rgb(193, 33, 122);
        margin-right: 8px;
        margin-left: 5px;
    }

    .hide-navigation-enter, .hide-navigation-leave-to {
        position: relative;
        left: -300px;
    }

    .hide-navigation-enter-active, .hide-navigation-leave-active {
        -webkit-transition: all 0.7s;
        -moz-transition: all 0.7s;
        -ms-transition: all 0.7s;
        -o-transition: all 0.7s;
        transition: all 0.7s;
    }

    .hide-navigation-enter-to, .hide-navigation-leave {
        left: 0px;
        position: relative;
    }
</style>