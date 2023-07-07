<template>
    <div class="home">
        <p class="home-text">你好!</p>
        <ui-button>Text</ui-button>
    </div>
</template>

<style lang="scss" scoped>
@use '@material/theme' as colour;
.home {
    &-text {
        color: colour.$red-500;
    }
}
</style>
