<template>
  <v-main>
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> HashTag </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <v-row>
                <v-col cols="2">
                  <v-checkbox
                    label="대출 지원"
                    value="대출 지원"
                    v-model="interests"
                  />
                </v-col>
                <v-col cols="2">
                  <v-checkbox
                    label="주차 가능"
                    value="주차 가능"
                    v-model="interests"
                  />
                </v-col>
                <v-col cols="2">
                  <v-checkbox
                    label="역세권"
                    value="역세권"
                    v-model="interests"
                  />
                </v-col>
                <v-col cols="2">
                  <v-checkbox
                    label="공기 좋음"
                    value="공기 좋음"
                    v-model="interests"
                  />
                </v-col>
                <v-col cols="2">
                  <v-checkbox
                    label="펜트하우스"
                    value="펜트하우스"
                    v-model="interests"
                  />
                </v-col>
                <v-col cols="2">
                  <v-checkbox
                    label="옵션 1"
                    value="옵션 1"
                    v-model="interests"
                  />
                </v-col>
                <v-col cols="2">
                  <v-checkbox
                    label="옵션 2"
                    value="옵션 2"
                    v-model="interests"
                  />
                </v-col>
                <v-col cols="2">
                  <v-checkbox
                    label="옵션 3"
                    value="옵션 3"
                    v-model="interests"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-chip
        class="ma-2"
        close
        color="green"
        text-color="white"
        v-for="(item, idx) in interests"
        :key="idx"
        @click:close="interests.splice(idx, 1)"
      >
        # {{ item }}
      </v-chip>
    </v-container>
  </v-main>
</template>

<script>
//import Slider from "@vueform/slider";

export default {
  /*components: {
    Slider,
  },*/
  data() {
    return {
      interests: [],
      price: [0, 99999999999],
    };
  },
};
</script>

<style scoped></style>
