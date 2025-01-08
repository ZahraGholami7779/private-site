// import Navbar from "@/components/modules/navbar/Navbar";
// import Sidebar from "@/components/modules/sidebar/Sidebar";
// import About from "@/components/templates/about/About";
// import BackToTop from "@/components/templates/BackToTop/BackToTop";
// import Comments from "@/components/templates/comments/Comments";
// import Preloader from "@/components/templates/preloader/Preloader";
// import Skill from "@/components/templates/skill/Skill";


// export default function Home() {
//   const [isMobile, setIsMobile] = useState(false);
//   return (
//     <>
//     <Preloader></Preloader>
//      <main className="main" >
// 	    <div className="container gutter-top">
// 		    <div className="row sticky-parent">
//           <Sidebar></Sidebar>
//           <div className="col-12 col-md-12 col-xl-9">
//           <div className="box shadow pb-0">
//             <Navbar></Navbar>
//             <About></About>
//             <Skill></Skill>
//             <Comments></Comments>
//             </div>
//             <footer className="footer">© تمامی حقوق این سایت محفوظ است  </footer>

//             </div>
//         </div>
//         </div>
//         </main>
//         <div className="overlay-slideNav"></div>

//     </>
 
//   )
// }

import Navbar from "@/components/modules/navbar/Navbar";
import Sidebar from "@/components/modules/sidebar/Sidebar";
import About from "@/components/templates/about/About";
import BackToTop from "@/components/templates/BackToTop/BackToTop";
import Comments from "@/components/templates/comments/Comments";
import Preloader from "@/components/templates/preloader/Preloader";
import Skill from "@/components/templates/skill/Skill";
import UserDevice from "@/components/templates/useDevice/UserDevice";


export default function Home() {
 

  return (
    <>
     <UserDevice></UserDevice>
      <Preloader />
      <main className="main">
        <div className="container gutter-top">
          <div className="row sticky-parent">
            <Sidebar />
            <div className="col-12 col-md-12 col-xl-9">
              <div className="box shadow pb-0">
                <Navbar />
                <About />
                <Skill />
                <Comments />
              </div>
              <footer className="footer">© تمامی حقوق این سایت محفوظ است</footer>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
      <div className="overlay-slideNav"></div>
    </>
  );
}
