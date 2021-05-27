<template>
  <v-main>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="allUser"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>회원정보 관리</v-toolbar-title>
            <v-dialog v-model="dialogDelete" max-width="400px">
              <v-card>
                <v-card-title class="headline">삭제하시겠습니까?</v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                    <p style="color: red">삭제</p>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">
                    <p>취소</p>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon class="mr-3" @click="message(item)">
            mdi-message-outline
          </v-icon>
          <v-icon class="mr-3" @click="editItem(item)">
            mdi-clipboard-edit-outline
          </v-icon>
          <v-icon class="mr-3" @click="deleteItem(item)">
            mdi-delete-off-outline
          </v-icon>
        </template>
      </v-data-table>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      dialogDelete: false,
      headers: [
        {
          text: "아이디",
          align: "start",
          sortable: false,
          value: "userId",
        },
        { text: "이름", value: "userNickName" },
        { text: "가입일", value: "userRegisterDate" },
        { text: "등급", value: "userRole" },
        { text: "회원 관리", value: "actions", sortable: false },
      ],
      allUser: [],
    };
  },

  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$store.dispatch("managermodule/getusers");
      this.allUser = this.$store.state.managermodule.userlist;
    },

    deleteItem(item) {
      this.editedIndex = this.allUser.indexOf(item);
      this.editedId = this.allUser[this.editedIndex].userId;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      //db에서 삭제하는 구문 추가 예정
    },

    deleteItemConfirm() {
      this.allUser.splice(this.editedIndex, 1);
      console.log(this.editedId);
      this.$store.dispatch("managermodule/deleteuser", {
        userid: this.editedId,
      });
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
      //   this.$nextTick(() => {
      //     //this.allUser = this.$store.getters.allUser();
      //     this.allUser = this.$store.state.userlist;
      //});
    },
  },
};
</script>
