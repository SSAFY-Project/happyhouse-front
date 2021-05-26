<template>
  <v-main>
    <v-container cols="8" md="6">
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
                    required
                  />
                </v-col>
                <v-col cols="6" md="8">
                  <v-text-field
                    v-model="userPw"
                    :rules="pwRules"
                    label="비밀번호"
                    required
                  />
                </v-col>
              </v-row>
              <v-btn class="mr-4" color="primary" v-on:click="submit"
                >로그인</v-btn
              >
              <router-link to="/signup"
                ><v-btn class="mr-4">회원 가입</v-btn></router-link
              >
            </v-card-text>
          </v-card>
        </v-container>
      </v-form>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      userId: "",
      userPw: "",
      idRules: [(v) => !!v || "아이디를 입력하세요"],
      pwRules: [(v) => !!v || "비밀번호를 입력하세요"],
    };
  },
  methods: {
    ...mapActions(["login"]),
    submit() {
      this.login({ username: this.userId, password: this.userPw })
      .then((res) => {
        alert(res);
        this.$router.push('/');
      })
      .catch((err) => {
        alert(err);
      });
    },
  },
};
</script>
