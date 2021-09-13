<template>
  <v-app>
    <v-app-bar v-if="from !== 'mobile'" app fixed class="white">
      <v-app-bar-nav-icon @click="back()">
        <v-icon large color="black">mdi-chevron-left</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>このアプリについて</v-toolbar-title>
    </v-app-bar>
    <v-main class="background">
      <v-container class="px-8">
        <v-container class="my-4">
          <h2>ヨッチーとは</h2>
          <div class="mt-4">
            <p>いろいろな話題をランダムに提供するアプリです。みんなで盛り上がれる楽しいお題をたくさん収録しています！</p>
            <p>初対面の人と飲み会で盛り上がりたいとき、合コンの席で共通の趣味を見つけたいときなど、話題に困ったときのお供としてご利用ください！</p>
            <p>ビデオ通話で画面共有しながら遊ぶのもオススメです！</p>
          </div>
        </v-container>
        <v-container class="my-4">
          <h2>あそびかた</h2>
          <v-img :src="require(`~/assets/images/screenshot.png`)" class="my-4" height="50vw" max-height="400" style="border: solid;" contain></v-img>
          <div>
            <p>「次のお題」ボタンを押すと、ヨッチーがお題を考えはじめます。</p>
            <p>数秒のアニメーションの後、お題が表示されます。</p>
            <p>お題は毎回ランダムに決定されます。</p>
            <p>終了したいときは「おしまい」ボタンを押してください。トップ画面に戻ります。</p>
          </div>
        </v-container>
        <v-container class="my-4">
          <h2>お問い合わせ</h2>
          <div class="mt-4">
            <p>お問い合わせは下のボタンからお願いします。</p>
            <p>不具合やご要望など、ご連絡いただけるとありがたいです。</p>
            <p>「こんなお題を追加して欲しい！」などのご意見もお待ちしております。</p>
            <v-btn x-large class="primary mt-4" @click="contactButtonEvent()">お問い合わせフォーム</v-btn>
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

  created(): void {
    this.from = this.$route.query.from;
  }

  back(): void {
    this.$router.push('/');
  }

  contactButtonEvent(): void {
    if (this.from === 'mobile') {
      window.location.href = 'yochy-mobile:openContactForm';
      return;
    }
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSetLQIcyNt628Er-HqRlPGZKZP97a095m7O8lvtUNO2dv4S8Q/viewform?usp=sf_link', '_blank');
  }
}
</script>
