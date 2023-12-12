import Router from "./Router";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./page/Footer";
import Header from "./page/Header";

const App = (): JSX.Element => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="mt-[50px]">
        <Header />
        <Router />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
