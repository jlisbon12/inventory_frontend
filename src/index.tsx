import App from "./App";
import StoreProvider from "./utils/store";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
