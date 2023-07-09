<template>
    <div class="home">
        <v-btn class="home-btn">Vuetify Button</v-btn>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/scss/_settingv';

.home {
    &-btn {
        height: settingv.$button-height;
    }
}
</style>
