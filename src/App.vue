<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    </v-app-bar>

    <v-main>
      <ImageGrid />
    </v-main>
  </v-app>
</template>

<script>
import ImageGrid from "./components/ImageGrid";
import axios from "axios";

export default {
  name: "App",

  components: {
    ImageGrid
  },
  mounted: function() { 
    axios.post("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=d7f66852aed44008ce15c75baaed617a&format=json&nojsoncallback=1")
    .then(response => { 
      console.log(response.data);
    })
  },

  data: () => ({
    //
  })
};
</script>
