<template>
  <v-app>
    <v-main class="background">
      <v-container>
        <v-row justify="center" align-content="center" style="height: 95vh;">
          <v-col cols="12" align="center">
            <v-card class="d-flex align-center justify-center pa-4 mx-auto rounded-circle" height="10vh" max-width="450" min-height="50" max-height="150" outlined>
              あなたの代わりにお題を考えます！
            </v-card>
          </v-col>
          <v-col cols="12" align="center">
            <v-img src="/logo.png" height="40vh" max-height="300" aspect-ratio="1" contain></v-img>
          </v-col>
          <v-col cols="12" align="center">
            <v-row justify="center">
              <v-btn x-large class="primary ma-4" width="80vw" max-width="600" height="6vh" max-height="55" @click="playButtonEvent()">あそぶ</v-btn>
            </v-row>
            <v-row justify="center">
              <v-btn x-large class="white ma-4" width="80vw" max-width="600" height="6vh" max-height="55" @click="aboutButtonEvent()">このアプリについて</v-btn>
            </v-row>
          </v-col>
        </v-row>
        <div class="text-center" style="height: 5vh;">
          <span>developed by fukky21</span>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {
  from: string | (string | null)[] = '';

  created(): void {
    this.from = this.$route.query.from;
  }

  playButtonEvent(): void {
    if (this.from === 'mobile') {
      window.location.href = 'yochy-mobile:goToPlayPage';
      return;
    }
    this.$router.push('/play');
  }

  aboutButtonEvent(): void {
    if (this.from === 'mobile') {
      window.location.href = 'yochy-mobile:goToAboutPage';
      return;
    }
    this.$router.push('/about');
  }
}
</script>
