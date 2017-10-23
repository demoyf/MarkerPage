<template>
    <div class="per-page-part-component">
        <div class="col-md-3 col-sm-4 col-xs-4 per-page-part col-xs-offset-1"
             :data-aos="personal.aosData" aos-once="true">
            <a :href="personal.href" target="_blank">
                <div class="per-page-part-img">
                    <img class="myImage" :src="personal.imageSrc"/>
                </div>
                <div class="per-page-part-content">
                    <h5><span class="glyphicon glyphicon-heart"></span>TEMPS</h5>
                    <h4 style="height: 20px;overflow: hidden;white-space:nowrap;text-overflow:ellipsis;"
                        :title="personal.title">
                        {{personal.title}}
                    </h4>
                    <p style="height: 81px;overflow: hidden;" :title="personal.description">
                        {{personal.description}}
                    </p>
                    <button type="button" class="btn view-detail-btn">View Detail <span
                            class="glyphicon glyphicon-chevron-right"></span></button>
                    <h5 class="per-page-part-content-time">{{personal.create_time}}</h5>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'per-page-part-component',
        props: ['personal'],
        data: function () {
            return {
                personal: this.personal
            };
        },
        mounted: function () {

        }
    };
</script>
<style>
    @media screen and (max-width: 670px) {
        .per-page-part-component {
            display: flex;
            flex-direction: row;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            justify-content: center;
            -webkit-justify-content: center;
            height: auto;
        }
        .per-page-part-component .per-page-part {
            margin-left: 0!important;
        }
    }

    .per-page-part-component .per-page-part > a {
        color: rgba(0, 0, 0, 0.8);
    }

    .per-page-part-component .per-page-part > a:hover {
        color: rgba(0, 0, 0, 0.8);
        text-decoration: none;
    }

    .my-person-page .container .row .per-page-part:hover {
        cursor: pointer;
    }

    .my-person-page .container .row .per-page-part {
        margin-top: 30px;
        border-radius: 0 0 10px 10px;
        box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
        padding: 0px;
        display: flex;
        flex-direction: column;
        min-height: 310px;
        min-width: 270px;
        overflow: hidden;
    }

    .my-person-page .container .row .per-page-part .per-page-part-img {
        position: absolute;
    }

    .my-person-page .container .row .per-page-part .per-page-part-img img {
        width: 100%;
        position: relative;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .my-person-page .container .row .per-page-part:hover .per-page-part-content {
        top: 100px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .my-person-page .container .row .per-page-part .per-page-part-content {
        padding: 0 10px;
        position: relative;
        top: 190px;
        background-color: white;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .my-person-page .container .row .per-page-part .per-page-part-content h5 {
        color: rgba(93, 93, 93, 0.72);
        font-family: cursive;
        margin: 5px 0;
        font-size: 13px;
    }

    .my-person-page .container .row .per-page-part .per-page-part-content h5 span {
        margin-right: 7px;
    }

    .my-person-page .container .row .per-page-part .per-page-part-content p {
        opacity: 0;
        height: 0;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        color: rgba(0, 0, 0, 0.6);
    }

    .my-person-page .container .row .per-page-part:hover .per-page-part-content p {
        opacity: 1;
        height: 90px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .my-person-page .container .row .per-page-part:hover .per-page-part-img img {
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        -webkit-transform: translateY(-20%) scale(1.1);
        -moz-transform: translateY(-20%) scale(1.1);
        -ms-transform: translateY(-20%) scale(1.1);
        -o-transform: translateY(-20%) scale(1.1);
        transform: translateY(-20%) scale(1.1);
    }

    .my-person-page .container .row .per-page-part .per-page-part-content .view-detail-btn {
        position: relative;
        top: 100px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        background-color: transparent;
        border: 2px solid #24b3b5;
        color: #24b3b5;
    }

    .my-person-page .container .row .per-page-part .per-page-part-content .view-detail-btn:hover {
        background-color: #24b3b5;
        color: white;
    }

    .my-person-page .container .row .per-page-part .per-page-part-content > .per-page-part-content-time {
        position: relative;
        top: -100px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .my-person-page .container .row .per-page-part:hover .per-page-part-content > .per-page-part-content-time {
        position: relative;
        top: 50px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        color: rgba(0, 0, 0, 0.7);
    }

    .my-person-page .container .row .per-page-part:hover .per-page-part-content .view-detail-btn {
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        top: 0px;
    }

    .my-person-page .container .row .per-page-part .per-page-part-content h4 {
        font-weight: bold;
        margin: 5px 0;
        margin-top: 10px;
    }
</style>