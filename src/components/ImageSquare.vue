<template>
  <v-card max-width="300">
    <v-img :src="imgSrc"></v-img>
  </v-card>
</template>

<script>
export default {
  name: "ImageSquare",
  data: function () {
    return { imgSrc: "http://farm" + this.farm + ".staticflickr.com/" + this.server + "/" + this.id + "_" + this.secret + ".jpg" }
  },
  props: {
    farm: String, 
    server: String,
    id: String,
    secret: String, 
    title: String
  }
};
</script>
