import { Footer } from "./Footer";
import { Header } from "./Header";
import { PortfolioProvider } from "../context/context";
import { prefix } from "../config/config";

export const Layout = (props) => {
  const { title, children } = props;

  return (
    <PortfolioProvider value={{ prefix }}>
      <main className="flex flex-col h-full font-sans">
        <Header />
        <div className="mt-24 mb-2 mx-2">
          <div className="flex justify-center items-center">{title}</div>
          <div className="border border-gray-900 px-2 py-4">{children}</div>
        </div>
        <Footer />
      </main>
    </PortfolioProvider>
  );
};
