<template>
  <v-main>
    <v-form>
      <v-container>
        <v-card>
          <v-card-title>로그인</v-card-title>
          <v-card-text>
            <v-row class="mb-3">
              <v-col cols="6" md="8">
                <v-text-field
                  v-model="userId"
                  :rules="idRules"
                  label="아이디"
                  required />
              </v-col>
              <v-col cols="6" md="8">
                <v-text-field
                  v-model="userPw"
                  :rules="pwRules"
                  label="비밀번호"
                  required />
              </v-col>
            </v-row>
            <v-btn class="mr-4" color="primary">로그인</v-btn>
            <router-link to ="/signup"><v-btn class="mr-4">회원 가입</v-btn></router-link>
          </v-card-text>
        </v-card>
      </v-container>
    </v-form>
  </v-main>
</template>

<script>

export default {
  data() {
    return {
      userId: '',
      userPw: '',
      idRules: [
        v => !!v || '아이디를 입력하세요',
      ],
      pwRules: [
        v => !!v || '비밀번호를 입력하세요',
      ],
    }
  },
}
</script>