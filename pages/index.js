import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LandingPage from "@/components/landingPage";
import LayoutPage from "@/components/layout";

// import { Provider } from "react-redux";
//  import store from "@/redux/reducer/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     {/* <Provider store={store}>  */}
     <LandingPage/>
      {/* </Provider>  */}
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

