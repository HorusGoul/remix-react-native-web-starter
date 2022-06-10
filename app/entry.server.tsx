import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node";
import { AppRegistry } from "react-native";
import { ReplaceWithStylesSSRTag } from "./rn-styles";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const App = () => <RemixServer context={remixContext} url={request.url} />;

  AppRegistry.registerComponent("App", () => App);

  let markup = renderToString(<App />);

  // @ts-ignore
  const { getStyleElement } = AppRegistry.getApplication("App", {});
  const stylesMarkup = renderToStaticMarkup(getStyleElement());

  markup = markup.replace(
    renderToStaticMarkup(ReplaceWithStylesSSRTag),
    stylesMarkup
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
