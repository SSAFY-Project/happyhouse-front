<template>
  <v-main>
    <v-form class="mt-15">
      <v-container>
        <v-card>
          <v-card-title>회원({{ userId }}) 정보 수정</v-card-title>
          <v-card-text>
            <v-row class="mb-3">
              <!-- <v-col cols="6" md="8">
                <p>UserId : {{ userId }}</p>
              </v-col> -->
              <v-col cols="6" md="8">
                <v-text-field
                  v-model="userPwd"
                  :rules="pwRules"
                  label="변경할 비밀번호"
                  input="password"
                  required="required"
                  ref="userPwd"
                />
              </v-col>

              <v-col cols="6" md="8">
                <v-text-field
                  v-model="userName"
                  :rules="nameRules"
                  :counter="10"
                  label="이름"
                  required="required"
                  ref="userName"
                />
              </v-col>

              <v-col cols="6" md="8">
                <v-text-field
                  v-model="userAddr"
                  label="주소"
                  required="required"
                  ref="userAddr"
                />
              </v-col>

              <v-col cols="6" md="8">
                <v-text-field
                  v-model="userTel"
                  label="전화번호"
                  required="required"
                  ref="userTel"
                />
              </v-col>

              <v-col cols="6" md="8">
                <v-text-field
                  v-model="userEmail"
                  :rules="emailRules"
                  label="이메일"
                  required="required"
                  ref="userEmail"
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
  </v-main>
</template>

<script>
import axios from "axios";
import router from "../router/index";
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
    if (this.$store.state.userInfo == null) {
      alert("로그인이 필요한 기능입니다.")
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
    submit: function () {
      if (this.userPwd === "") {
        // this.userPwd = "";
        this.$refs.userPwd.focus();
        this.$refs.userPwd.blur();
        return;
      }

      const data = {
        userId: this.userId,
        userPwd: this.userPwd,
        userNickName: this.userName,
        userEmail: this.userEmail,
        userAddr: this.userAddr,
        userTel: this.userTel,
      };

      const headers = {
        "X-AUTH-TOKEN": this.$store.state.userInfo.userToken,
      };

      axios
        .put("http://localhost/user/modify", data, {
          headers: headers,
        })
        .then((res) => {
          alert("정보 수정 완료\n다시 로그인해주세요");
          window.location.href = "/";
        })
        .catch((err) => {
          alert(err);
        });
    },
    clear: function () {
      this.userName = "";
      this.userAddr = "";
      this.userTel = "";
      this.userEmail = "";
    },
  },
};
</script>
