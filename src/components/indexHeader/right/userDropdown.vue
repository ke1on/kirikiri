<template>
    <div class="userDropdown">
        <p class="useName">{{ 'Ke1on' }}</p>
        <p class="useInfo">
            <img src="~/assets/img/bigVip.avif" alt="">
            <svg-lv6 />
        </p>
        <p class="useInfo2">
            <small><span>硬币：</span>1688</small>
            <small><span>K币：</span>1688</small>
        </p>
        <p class="useInfo3">
            <small><span>20</span><span>关注</span></small>
            <small><span>20</span><span>粉丝</span></small>
            <small><span>20</span><span>动态</span></small>
        </p>
        <dl class="useInfo4">
            <dt>会员中心</dt>
            <dd>我的大会员</dd>
            <dd>热播内容看不停</dd>
        </dl>
        <ul class="useInfo5">
            <li><a href="#">
                <svg-fold fillColor=''></svg-fold>
            </a></li>
            <li><a href="#">
                <svg-fold fillColor=''></svg-fold>
            </a></li>
            <li><a href="#">
                <svg-fold fillColor=''></svg-fold>
            </a></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.userDropdown{
    margin-top: 3rem;
    padding: 1rem 1.5rem;

    &>*{
        padding: 0 1.5rem;
    }

    .useName {
        font-size: large;
        font-weight: 400;
        color: var(--textColorPink);
        text-align: center;
    }

    .useInfo {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 1rem;

        img {
            height: 1.5rem;
            width: fit-content;
            flex-shrink: 0;
        }

        svg {
            width: fit-content;
            height: 1.5rem;

        }
    }

    .useInfo2 {
        display: flex;
        gap: 1rem;
        justify-content: center;
        color: var(--baseColor);
        font-size: small;

        span {
            color: var(--textColor2);
        }
    }

    .useInfo3 {
        color: var(--baseColor);
        font-size: larger;
        display: flex;
        justify-content: space-between;

        small {
            display: flex;
            flex-direction: column;
            text-align: center;
            line-height: 100%;
            margin-top: .5rem;

            span:nth-child(1) {
                color: var(--baseColor);
                font-size: large;
                font-weight: 600;
            }

            span:nth-child(2) {
                color: var(--textColor2);
                margin: .5rem 0;
            }
        }
    }

    .useInfo4{
        display: grid;
        grid-template: auto auto / auto auto;
        grid-auto-flow: dense;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(255,236,241);
        border-radius: .5rem;
        padding: .5rem 1rem;
        
        dt{
            grid-row: 2 span;
            grid-column: 2 / 3;
            background-color: #fff;
            border-radius: .25rem;
            text-align: center;
            width: 5rem;
            height: 1.75rem;
            line-height: 1.75rem;
            color: var(--textColorPink);
        }
        dd{
            grid-column: 1 / 2;

            &:first-of-type{
                color: var(--textColorPink);
            }

            &:last-child{
                color: var(--textColor2);
                font-size: .75rem;
            }
        }
    }

    .useInfo5{
        svg{
            fill: var(--textColor2);
            width: .75rem;
            height: .75rem;
            transform: rotateZ(-90deg);
        }
    }
}
</style>