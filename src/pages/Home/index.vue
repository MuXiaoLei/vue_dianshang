<template>
    <div>
        <typeNav/>
        <listContainer/>
        <todayRecommend/>
        <rank/>
        <like/>
        <floor/>
        <floor/>
        <brand/>
    </div>
</template>

<script>
import listContainer from '@/pages/Home/listContainer'
import todayRecommend from '@/pages/Home/todayRecommend'
import rank from '@/pages/Home/rank'
import like from '@/pages/Home/like'
import floor from '@/pages/Home/floor'
import brand from '@/pages/Home/brand'
export default {
    name:'Home',
    components:{
        listContainer,
        todayRecommend,
        rank,
        like,
        floor,
        brand
    }
}
</script>

<style lang="less" scoped>

</style>