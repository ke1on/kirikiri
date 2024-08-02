<template> 
    <div class="register bg-[var(--textColorWhite)] w-full" @submit="onsubmit">
        <h4 class="text-center p-2 text-lg">{{ pageInfo.title }}</h4>
        <div class="inputBox  ">
            <div class="item">
                <label for="useID">账<span class="nbsp"></span>号：</label>
                <input type="text" @focus="$emit('setClose',false)" v-model="state.useID" name="useID" id="useID" placeholder="请输入账号，英文数字组合" />
            </div>
            <div class="item" v-if="modle == 0">
                <label for="useName">用户名：</label>
                <input type="text" @focus="$emit('setClose',false)" v-model="state.useName" name="useName" id="useName" placeholder="请输入用户名，昵称" />
            </div>
            <div class="item">
                <label for="password">密<span class="nbsp"></span>码：</label>
                <input type="password" @focus="$emit('setClose',true)" v-model="state.password" name="password" id="password"
                    placeholder="请输入密码，英文数字组合" />
            </div>

        </div>
        <div class="flex py-4 my-4 mt-auto items-center">
            <button class="flex-grow " @click="login">{{ pageInfo.button1 }}</button>
            <button class="flex-grow " @click="register">{{ pageInfo.button2 }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth"
const emit = defineEmits(['setClose']);

const authStore = useAuthStore()
/**
 * 0 注册 1 登录
 */
const modle = ref(1)
const pageInfo = ref({
    title: '注册kirikiri',
    button2: '登录',
    button1: '注册',
})
const state = reactive({
    useID: 'ke1on',
    useName: 'ke1on',
    password: 'lovelx123',
    face: 'https://i1.hdslb.com/bfs/face/79a2e1a14208d48bb654a391fdf1ab60f16e725f.jpg'
})

let onsubmit = (e: Event) => {
    e.preventDefault()
}

const login = async (e: Event) => {
    e.preventDefault()
    if (modle.value == 0) { modle.value = 1; return }
    console.log('登录')
    authStore.login({ useID: state.useID, password: state.password })
}
const register = async (e: Event) => {
    e.preventDefault()
    if (modle.value == 1) { modle.value = 0; return }
    console.log('注册')
    authStore.register(state)
}
watch(modle, (val) => {
    if (val == 0) {
        pageInfo.value = {
            title: '注册kirikiri',
            button1: '返回登录',
            button2: '注册'
        }
    } else {
        pageInfo.value = {
            title: '登录kirikiri',
            button1: '登录',
            button2: '前往注册'
        }
    }
}, {
    immediate: true
})
</script>
<style scoped lang='scss'>
.register {
    color: var(--textColor4);
    display: flex;
    flex-direction: column;
    height: 100%;

    .inputBox {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--textColor3);
        border-radius: .5rem;
        font-weight: 400;

        .item {
            display: flex;
            padding: 1rem;
            border-top: 1px solid var(--textColor3);
            font-size: .9rem;

            &:first-child {
                border-top: none;
            }

            .nbsp {
                display: inline-block;
                width: 1rem;
            }

            input {
                outline: none;
                border: none;

            }

            label {
                display: block;
                font-size: 1rem;
                min-width: 4rem;
            }
        }



    }
}
</style>