<template>
  <v-app>
    <v-app-bar v-show="from !== 'mobile'" app fixed class="white">
      <v-app-bar-nav-icon @click="back()">
        <v-icon large color="black">mdi-chevron-left</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>このアプリについて</v-app-bar-title>
    </v-app-bar>
    <v-main class="background">
      <v-container>
        <h2># あそびかた</h2>
        <v-container>
          <v-img :src="require(`~/assets/images/screenshot.png`)" height="50vw" max-height="400" style="border: solid;" contain></v-img>
          <div class="ma-4">
            <p>「次のお題」ボタンを押すと、ヨッチーがお題を考えはじめます。</p>
            <p>数秒のアニメーションの後、お題が表示されます。</p>
            <p>お題は毎回ランダムに決定されます。</p>
            <p>終了したいときは「おしまい」ボタンを押してください。トップ画面に戻ります。</p>
          </div>
        </v-container>
        <h2># お問い合わせ</h2>
        <v-container>
          <div class="ma-4">
            <p>お問い合わせは以下のボタンからお願いします。</p>
            <p>不具合やご要望など、ご連絡いただけるとありがたいです。</p>
            <p>「こんなお題を追加して欲しい！」などのご意見もお待ちしております。</p>
            <v-btn :href="googleFormURL" x-large class="primary ma-4" target="_blank">お問い合わせフォーム</v-btn>
          </div>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AboutPage extends Vue {
  from: string | (string | null)[] = '';
  googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSetLQIcyNt628Er-HqRlPGZKZP97a095m7O8lvtUNO2dv4S8Q/viewform?usp=sf_link';

  created(): void {
    this.from = this.$route.query.from;
  }

  back(): void {
    this.$router.push('/');
  }
}
</script>
