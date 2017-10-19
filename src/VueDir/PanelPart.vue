<template>
    <div class="panel panel-default my-panel hasMargin">
        <div class="panel-heading" role="tab" :id="otherContent.headerId">
            <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" :href="otherContent.tempHref"
                   aria-expanded="true" :aria-controls="otherContent.toId"
                   style="display: block;width: 100%;height: 100%">
                    {{otherContent.title}}
                </a>
            </h4>
        </div>
        <div :id="otherContent.toId" class="panel-collapse collapse" role="tabpanel"
             :aria-labelledby="otherContent.headerId">
            <div class="panel-body">
                <div class="my-panel-content">
                    <img :src="otherContent.imageSrc">
                    <p>
                        {{otherContent.description}}
                    </p>
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
        margin-bottom: 20px!important;
        border-bottom: 1px solid rgba(0,0,0,0.18)!important;
    }
</style>