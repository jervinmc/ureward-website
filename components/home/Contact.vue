<template>
    <div>
        <v-card color="primary" height="600" class="py-10">
            <div align="center">
                <div class="text-h3 white--text">
                    Get in Touch!
                </div>
                <div class="white--text py-10 text-h6">
                    We align leaders around a shared purpose and strategic story that catalyzes their business and brand
                    to take action.
                </div>
                <div>
                    <v-row>
                        <v-col v-for="card_info in card_list" class="pa-10">
                            <v-card height="300" color="white" align="center" class="pa-10">
                                <div>
                                    <v-img :src="card_info.icon" height="80" width="70" />
                                </div>
                                <div class="text-h5 py-10">
                                    <b>{{ card_info.card_name }}</b>
                                </div>
                                <div>
                                    {{ card_info.details }}
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>

export default {
    data(){
        return{
            card_list:[
                {
                    icon:'/images/contact/location.png',
                    card_name:'Address',
                    details:'121 Rock Sreet, 21 Avenue, New York, NY 92103-9000'
                },
                {
                    icon:'/images/contact/email.png',
                    card_name:'Email',
                    details:'urewards.ph'
                },
                {
                    icon:'/images/contact/contact.png',
                    card_name:'Call us',
                    details:'2020202020'
                },
            ]
        }
    }

};
</script>

<style></style>