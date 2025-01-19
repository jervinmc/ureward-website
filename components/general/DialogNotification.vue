<template>
    <v-dialog v-model="isOpen" align="center" width="500" hide-on-leave class="rounded-lg">
        <v-card height="500" class="rounded-lg">
            <div align="center" class="py-5"> 
                <v-img src="/images/error.png" height="50" width="50" contain></v-img>
            </div>
            <div>
                {{title}}
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props:['isOpen','title','type','message']
}
</script>

<style>

</style>