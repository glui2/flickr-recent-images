<template>
  <v-card max-width="300" >
    <v-img :src="imgSrc"></v-img>
    <v-card-title v-text="imgTitle"></v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "ImageSquare",
  data: function () {
    return { imgSrc: "http://farm" + this.farm.toString() + ".staticflickr.com/" + this.server + "/" + this.id + "_" + this.secret + ".jpg", imgTitle: this.title }
  },
  props: {
    farm: Number, 
    server: String,
    id: String,
    secret: String, 
    title: String
  }
};
</script>
