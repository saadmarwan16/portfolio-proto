import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-24 my-14">
        <div className="col-span-12 p-4 text-center bg-dark-500 md:col-span-5 lg:col-span-4 rounded-2xl shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="col-span-12 bg-dark-500 md:col-span-7 lg:col-span-8 rounded-2xl shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
  );
}

export default MyApp;
