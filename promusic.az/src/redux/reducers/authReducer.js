import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import alertify from "alertifyjs";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  userName: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return console.log("Welcome...");

    case "SIGN_IN":
      alertify.success("You are signed in");

      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        userName: user.userName,
        email: user.email,
        _id: user._id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("Goodbye...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
