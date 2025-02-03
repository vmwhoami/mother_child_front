import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Correct import
import { Provider } from "react-redux";
import App from "./components/App";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // ✅ Use `createRoot`

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance
reportWebVitals();
