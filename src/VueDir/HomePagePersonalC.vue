<template>
    <div id="per-page-part-component">
        <div class="col-md-3 col-md-offset-1 col-sm-4 col-xs-4 col-xs-offset-1 per-page-part" :class="MySmOffset"
             :data-aos="MyDataAos" aos-once="true">
            <div class="per-page-part-img">
                <img class="myImage" :src="ImageSrc"/>
            </div>
            <div class="per-page-part-content">
                <h5><span class="glyphicon glyphicon-heart"></span>OFFERS</h5>
                <h4>
                    A Free Year of SitePoint Premium When You Join SiteGround
                </h4>
                <p>
                    We've teamed up with SiteGround to offer you up to 65% off web hosting,
                    plus free access to the entire SitePoint Premium library for a limited time only (worth $99).
                </p>
                <button type="button" class="btn view-detail-btn">View Detail <span
                        class="glyphicon glyphicon-chevron-right"></span></button>
                <span class="per-page-part-content-time">Jack Frankie,21 hours ago</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'per-page-part-component',
        props: ['dataAos', 'smOffset', 'imgSrc'],
        data: function () {
            return {
                MyDataAos: this.dataAos,
                MySmOffset: this.smOffset,
                ImageSrc: this.imgSrc
            };
        },
        mounted: function () {

        }
    };
</script>
<style>
    @media screen and (max-width: 670px) {
        #per-page-part-component {
            display: flex;
            flex-direction: row;
            justify-content: center;
            height: auto;
        }
    }

    .my-person-page .container .row .per-page-part:hover {
        cursor: pointer;
    }

    .my-person-page .container .row .per-page-part {
        margin-top: 50px;
        border-radius: 0 0 10px 10px;
        box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
        padding: 0px;
        display: flex;
        flex-direction: column;
        height: 326px;
        min-width: 280px;
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
    }

    .my-person-page .container .row .per-page-part .per-page-part-content h5 span {
        margin-right: 10px;
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

    .my-person-page .container .row .per-page-part .per-page-part-content > span.per-page-part-content-time {
        position: relative;
        top: 0;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .my-person-page .container .row .per-page-part:hover .per-page-part-content > span.per-page-part-content-time {
        position: relative;
        top: 50px;
        -webkit-transition: all 0s;
        -moz-transition: all 0s;
        -ms-transition: all 0s;
        -o-transition: all 0s;
        transition: all 0s;
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
    }

</style>