<template>
    <TopbarLayout title="Home">
        <template v-slot:content>
            <StackLayout>
                <Label class="h1" text="This is the homepage!" />
                <Label class="h2" text="This is the homepage!" />
                <Label class="h3" text="This is the homepage!" />
                <Label class="h4" text="This is the homepage!" />
                <Label class="h5" text="This is the homepage!" />
                <Label class="h6" text="This is the homepage!" />
            </StackLayout>
        </template>
    </TopbarLayout>
</template>

<script>
    import sideDrawer from '@/mixins/sideDrawer'
    export default {
        methods: {
            mixins: [sideDrawer]
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
