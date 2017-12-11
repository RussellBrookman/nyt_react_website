// for my refrence: Info came from: https://github.com/NYTimes/public_api_specs/blob/master/archive_api/archive_api.md

import axios from "axios";
const APIKEY = "5b9d7838c77d412dbf8c7ea89e90832b";
const NYTimesUrl = "https://api.nytimes.com/svc/search/v2/" + "articlesearch.json?api-key=" + APIKEY + '&q=';

export default {
  search: function(search='') {
    return axios.get(NYTimesUrl+search);
  },
  getArticles: function() {
    return axios.get("/api/saved");
  },
  getArticle: function(id) {
    return axios.get("/api/saved/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  },
  updateArticle: function(id, articleData) {
    return axios.put("/api/saved/" + id, articleData);
  }
};