<template>
    <!--temp-->
    <header class="navbar navbar-fixed-top navbar-inverse per-header" id="componentHeader">
        <div class="container per-container">
            <div class="navbar-header" id="per-header">
                <button class="btn btn-lg" type="button" style="background-color: transparent" @click="askShowNav">
                    <span class="glyphicon glyphicon-menu-hamburger" style="color:white;"></span>
                </button>
                <a href="./">
                    <svg viewBox="0 0 50 50" class="per-svg-icon" >
                        <g fill-rule="evenodd">
                            <path d="M 11 21 L 25 10 L 38 20 L 34 24 L 25 17 L 15 25"></path>
                            <path d="M 21 28 L 25 24 L 32 30 L 41 23 L 44 27 L 33 37"></path>
                        </g>
                    </svg>
                </a>
                <a class="navbar-brand hidden-sm hidden-xs per-nav-brand" href="/MarkerPage" style="color:white">Home</a>
                <button type="button" class="visible-xs per-header-user-button btn" @click="toPersonal()">
                    <span class="glyphicon glyphicon-user" ></span>
                </button>
            </div>
            <nav class="per-header-nav pull-right hidden-xs">
                <ul class="nav navbar-nav">
                    <li class="hidden-sm hidden-xs">
                        <a @click="toPersonal()" class="toPersonal">
                            <span class="glyphicon glyphicon-leaf"></span>Personal</a>
                    </li>
                    <button type="button" class="btn hidden-xs per-header-user-button"><span
                            class="glyphicon glyphicon-user"></span>Login
                    </button>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
    import bus from './../bus';
    export default {
        name: 'componentHeader',
        data: function () {
            return {
                msg: 123
            };
        },
        methods: {
            askShowNav: function () {
                bus.$emit('changeshow');
            },
            toPersonal: function () {
                localStorage.setItem("which", "personal");
                localStorage.setItem("otherTitle", "个人作品");
                window.location.href = "Other.html";
            }
        }
    };
</script>
<style>
    #per-header {
        display: flex;
        flex-direction: row;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
    }
    .container .navbar-header  svg.per-svg-icon {
        height: 40px;
        fill: #fff;
        stroke-linecap: "round";
        margin-top: 5px;
        margin-right: 5px;
        margin-left: -5px;
    }

    .per-header {
        /*background-color: #5e5e5e;*/
        background-color: #41ae7e;
        border: none;
        padding-top: 10px;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
    }

    .per-header .container #per-header > a.per-nav-brand {
        font-family: cursive;
    }

    .per-header .per-header-nav ul > li {
        opacity: 0.8;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .per-header .per-header-nav ul > li > a span {
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .per-header .per-header-nav ul > li > a:hover {
        cursor: pointer;
    }

    .per-header .per-header-nav ul > li:hover > a span {
        -webkit-animation: scale-and-re 0.7s;
        -o-animation: scale-and-re 0.7s;
        animation: scale-and-re 0.7s;
    }

    .per-header .per-header-nav ul > li:hover {
        opacity: 1;
    }

    .per-header .per-header-nav ul > li > a, .per-header .per-header-nav ul > li:hover > a {
        color: white;
        font-family: cursive;
    }

    .per-header .per-header-nav ul span {
        margin-right: 10px;
    }

    .per-header .per-header-nav ul > button {
        margin-top: 8px;
        background-color: transparent;
        color: white;
        border: 2px solid white;
        border-radius: 5px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        margin-left: 10px;
        font-family: cursive;
    }

    .per-header .per-header-nav ul > button:hover {
        background-color: white;
        color: black;
    }

    #per-header > .per-header-user-button {
        color: white;
        background-color: transparent;
    }

    @media screen and (max-width: 768px) {
        #per-header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    @keyframes scale-and-re {
        0% {
            -webkit-transform: scale(1.0);
            -moz-transform: scale(1.0);
            -ms-transform: scale(1.0);
            -o-transform: scale(1.0);
            transform: scale(1.0);
        }
        50% {
            -webkit-transform: scale(1.4);
            -moz-transform: scale(1.4);
            -ms-transform: scale(1.4);
            -o-transform: scale(1.4);
            transform: scale(1.4);
        }
    }
</style>