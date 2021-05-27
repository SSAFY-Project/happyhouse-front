<template>
  <v-form class="mt-15">
    <v-container>
      <v-card>
        <v-card-title>회원 수정</v-card-title>
        <v-card-text>
          <v-row class="mb-3">
            <v-col cols="6" md="8">
              <p>{{userId}}</p>
            </v-col>
            <v-col cols="6" md="8">
              <v-text-field
                v-model="userPwd"
                :rules="pwRules"
                label="비밀번호"
                input="password"
                required="required"
              />
            </v-col>

            <v-col cols="6" md="8">
              <v-text-field
                v-model="userName"
                :rules="nameRules"
                :counter="10"
                label="이름"
                required="required"
              />
            </v-col>

            <v-col cols="6" md="8">
              <v-text-field
                v-model="userAddr"
                label="주소"
                required="required"
              />
            </v-col>

            <v-col cols="6" md="8">
              <v-text-field
                v-model="userTel"
                label="전화번호"
                required="required"
              />
            </v-col>

            <v-col cols="6" md="8">
              <v-text-field
                v-model="userEmail"
                :rules="emailRules"
                label="이메일"
                required="required"
              />
            </v-col>
          </v-row>
          <v-btn class="mr-4" color="primary" v-on:click="submit"
            >정보 수정</v-btn
          >
          <v-btn v-on:click="clear">초기화</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios';
import router from '../router/index';
export default {
  data() {
    return {
      valid: false,
      userId: "",
      userPwd: "",
      userName: "",
      userAddr: "",
      userTel: "",
      userEmail: "",

      idRules: [
        (v) => !!v || "아이디를 입력하세요.",
        // (v) => /.+@.+/.test(v) || "이메일 형식이 아닙니다.",
        (v) => v !== "test" || "이미 등록된 아이디입니다.",
        // 이미 등록된 아이디처리는 DB를 통해 찾아봐야 함.
      ],

      emailRules: [
        (v) => !!v || "이메일을 입력하세요.",
        (v) => /.+@.+/.test(v) || "이메일 형식이 아닙니다.",
        // (v) => v !== "a@a.a" || "이미 등록된 아이디입니다.",
        // 이미 등록된 아이디처리는 DB를 통해 찾아봐야 함.
      ],

      pwRules: [
        (v) => !!v || "비밀번호를 입력하세요.",
        (v) => v.length >= 4 || "비밀번호는 4글자 이상이여야 합니다.",
      ],

      nameRules: [
        (v) => !!v || "이름을 입력하세요.",
        (v) => v.length <= 10 || "이름이 10글자 넘는건 선넘었지..",
      ],

      nicknameRules: [
        (v) => !!v || "별명을 입력하세요.",
        (v) => v.length >= 2 || "별명은 2글자 이상이여야 합니다.",
        (v) => v.length <= 10 || "별명은 10글자 이하여야 합니다.",
      ],
    };
  },
  mounted() {
    if(this.$store.state.userInfo == null) {
        router.push("/signin");
    } else {
        
        this.userId = this.$store.state.userInfo.userId;
        this.userName = this.$store.state.userInfo.userName;
        this.userAddr = this.$store.state.userInfo.userAddr;
        this.userTel = this.$store.state.userInfo.userTel;
        this.userEmail = this.$store.state.userInfo.userEmail;
    }
  },
  methods: {
      submit: function()  {
          this.pwRules;
      },
      clear: function() {
          this.userId = "";
          this.userName = "";
          this.userAddr = "";
          this.userTel = "";
          this.userEmail = "";
      },
  },
}
</script>