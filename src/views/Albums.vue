<template>
  <v-card flat max-width="1850" height="auto" class="rounded-xl mx-auto mt-10 text-white" style="background: rgba(34,34,34 ,0.5);">
    <v-row class="pa-8">
        <v-col cols="12" md="4">
            <v-card flat class="bg-transparent text-white">
                <v-card-title class="text-center">آلبوم ها</v-card-title>
                <v-row class="pa-8">
                    <v-col class="d-flex justify-center" v-for="(n , index) in 6" :key="index" cols="6" sm="4" md="6">
                        <v-card class="text-white" width="100" height="100" image="/imgs/logo.jpg"></v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        <v-col cols="12" md="8">
            <v-card class="px-4 bg-transparent">
                <v-card-title class="text-center">آهنگ ها</v-card-title>
                <v-card flat class="bg-transparent">
                    <v-row class="pa-8">
                        <v-col class="d-flex justify-center" v-for="(n , index) in 12" :key="index" cols="6" sm="4" md="3">
                        <v-card class="bg-transparent" width="100" height="100" image="/imgs/logo.jpg"></v-card>
                    </v-col>
                    </v-row>
                </v-card>
                <v-card flat class="bg-transparent">
                    <v-row class="pa-8">
                        <v-col class="" cols="12">
                            <v-card style="background: rgba(34,34,34 ,0.5);" class="text-white">
                                <v-card-title class="text-center">متن آهنگ</v-card-title>
                                 <v-card-text class="mx-auto" style="max-width: 500px;text-align: center;">asdasdasdassssssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssassssssssssssssssssssssasssssssssssssssssssssssassssssssssssss</v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card flat class="bg-transparent">
                    <v-row class="pa-8">
                        <v-col class="" cols="12">
                            <v-card flat style="background: rgba(34,34,34 ,0.5);" class="text-white pa-8">
                                 <audio class="w-100 mx-auto" controls>
  <source  type="audio/mpeg">
  مرورگر شما از پخش موزیک پشتیبانی نمی‌کند.
</audio>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-card>
        </v-col>
        <!-- <v-divider :thickness="11" vertical></v-divider> -->
    </v-row>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>