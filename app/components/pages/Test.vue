<template>
    <BlankLayout>
        <template v-slot:content>
            <Label class="centered" text="This is a dev. test page" />
        </template>
    </BlankLayout>
</template>

<script>
    export default {
        computed: {
            message() {
                return "Dev. Page";
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
