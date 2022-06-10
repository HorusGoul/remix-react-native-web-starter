import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useReactNativeStyles } from "./rn-styles";
import { StyleSheet, View } from "react-native";
import globalStyles from "./styles/global.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStyles }];
};

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const stylesElement = useReactNativeStyles();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {stylesElement}
        <Meta />
        <Links />
      </head>
      <body>
        <View pointerEvents="box-none" style={styles.appContainer}>
          <Outlet />
        </View>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
