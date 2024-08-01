<template>
    <form class="register bg-[var(--textColorWhite)] p-4 w-[40%]" @submit="login" >
        <div class="inputBox  ">
            <div class="item">
                <label for="useID">账号：</label>
                <input type="text" v-model="state.useID" name="useID" id="useID" />
            </div>         
            <div class="item">
                <label for="useName">用户名：</label>
                <input type="text" v-model="state.useName" name="useName" id="useName" />
            </div>
            <div class="item">
                <label for="password">密码：</label>
                <input type="password" v-model="state.password" name="password" id="password" />
            </div>
        </div>
        <div>
            <button @submit="register">注册</button>
            <button >登录</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import type { registerBody, registerResponse } from "~/types/auth"
import { useAuthStore } from "@/store/auth"
const authStore = useAuthStore()

const state = reactive({
    useID: 'Ke1on',
    useName: 'Ke1on',
    password: 'lovelx123',
    face: 'https://i1.hdslb.com/bfs/face/79a2e1a14208d48bb654a391fdf1ab60f16e725f.jpg'
})
const register = async (e: Event) => {
    e.preventDefault()
    authStore.register(state)
}
const login = async (e: Event) => {
    e.preventDefault()
    authStore.login({ useID: state.useID, password: state.password })
}
</script>
<style scoped lang='scss'>
.register {
    color: var(--textColor4);

    .inputBox {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--textColor3);
        border-radius: .5rem;

        .item {
            display: flex;
            padding: 1rem;
            border-top: 1px solid var(--textColor3);

            &:first-child {
                border-top: none;
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