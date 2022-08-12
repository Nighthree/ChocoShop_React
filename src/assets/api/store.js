import axios from "axios";
// import store from "@/store/index";

const eventRequestStore = axios.create({
  baseURL: process.env.REACT_APP_STORE_API_PATH,
});

eventRequestStore.interceptors.request.use(
  (config) => {
    // store.dispatch("setLoading", true);
    return config;
  },
  (err) => {
    // store.dispatch("setLoading", false);
    console.log(err + "請求失敗");
  }
);
eventRequestStore.interceptors.response.use(
  (res) => {
    // store.dispatch("setLoading", false);
    return res;
  },
  (err) => {
    // store.dispatch("setLoading", false);
    console.log("回應失敗" + err);
    alert(err);
  }
);

export const get_products_all = () => {
  return eventRequestStore.get(`/products/all`)
}