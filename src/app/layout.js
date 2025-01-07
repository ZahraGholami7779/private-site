// 
import "../../public/assets/styles/vendors/bootstrap.min.css";
import "../../public/assets/styles/vendors/swiper.min.css";
import "../../public/assets/styles/vendors/simplebar.min.css";
import "../../public/assets/styles/mapbox-gl.css";
import "../../public/assets/demo/style-demo.css"
import "../styles/global.css";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "زهرا غلامی | توسعه دهنده وب",
  description: 'برنامه نویس و توسعه دهنده وب',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="author" content="zahragolami" />
        <meta name="description" content="resume-site" />

        <meta property="og:title" content="زهرا غلامی | توسعه دهنده وب" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="YOUR_URL_HERE" />
        <meta property="og:image" content="/assets/images/social.jpg" />
        <meta property="og:description" content="برنامه نویس و توسعه دهنده وب" />
        <meta property="og:site_name" content="YOUR_SITE_NAME" />
      </Head>

      <body className="bg-triangles">
        {children}
        <Script src="/assets/js/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/common.js" strategy="lazyOnload" />
        <Script src="/assets/js/mapbox-gl.js" strategy="lazyOnload" />
        <Script src="/assets/demo/plugins-demo.js"  strategy="lazyOnload" />
      </body>
    </html>
  );
}
