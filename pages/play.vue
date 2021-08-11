<template>
  <div>
    <!-- 画像の読み込み -->
    <v-container v-show="false">
      <div v-for="name in imageNames" :key="name">
        <img :src="require(`~/assets/images/${name}`)" width="1" height="1">
      </div>
    </v-container>

    <v-row justify="center" align-content="center" style="height: 100vh;">
      <v-col cols="12" align="center">
        <v-card class="d-flex align-center justify-center pa-4 mx-auto" max-width="550" min-height="150" outlined>
          <div>
            {{ message }}
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" align="center">
        <v-container class="pa-4">
          <v-img :src="require(`~/assets/images/${imageNames[imageIndex]}`)" max-height="300" max-width="300" aspect-ratio="1"></v-img>
        </v-container>
      </v-col>
      <v-col cols="12" align="center">
        <v-container class="pa-4">
          <v-row>
            <v-col cols="6">
              <v-btn x-large block class="red darken-2" :disabled="buttonDisabled" @click="endButtonEvent()">
                <span class="white--text font-weight-bold">終わりにする</span>
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn x-large block class="primary" :disabled="buttonDisabled" @click="nextButtonEvent()">
                <span class="white--text font-weight-bold">{{ nextButtonLabel }}</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class PlayPage extends Vue {
  buttonDisabled = true;
  nextButtonLabel = 'スタート';
  message = 'スタートを押してください';
  messages: string[] = [];
  messageIndex = 0;
  imageIndex = 0;
  imageNames = [
    'img-01.png',
    'img-02.png',
    'img-03.png',
    'img-04.png',
    'img-05.png',
    'img-06.png',
    'img-07.png',
    'img-08.png',
    'img-09.png',
    'img-10.png',
    'img-11.png',
    'img-12.png',
    'img-13.png',
    'img-14.png',
    'img-15.png',
    'img-16.png',
    'img-17.png',
    'img-18.png',
    'img-19.png',
    'img-20.png',
    'img-21.png',
    'img-22.png',
    'img-23.png',
  ];

  created(): void {
    this.messages = [
      '好きな食べ物はなんですか？',
      '子供の頃の夢はなんですか？',
      'おすすめの本はなんですか？',
    ];
    this.buttonDisabled = false;
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async nextButtonEvent(): Promise<void> {
    this.buttonDisabled = true;
    this.imageIndex = 1; // セットポジションに切り替え
    await this.sleep(500);
    this.message = 'えーっとね・・・';

    // 右モーション開始
    this.imageIndex = 2;
    const intervalId1 = setInterval(() => {
      if (this.imageIndex === 9) {
        clearInterval(intervalId1);
        this.imageIndex = 1; // セットポジションに戻す
        this.message = ''; // メッセージ消去
        return;
      }
      this.imageIndex++;
    }, 200);
    await this.sleep(2000); // モーション込みで2s待つ
    // 右モーション終了

    this.message = 'うーんとね・・・';

    // 左モーション開始
    this.imageIndex = 10;
    const intervalId2 = setInterval(() => {
      if (this.imageIndex === 17) {
        clearInterval(intervalId2);
        this.imageIndex = 1; // セットポジションに戻す
        this.message = ''; // メッセージ消去
        return;
      }
      this.imageIndex++;
    }, 200);
    await this.sleep(2000); // モーション込みで2s待つ
    // 左モーション終了

    // ひらめきモーション開始
    this.imageIndex = 18;
    const intervalId3 = setInterval(() => {
      if (this.imageIndex === 22) {
        clearInterval(intervalId3);
        return;
      }
      this.imageIndex++;
    }, 200);
    await this.sleep(1300); // モーション込みで1.3s待ち
    // ひらめきモーション終了

    this.imageIndex = 0; // ニュートラルポジションに切り替え
    this.message = this.messages[this.messageIndex];
    this.buttonDisabled = false;

    if (this.messageIndex === 0) {
      this.nextButtonLabel = '次のお題へ';
    }

    if (this.messageIndex === this.messages.length - 1) {
      this.messageIndex = 0;
    } else {
      this.messageIndex++;
    }
  }

  endButtonEvent(): void {
    const result = confirm('終了してトップ画面に戻りますか？');
    if (result) {
      this.$router.push('/');
    }
  }
}
</script>
