import { SWRConfig } from "swr";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = (props) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="mt-24 mb-4 mx-2">
        <div className="flex justify-center items-center">{title}</div>
        <div className="border border-gray-900 px-2 py-4">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
