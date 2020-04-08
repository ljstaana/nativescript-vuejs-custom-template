<template>
    <Page>
        <slot name="actionBar">
            <ActionBar>
                <Label :text="title"></Label>
            </ActionBar>
        </slot>
        <slot name="content">

        </slot>
    </Page> 
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style>

</style>