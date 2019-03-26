import { combineReducers } from "redux";
import images from "./images";
import viewType from "./viewType";
import currentImage from "./currentImage";

export default combineReducers({ images, viewType, currentImage });