import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import sliderListReducer from "./sliderListReducer";
import productListReducer from "./productListReducer";
import informationListReducer from "./informationListReducer";
import brandListReducer from "./brandListReducer";
import settingListReducer from "./settingListReducer";
import changeCategoryReducer from "./changeCategoryReducer";

const rootReducer = combineReducers({
  categoryListReducer,
  sliderListReducer,
  productListReducer,
  informationListReducer,
  brandListReducer,
  settingListReducer,
  changeCategoryReducer,
});

export default rootReducer;
