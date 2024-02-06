import "@/styles/globals.css";
import { FormContextProvider } from "@/context";

export default function App({ Component, pageProps }) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />
    </FormContextProvider>
  );
}
