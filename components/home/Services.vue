<template>
    <div class="pa-16" align="center">
        <div class="text-h3">
            Key Features
        </div>
        <div>
            Sample text. Click to select the text box. Click again or double click to start editing the text.
        </div>
        <div class="pt-10">
            <v-row>
                <v-col :cols="page_orientation == 'isMobile' ? 12 : 6">
                    <v-img src="/images/services-image.jpg"></v-img>
                </v-col>
                <v-col :cols="page_orientation == 'isMobile' ? 12 : 6" align-self="center">
                    <v-row>
                        <v-col :cols="page_orientation == 'isMobile' ? 12 : 6" v-for="card_info in card_list">
                            <v-card height="200px" color="secondary" class="d-flex align-center justify-center" dark>
                                <div>
                                    <div>
                                        <v-img :src="card_info.icon" height="50" width="40" />
                                    </div>
                                    <div class="text-h5">
                                        <b>{{ card_info.service_name }}</b>
                                    </div>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    props:['page_orientation'],
    data() {
        return {
            card_list: [
                {
                    icon: '/images/services/code_desktop.png',
                    service_name: 'Development',
                },
                {
                    icon: '/images/services/bag.png',
                    service_name: 'Top Skills',
                },
                {
                    icon: '/images/services/design.png',
                    service_name: 'Design',
                },
                {
                    icon: '/images/services/responsive.png',
                    service_name: 'Responsive',
                }
            ]
        }
    }
}
</script>