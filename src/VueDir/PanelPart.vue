<template>
    <div class="panel panel-default my-panel hasMargin">
        <div class="panel-heading" role="tab" :id="otherContent.headerId">
            <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" :href="otherContent.tempHref"
                   aria-expanded="true" :aria-controls="otherContent.toId"
                   style="display: block;width: 100%;height: 100%" class="title-text" :title="otherContent.href">
                    {{otherContent.title}}
                </a>
            </h4>
        </div>
        <div :id="otherContent.toId" class="panel-collapse collapse" role="tabpanel"
             :aria-labelledby="otherContent.headerId">
            <div class="panel-body">
                <div class="my-panel-content">
                    <p class="text-muted text-right" style="font-size: 15px;margin: 15px 0;margin-right: 10%">
                        {{otherContent.description}}
                    </p>
                    <a class="btn btn-lg pull-right to-href" :href="otherContent.href"
                       type="btn" role="button" target="_blank">GO <span class="glyphicon glyphicon-hand-right"></span></a>
                    <img :src="otherContent.imageSrc">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'panel-part',
        props: ['otherContent'],
        data: function () {
            return {
                otherContent: this.otherContent
            };
        }
    };
</script>
<style>
    .hasMargin {
        margin-bottom: 20px !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15) !important;
    }

    .my-panel .panel-heading .panel-title > a.title-text {
        font-size: 17px;
        font-family: "FangSong", cursive;
    }

    .my-panel .panel-collapse .my-panel-content .to-href {
        max-width: 90px;
        display: block;
        margin: 20px auto;
        background-color: #27ae60bb;
        color: white;
        box-shadow: 0 0 2px 3px #27ae6033;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .my-panel .panel-collapse .my-panel-content .to-href:hover {
        box-shadow: 0 0 5px 9px #27ae6033;
    }
    .my-panel .panel-collapse .my-panel-content .to-href > span {
        margin-left: 4px;
    }
</style>