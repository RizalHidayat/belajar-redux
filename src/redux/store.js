import { createStore } from "redux";

const authState = {
  data: {
    name: "rizal",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
};
// function/reducer terminal penghubung state ke store
const authReducer = (state = authState) => {
  return state;
};

export const store = createStore(authReducer);
