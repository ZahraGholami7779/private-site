import React from 'react'

export default function Resume() {
  return (
    <>
           <div className="pb-3">
                        <h1 className="title title--h1 title__separate">رزومه</h1>
                    </div>
                    <div className="pb-0">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h2 className="title title--h3"><img className="title-icon"
                                                                 src="assets/icons/icon-education.svg" alt=""/>
                                    تحصیلات</h2>
                                <div className="timeline">
                                    <article className="timeline__item">
                                        <h5 className="title title--h5 timeline__title"> فارغ التحصیل کارشناسی مهندسی کامپیوتر(نرم افزار)</h5>
                                        <span className="timeline__period">1398-1402</span>
                                        <p className="timeline__description"> دانشگاه آزاد اسلامی واحد مرودشت</p>
                                    </article>

                                    <article className="timeline__item">
                                        <h5 className="title title--h5 timeline__title"> برنامه نویسی سایت</h5>
                                        <span className="timeline__period">1398-1402</span>
                                        <p className="timeline__description">با استفاده از منابع معتبر</p>
                                    </article>

                                    <article className="timeline__item">
                                        <h5 className="title title--h5 timeline__title">فتوشاپ</h5>
                                        <span className="timeline__period">1401 — 1399</span>
                                        <p className="timeline__description">با استفاده از منابع معتبر</p>
                                    </article>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <h2 className="title title--h3"><img className="title-icon"
                                                                 src="assets/icons/icon-experience.svg" alt=""/>
                                    تجربیات</h2>
                                <div className="timeline">
                                    <article className="timeline__item">
                                        <h5 className="title title--h5 timeline__title">موسس آکادمی بایت مسترز</h5>
                                        <span className="timeline__period">1402 — هم اکنون</span>
                                        <p className="timeline__description">آکادمی برنامه نویسی بایت مسترز </p>
                                    </article>

                                    <article className="timeline__item">
                                        <h5 className="title title--h5 timeline__title">مدرس آکادمی برنامه نویسی بایت مسترز</h5>
                                        <span className="timeline__period">1402 — هم اکنون</span>
                                        <p className="timeline__description">آکادمی برنامه نویسی بایت مسترز</p>
                                    </article>

                                    <article className="timeline__item">
                                        <h5 className="title title--h5 timeline__title"> برنامه نویس و توسعه دهنده وب</h5>
                                        <span className="timeline__period">1398 — هم اکنون</span>
                                        <p className="timeline__description">آماده همکاری با شرکت ها و استارت آپ ها</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}
