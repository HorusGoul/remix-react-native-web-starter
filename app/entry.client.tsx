import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { AppRegistry } from "react-native";
import { ReactNativeStylesContext } from "./rn-styles";

const App = () => <RemixBrowser />;

AppRegistry.registerComponent("App", () => App);

// @ts-ignore
const { getStyleElement } = AppRegistry.getApplication("App");

hydrateRoot(
  document,
  <ReactNativeStylesContext.Provider value={getStyleElement()}>
    <App />
  </ReactNativeStylesContext.Provider>
);
