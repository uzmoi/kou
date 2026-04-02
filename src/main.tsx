// biome-ignore lint/suspicious/noDeprecatedImports: biomeがオーバーオードに非対応
import { render } from "preact";
import App from "./App.tsx";

render(<App />, document.getElementById("root")!);
