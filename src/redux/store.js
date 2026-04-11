import { createStore, legacy_createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();

export const store = legacy_createStore(rootReducer , enhancer);