<template>
  <v-app>
    <v-app-bar app color="primary" dark>
            <h3>Number of images: {{ numberOfImages }}</h3>
            <v-spacer></v-spacer>
            <v-text-field style="margin: auto" label="Search recent images" solo v-model="searchInputData" placeholder="Search for an image" v-on:input="searchInputData ? searchInput(searchInputData) : searchRecent()"></v-text-field>
    </v-app-bar>
    <v-main>
      <v-container container>
        <v-row>
          <v-col v-if="images.length==0" align-self="center">
            <h3 id="no-images-text">Currently no images to display.</h3>
          </v-col>
          <v-col v-else v-for="(imgObj, index) in images" :key="index" align-self="center">
            <ImageSquare     
              :key="imgObj.id"
              :farm="imgObj.farm" 
              :server="imgObj.server"
              :id="imgObj.id"
              :secret="imgObj.secret" 
              :title="imgObj.title" 
            />
        </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import { debounce } from "debounce"
import ImageSquare from './components/ImageSquare.vue';

export default {
  name: "App",

  components: {
    ImageSquare
  },
  mounted: function() { 
    this.searchRecent();
  },
  data: () => ({
    //
    numberOfImages: 0,
    images: [],
    searchInputData: '',
  }),
  methods: {
    searchRecent: function() {
      axios.post("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=" + process.env.VUE_APP_FLICKR_KEY + "&format=json&nojsoncallback=1")
      .then(response => {
        this.numberOfImages = response.data.photos.photo.length;
        this.images = response.data.photos.photo;
      })
    },
    searchInput: debounce(function (stringInput) {
      axios.post("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + process.env.VUE_APP_FLICKR_KEY + "&text=" + stringInput + "&format=json&nojsoncallback=1")
      .then(response => {
        this.numberOfImages = response.data.photos.photo.length;
        this.images = response.data.photos.photo;
      })}, 500)
  }
};
</script>
