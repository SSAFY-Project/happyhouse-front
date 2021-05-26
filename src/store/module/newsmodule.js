import axios from "axios";
import cheerio from "cheerio";

const state = {
  newsList: [],
  news: Object,
};
const getters = {
  newgetter() {
    return state.newsList;
  },
};
const mutations = {
  ADDNEWS(state, payload) {
    state.newsList.push(payload);
  },
  CLEAR(state) {
    state.newsList = [];
  },
};
const actions = {
  getnews({ commit }) {
    commit("CLEAR");
    axios.get("https://land.naver.com/news/").then((data) => {
      let $ = cheerio.load(data.data);
      let link =
        "https://land.naver.com" +
        $("#headline_news_area > div.group > dl > dt > a").attr("href");
      let title = "";
      let image = "";
      axios.get(link).then((dataa) => {
        let $$ = cheerio.load(dataa.data);
        title = $$("#content > div.article_header > h3").text();
        image = $$("#articleBody > span:nth-child(2) > img").attr("src");
        let news1 = {
          link: link,
          title: title,
          image: image,
        };
        commit("ADDNEWS", news1);
      });
      let $list = $("#headline_news_area > div.group2 > ul").children("li");
      $list.each(function () {
        let link = "https://land.naver.com" + $(this).find("a").attr("href");
        axios.get(link).then((dataa) => {
          let $$ = cheerio.load(dataa.data);
          title = $$("#content > div.article_header > h3").text();
          image = $$("img").attr("src");
          let news2 = {
            link: link,
            title: title,
            image: image,
          };
          commit("ADDNEWS", news2);
        });
      });
    });
  },
};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};
