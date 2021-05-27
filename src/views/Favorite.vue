<template>
  <v-main>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="favorlist"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>관심매물</v-toolbar-title>
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
          text: "아파트명",
          align: "start",
          sortable: false,
          value: "aptName",
        },
        { text: "거래금액", value: "dealAmount" },
        { text: "", value: "dealYear", width: "7%" },
        { text: "거래일", value: "dealMonth", width: "7%" },
        { text: "", value: "dealDay", width: "7%" },
        { text: "동네", value: "dong" },
        { text: "관심 목록 제거", value: "actions", sortable: false },
      ],
      favorlist: [],
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
      this.$store.dispatch("housemodule/getfavorite");
      this.favorlist = [];
      this.favorlist = this.$store.getters["housemodule/getFavoriteDeal"];
    },

    deleteItem(item) {
      this.editedIndex = this.favorlist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      //db에서 삭제하는 구문 추가 예정
    },

    deleteItemConfirm() {
      this.favorlist.splice(this.editedIndex, 1);
      // console.log(this.editedId);
      // this.$store.dispatch("managermodule/deleteuser", {
      //   userid: this.editedId,
      // });
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
