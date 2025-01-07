import React from 'react'

export default function Skill() {
    return (
        <>
            <div className="box-inner pb-0">
                <h2 className="title title--h3">چه کاری انجام می دهم</h2>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="case-item box box__second">
                            <img className="case-item__icon" src="assets/icons/icon-design.svg" alt="" />
                            <div>
                                <h3 className="title title--h5">طراحی وب سایت</h3>
                                <p className="case-item__caption">طراحی مدرن ،کاربر پسند و به روز</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="case-item box box__second">
                            <img className="case-item__icon" src="assets/icons/icon-dev.svg" alt="" />
                            <div>
                                <h3 className="title title--h5">توسعه دهنده وب</h3>
                                <p className="case-item__caption">بهره گیری از تکنولوژی روز در کد نویسی و توسعه</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="case-item box box__second">
                            <img className="case-item__icon" src="assets/icons/icon-education.svg" alt="" />
                            <div>
                                <h3 className="title title--h5">آموزش برنامه نویسی</h3>
                                <p className="case-item__caption">مدرس آکادمی برنامه نویسی بایت مسترز</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="case-item box box__second">
                            <img className="case-item__icon" src="assets/icons/icon-experience.svg" alt="" />
                            <div>
                                <h3 className="title title--h5">فریلنسر</h3>
                                <p className="case-item__caption">آماده همکاری با شرکت ها و استارت آپ ها</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
