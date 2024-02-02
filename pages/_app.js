// import "@/styles/globals.css";
import "@/styles/bootstrap.css";
// import "@/styles/font-awesome.min.css";
import "@/styles/responsive.css";
import "@/styles/style.css";
import "@/styles/style.scss";
import "@/styles/Home.module.css";
// import "@/styles/style.css.map";

import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutPage from '@/components/layout';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  // return <Component {...pageProps} />;
  return (
  <LayoutPage>
   <Component {...pageProps} />
 </LayoutPage>
  ) 
}
// export default function App({ Component, pageProps }) {
//    const getLayout = Component.getLayout || ((page) => page);
//   // return(
//   // <LayoutPage>
//   //  <Component {...pageProps} />
//   // </LayoutPage> 
//   // )
//   return getLayout(<Component {...pageProps} />);