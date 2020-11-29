<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    </v-app-bar>
    <v-main>
      <p>Number of images: {{ numberOfImages }}</p>
      
        <ImageSquare     
          v-for="imgObj in images" 
          :key="imgObj.id"
          :farm="imgObj.farm" 
          :server="imgObj.server"
          :id="imgObj.id"
          :secret="imgObj.secret" 
          :title="imgObj.title" 
        />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import ImageSquare from './components/ImageSquare.vue';

export default {
  name: "App",

  components: {
    ImageSquare
  },
  mounted: function() { 
    axios.post("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=d7f66852aed44008ce15c75baaed617a&format=json&nojsoncallback=1")
    .then(response => {
      console.log(response.data); 
      this.numberOfImages = response.data.photos.photo.length;
      this.images = response.data.photos.photo;
    })
  },

  data: () => ({
    //
    numberOfImages: 0,
    images: []
  })
};
</script>
