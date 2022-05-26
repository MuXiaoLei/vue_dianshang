<template>
    <div class="pagination" >
        <button @click="$emit('getPagNo',pageNo-1)" :disabled='pageNo==1'>上一页</button>
        <!-- 分页器上边 -->
        <button v-show="startPagAndEndPag.start>1" @click="$emit('getPagNo',1)" :class="{'active':pageNo==1}">1</button>
        <button v-show="startPagAndEndPag.start>2">···</button>
        <!-- 分页器中间 -->
        <button v-for="(text,index) in startPagAndEndPag.end"
            :key="index" 
            v-show="text >= startPagAndEndPag.start"
            @click="$emit('getPagNo',text)"
            :class="{'active':pageNo==text}">{{text}}</button>
        <!-- 分页器下边 -->
        <button v-show="startPagAndEndPag.end<totalPag-1">···</button>
        <button v-show="startPagAndEndPag.end<totalPag" @click="$emit('getPagNo',totalPag)" :class="{'active':pageNo==totalPag}">{{totalPag}}</button>
        <button @click="$emit('getPagNo',pageNo+1)" :disabled='pageNo==totalPag'>下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
        <h1>{{startPagAndEndPag}}---{{pageNo}}</h1>
        
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props:['pageNo','pagSize','total','continues'],
    computed:{
        totalPag(){
            return Math.ceil(this.total/this.pagSize);
        },
        startPagAndEndPag(){
            let start = 0, end = 0;
            const {continues,pageNo,totalPag} = this;
            /* 当总页数小于连续页数 */
            if(totalPag < continues){
                start = 1;
                end = totalPag;
            }else{
                start = pageNo-parseInt(continues/2);
                end = pageNo+parseInt(continues/2);
                if(start<1){
                    start = 1;
                    end = continues;
                }else if(end > totalPag){
                    start = totalPag-continues+1;
                    end = totalPag;
                }
            }
            return {start ,end};
        }
    }
};
</script>

<style lang="less" scoped>
.pagination {
    display: flex;
    justify-content: center;
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        // &.active {
        //     cursor: not-allowed;
        //     background-color: #409eff;
        //     color: #fff;
        // }
       
    }
    .active{
            background-color: #409eff;
            color: #fff;
    }
}
</style>