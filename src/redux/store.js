// store.js
import { createStore } from "redux";
import rootReducer from "./reducers";
import { saveState, loadState } from "../utils/localStorage";

// Load persisted state from localStorage
const persistedState = loadState();

// Create Redux store, initializing with persisted state if available
const store = createStore(
  rootReducer,
  persistedState // This will initialize the state from localStorage
);

// Subscribe to store updates to save state to localStorage
store.subscribe(() => {
  saveState({
    addItem: store.getState().addItem, // Save only the cart (addItem) state
  });
});

export default store;
