<template>
  <v-app>
    <v-app-bar app fixed class="white">
      <v-app-bar-nav-icon @click="back()">
        <v-icon large color="black">mdi-chevron-left</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>このアプリについて</v-app-bar-title>
    </v-app-bar>
    <v-main class="background">
      <v-container>
        This is About Page.
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AboutPage extends Vue {
  back(): void {
    this.$router.push('/');
  }
}
</script>
