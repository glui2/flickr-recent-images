<template>
  <v-app>
    <v-app-bar app color="primary" dark>
            <h3>Number of images: {{ numberOfImages }}</h3>
    </v-app-bar>
    <v-main>
      <v-container container>
      
        <ImageSquare     
          v-for="imgObj in images" 
          :key="imgObj.id"
          :farm="imgObj.farm" 
          :server="imgObj.server"
          :id="imgObj.id"
          :secret="imgObj.secret" 
          :title="imgObj.title" 
        />
        </v-container>
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
    axios.post("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=" + process.env.VUE_APP_FLICKR_KEY + "&format=json&nojsoncallback=1")
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
