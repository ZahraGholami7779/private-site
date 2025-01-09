// import React from 'react';
// import Image from 'next/image';

// export default function CustomerReviews() {
//   return (
//     <>
//       <div className="box-inner box-inner--white">
//         <h2 className="title title--h3">نظرات شما</h2>

//         <div className="swiper-container js-carousel-review">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide review-item">
//               <div className="avatar avatar--80">
//                 <Image src="/assets/img/image_03.jpg"  height={80} width={80} />
//               </div>
//               <h4 className="title title--h5"> رامین </h4>
//               <p className="review-item__caption">دیدن سایتت باعث خوشحالیمونه حتما همراهت خواهیم بود</p>
//             </div>

//             <div className="swiper-slide review-item">
//               <div className="avatar avatar--80">
//                 <Image src="/assets/img/image_03.jpg"  height={80} width={80} />
//               </div>
//               <h4 className="title title--h5">لیلا </h4>
//               <p className="review-item__caption">بهت افتخار میکنم </p>
//             </div>

//             <div className="swiper-slide review-item">
//               <div className="avatar avatar--80">
//                 <Image src="/assets/img/image_03.jpg"  height={80} width={80} />
//               </div>
//               <h4 className="title title--h5">مریم</h4>
//               <p className="review-item__caption">به امید موفقیت های بیشترت عزیزم :)</p>
//             </div>

//             <div className="swiper-slide review-item">
//               <div className="avatar avatar--80">
//                 <Image src="/assets/img/image_03.jpg"  height={80} width={80} />
//               </div>
//               <h4 className="title title--h5">بایت مسترز</h4>
//               <p className="review-item__caption">به امید درخشیدن در این فضای دیجیتال</p>
//             </div>
//           </div>

//           <div className="swiper-pagination"></div>
//         </div>
//       </div>
//     </>
//   );
// }


// "use client"
// import React, { useEffect } from 'react';
// import Image from 'next/image';
// import Swiper from 'swiper';
// import $ from "jquery"
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// export default function CustomerReviews() {
//   useEffect(() => {
//     const swiper = new Swiper('.js-carousel-review', {
//       slidesPerView: 2,
//       spaceBetween: 30,
//       speed: 300,
//       grabCursor: true,
//       watchOverflow: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       autoplay: {
//         delay: 5000,
//       },
//       breakpoints: {
//         580: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         991: {
//           slidesPerView: 1,
//         },
//       },
//     });

//     // Cleanup function to destroy the swiper instance on unmount
//     return () => {
//       if (swiper) {
//         swiper.destroy();
//       }
//     };
//   }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

//   return (
//     <>
//       <div className="box-inner box-inner--white">
//         <h2 className="title title--h3">نظرات شما</h2>

//         <div className="swiper-container js-carousel-review">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide review-item">
//               <div className="avatar avatar--80">
//                 <Image src="/assets/img/image_03.jpg" height={80} width={80} />
//               </div>
//               <h4 className="title title--h5"> رامین </h4>
//               <p className="review-item__caption">دیدن سایتت باعث خوشحالیمونه حتما همراهت خواهیم بود</p>
//             </div>

//             <div className="swiper-slide review-item">
//               <div className="avatar avatar--80">
//                 <Image src="/assets/img/image_03.jpg" height={80} width={80} />
//               </div>
//               <h4 className="title title--h5">لیلا </h4>
//               <p className="review-item__caption">بهت افتخار میکنم </p>
//             </div>

//             <div className="swiper-slide review-item">
//               <div className="avatar avatar--80">
//                 <Image src="/assets/img/image_03.jpg" height={80} width={80} />
//               </div>
//               <h4 className="title title--h5">مریم</h4>
//               <p className="review-item__caption">به امید موفقیت های بیشترت عزیزم :)</p>
//             </div>

//             <div className="swiper-slide review-item">
//               <div className="avatar avatar--80">
//                 <Image src="/assets/img/image_03.jpg" height={80} width={80} />
//               </div>
//               <h4 className="title title--h5">بایت مسترز</h4>
//               <p className="review-item__caption">به امید درخشیدن در این فضای دیجیتال</p>
//             </div>
//           </div>

//           <div className="swiper-pagination"></div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function CustomerReviews() {
  return (
    <div className="box-inner box-inner--white">
      <h2 className="title title--h3">نظرات شما</h2>

      <Swiper
        className="js-carousel-review"
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          bulletElement:true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          580: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 1,
          },
        }}
      >
        {[
          {
            name: "بایت مسترز",
            caption: "به امید درخشیدن در این فضای دیجیتال",
          },
          {
            name: "رامین",
            caption: "دیدن سایتت باعث خوشحالیمونه حتما همراهت خواهیم بود",
          },
          {
            name: "لیلا",
            caption: "بهت افتخار میکنم",
          },
          {
            name: "مریم",
            caption: "به امید موفقیت های بیشترت عزیزم :)",
          },
      
        ].map((review, index) => (
          <SwiperSlide className="review-item" key={index}>
            <div className="avatar avatar--80">
              <Image src="/assets/img/image_03.jpg" alt={review.name} height={80} width={80} />
            </div>
            <h4 className="title title--h5">{review.name}</h4>
            <p className="review-item__caption">{review.caption}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


