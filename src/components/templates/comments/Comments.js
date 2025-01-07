import React from 'react';
import Image from 'next/image';

export default function CustomerReviews() {
  return (
    <>
      <div className="box-inner box-inner--white">
        <h2 className="title title--h3">نظرات شما</h2>

        <div className="swiper-container js-carousel-review">
          <div className="swiper-wrapper">
            <div className="swiper-slide review-item">
              <div className="avatar avatar--80">
                <Image src="/assets/img/image_03.jpg"  height={80} width={80} />
              </div>
              <h4 className="title title--h5"> رامین </h4>
              <p className="review-item__caption">دیدن سایتت باعث خوشحالیمونه حتما همراهت خواهیم بود</p>
            </div>

            <div className="swiper-slide review-item">
              <div className="avatar avatar--80">
                <Image src="/assets/img/image_03.jpg"  height={80} width={80} />
              </div>
              <h4 className="title title--h5">لیلا </h4>
              <p className="review-item__caption">بهت افتخار میکنم </p>
            </div>

            <div className="swiper-slide review-item">
              <div className="avatar avatar--80">
                <Image src="/assets/img/image_03.jpg"  height={80} width={80} />
              </div>
              <h4 className="title title--h5">مریم</h4>
              <p className="review-item__caption">به امید موفقیت های بیشترت عزیزم :)</p>
            </div>

            <div className="swiper-slide review-item">
              <div className="avatar avatar--80">
                <Image src="/assets/img/image_03.jpg"  height={80} width={80} />
              </div>
              <h4 className="title title--h5">بایت مسترز</h4>
              <p className="review-item__caption">به امید درخشیدن در این فضای دیجیتال</p>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
}
