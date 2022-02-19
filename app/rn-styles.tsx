import { createContext, useContext } from "react";

export const ReactNativeStylesContext =
  createContext<React.ReactElement<unknown> | null>(null);

export function useReactNativeStyles() {
  return useContext(ReactNativeStylesContext) ?? ReplaceWithStylesSSRTag;
}

export const ReplaceWithStylesSSRTag = <meta name="REPLACE_WITH_STYLES" />;
