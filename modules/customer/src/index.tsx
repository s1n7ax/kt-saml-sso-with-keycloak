import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import kc from "./keycloak";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

(async function() {
  await kc.init();

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})();

reportWebVitals();
