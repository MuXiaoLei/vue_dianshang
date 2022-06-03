<template>
    <div class="cart">
        <h4>全部商品</h4>
        <div class="cart-main">
            <div class="cart-th">
                <div class="cart-th1">全部</div>
                <div class="cart-th2">商品</div>
                <div class="cart-th3">单价（元）</div>
                <div class="cart-th4">数量</div>
                <div class="cart-th5">小计（元）</div>
                <div class="cart-th6">操作</div>
            </div>
            <div class="cart-body">
                <ul
                    class="cart-list"
                    v-for="(val, index) in cartInfoList"
                    :key="val.skuId"
                >
                    <li class="cart-list-con1">
                        <input
                            type="checkbox"
                            name="chk_list"
                            :checked="val.isChecked == 1"
                            @change="isChecked(val, $event)"
                        />
                    </li>
                    <li class="cart-list-con2">
                        <img :src="val.imgUrl" />
                        <div class="item-msg">{{ val.skuName }}</div>
                    </li>
                    <li class="cart-list-con4">
                        <span class="price">{{ val.skuPrice }}</span>
                    </li>
                    <li class="cart-list-con5">
                        <!-- <a href="javascript:void(0)" class="mins" @click="upData('min',-1,val)">-</a> -->
                        <a
                            href="javascript:void(0)"
                            class="mins"
                            @click="cut(val)"
                            >-</a
                        >
                        <input
                            autocomplete="off"
                            type="text"
                            minnum="1"
                            class="itxt"
                            :value="val.skuNum"
                            @change="upData('up', $event.target.value * 1, val)"
                        />
                        <a
                            href="javascript:void(0)"
                            class="plus"
                            @click="upData('max', 1, val)"
                            >+</a
                        >
                    </li>
                    <li class="cart-list-con6">
                        <span class="sum">{{ val.skuPrice * val.skuNum }}</span>
                    </li>
                    <li class="cart-list-con7">
                        <a
                            href="#none"
                            class="sindelet"
                            @click="deleteCatList(val.skuId)"
                            >删除</a
                        >
                        <br />
                        <a href="#none">移到收藏</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cart-tool">
            <div class="select-all">
                <input
                    class="chooseAll"
                    type="checkbox"
                    :checked="isAllChecked"
                    @change="allChecke($event)"
                />
                <!-- && cartInfoList.length -->
                <span>全选</span>
            </div>
            <div class="option">
                <a @click="checkedAllCart">删除选中的商品</a>
                <a href="#none">移到我的关注</a>
                <a href="#none">清除下柜商品</a>
            </div>
            <div class="money-box">
                <div class="chosed">已选择 <span>0</span>件商品</div>
                <div class="sumprice">
                    <em>总价（不含运费） ：</em>
                    <i class="summoney">{{ totalPrice }}</i>
                </div>
                <div class="sumbtn">
                    <a class="sum-btn" href="###" target="_blank">结算</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "ShopCart",
    data() {
        return {
            value: 0,
            flag: false,
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.$store.dispatch("getShopCart");
        },
        // type判断是哪个按钮  value修改参数与原数的差值  val需要修改产品的val
        async upData(type, value, val) {
            switch (type) {
                case "max":
                    value = 1;
                    break;
                case "up":
                    value =
                        isNaN(value) || value < 1
                            ? 0
                            : parseInt(value) - val.skuNum;
                    break;
            }
            try {
                console.log(value);
                await this.$store.dispatch("addCartList", {
                    skuId: val.skuId,
                    skuNum: value,
                });
                this.getData();
            } catch (error) {}
        },
        cut(val) {
            if (this.flag) return;
            this.flag = true;
            setTimeout(async () => {
                this.value = val.skuNum > 1 ? -1 : 0;
                await this.$store.dispatch("addCartList", {
                    skuId: val.skuId,
                    skuNum: this.value,
                });
                this.getData();
                this.flag = false;
            });
        },
        deleteCatList(skuId) {
            this.$store.dispatch("deleteCart", skuId);
            this.getData();
        },
        isChecked(val, event) {
                try {
                    // console.log(event.target.checked);
                let Checked = event.target.checked ? "1" : "0";
                this.$store.dispatch("getCheckCart", {
                    skuId: val.skuId,
                    isChecked: Checked,
                });
                this.getData();
            } catch (error) {
                console.log(error.message);
            }
        },
        async checkedAllCart() {
            try {
                await this.$store.dispatch("checkedAll");
                this.getData();
            } catch (error) {
                console.log(error.message);
            }
        },
        async allChecke(event) {
            try {
                let isChecked = event.target.checked ? "1" : "0";
                await this.$store.dispatch("allCheckeCart", isChecked);
                this.getData();
            } catch (error) {
                console.log(error.message);
            }
        },
    },
    computed: {
        ...mapGetters(["cartList"]),
        cartInfoList() {
            return this.cartList.cartInfoList || [];
        },
        totalPrice() {
            let sum = 0;
            this.cartInfoList.forEach((item) => {
                sum += item.skuPrice * item.skuNum;
            });
            return sum;
        },
        isAllChecked() {
            return this.cartInfoList.every((item) => item.isChecked == 1);
        },
    },
};
</script>

<style lang="less" scoped>
.cart {
    width: 1200px;
    margin: 0 auto;

    h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
    }

    .cart-main {
        .cart-th {
            background: #f5f5f5;
            border: 1px solid #ddd;
            padding: 10px;
            overflow: hidden;

            & > div {
                float: left;
            }

            .cart-th1 {
                width: 25%;

                input {
                    vertical-align: middle;
                }

                span {
                    vertical-align: middle;
                }
            }

            .cart-th2 {
                width: 25%;
            }

            .cart-th3,
            .cart-th4,
            .cart-th5,
            .cart-th6 {
                width: 12.5%;
            }
        }

        .cart-body {
            margin: 15px 0;
            border: 1px solid #ddd;

            .cart-list {
                padding: 10px;
                border-bottom: 1px solid #ddd;
                overflow: hidden;
                display: flex;
                align-items: center;
                & > li {
                    float: left;
                }

                .cart-list-con1 {
                    width: 5%;
                }

                .cart-list-con2 {
                    width: 45%;
                    display: flex;
                    justify-content: center;

                    img {
                        width: 82px;
                        height: 82px;
                        float: left;
                    }

                    .item-msg {
                        float: left;
                        width: 150px;
                        margin: 0 10px;
                        line-height: 18px;
                    }
                }

                .cart-list-con4 {
                    width: 12.5%;
                }

                .cart-list-con5 {
                    width: 12.5%;

                    .mins {
                        border: 1px solid #ddd;
                        border-right: 0;
                        float: left;
                        color: #666;
                        width: 6px;
                        text-align: center;
                        padding: 8px;
                    }

                    input {
                        border: 1px solid #ddd;
                        width: 40px;
                        height: 33px;
                        float: left;
                        text-align: center;
                        font-size: 14px;
                    }

                    .plus {
                        border: 1px solid #ddd;
                        border-left: 0;
                        float: left;
                        color: #666;
                        width: 6px;
                        text-align: center;
                        padding: 8px;
                    }
                }

                .cart-list-con6 {
                    width: 12.5%;

                    .sum {
                        font-size: 16px;
                    }
                }

                .cart-list-con7 {
                    width: 12.5%;

                    a {
                        color: #666;
                    }
                }
            }
        }
    }

    .cart-tool {
        overflow: hidden;
        border: 1px solid #ddd;

        .select-all {
            padding: 10px;
            overflow: hidden;
            float: left;

            span {
                vertical-align: middle;
            }

            input {
                vertical-align: middle;
            }
        }

        .option {
            padding: 10px;
            overflow: hidden;
            float: left;

            a {
                float: left;
                padding: 0 10px;
                color: #666;
            }
        }

        .money-box {
            float: right;

            .chosed {
                line-height: 26px;
                float: left;
                padding: 0 10px;
            }

            .sumprice {
                width: 200px;
                line-height: 22px;
                float: left;
                padding: 0 10px;

                .summoney {
                    color: #c81623;
                    font-size: 16px;
                }
            }

            .sumbtn {
                float: right;

                a {
                    display: block;
                    position: relative;
                    width: 96px;
                    height: 52px;
                    line-height: 52px;
                    color: #fff;
                    text-align: center;
                    font-size: 18px;
                    font-family: "Microsoft YaHei";
                    background: #e1251b;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>