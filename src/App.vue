<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Headline from './components/Headline.vue'
import TopWebsites from './components/TopWebsites.vue'
import Website from './components/Website.vue'

const topWebsites = ref([
  {name: 'Google', url: 'https://google.com', views: '1M', img: 'google.png'},
  {name: 'Facebook', url: 'https://facebook.com', views: '1.5M', img: 'facebook.png'},
  {name: 'Twitter', url: 'https://twitter.com', views: '2M', img: 'twitter.png'},
  {name: 'Instagram', url: 'https://instagram.com', views: '5.5M', img: 'instagram.png'},
  {name: 'Youtube', url: 'https://youtube.com', views: '100M', img: 'youtube.png'},
  {name: 'TikTok', url: 'https://tiktok.com', views: '20M', img: 'tiktok.png'},
])
</script>

<template>
  <Navbar title="Awesome Website" />
  <Headline />
  <TopWebsites :websites="topWebsites" />
  <Website :websites="topWebsites" />
</template>