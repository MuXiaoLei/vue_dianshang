<template>
    <div>
        <typeNav/>
        <listContainer/>
        <todayRecommend/>
        <rank/>
        <like/>
        <floor v-for="(carousel,id) in floorList" :key="carousel.id" :floorList='carousel'/>
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
import {mapState} from 'vuex'

export default {
    name:'Home',
    components:{
        listContainer,
        todayRecommend,
        rank,
        like,
        floor,
        brand
    },
    mounted(){
        this.$store.dispatch('getFloorList');
        this.$store.dispatch('getUserList');
    },
    computed:{
        ...mapState({
            floorList:(state) => state.home.floorList,
        })
    }
}
</script>

<style lang="less" scoped>

</style>