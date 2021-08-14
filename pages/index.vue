<template>
  <div>
    <v-row justify="center" align-content="center" style="height: 95vh;">
      <v-col cols="12" align="center">
        <v-card class="d-flex align-center justify-center pa-4 mx-auto rounded-circle" max-width="450" height="10vh" min-height="50" max-height="150" outlined>
          <div>
            あなたの代わりに話題を考えます！
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" align="center">
        <v-container class="pa-4">
          <v-img src="/logo.png" height="40vh" min-height="50" max-height="300" aspect-ratio="1" contain></v-img>
        </v-container>
      </v-col>
      <v-col cols="12" align="center">
        <v-container>
          <v-row justify="center">
            <v-btn to="/play" x-large class="primary ma-4 font-weight-bold" width="80vw" max-width="600px" height="5vh" max-height="50">あそぶ</v-btn>
          </v-row>
          <v-row justify="center">
            <v-btn x-large class="white ma-4 font-weight-bold" width="80vw" max-width="600px" height="5vh" max-height="50">このアプリについて</v-btn>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <div style="height: 5vh; text-align: center">
      <span>developed by fukky21</span>
    </div>
  </div>
</template>
