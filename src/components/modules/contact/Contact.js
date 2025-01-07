"use client"
import React, { useState } from 'react'
import PostComment from '@/components/templates/comments/PostComment'
import swal from 'sweetalert'; // Make sure to install sweetalert if you haven't
import { BsSendPlusFill } from "react-icons/bs";


export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendCommentHandler = (event) => {
        event.preventDefault();


        swal({
            title: "کامنت شما با موفقیت ثبت شد",
            icon: "success",
            buttons: "اوکی"
        });

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <div className="pb-2">
                <h1 className="title title--h1 title__separate">تماس با من</h1>
            </div>
            <PostComment />
            <br />
            <h2 className="title title--h3">فرم ثبت نظرات</h2>

            <form id="contact-form" className="contact-form" onSubmit={sendCommentHandler}>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <i className="font-icon icon-user"></i>
                        <input
                            type="text"
                            className="input input__icon form-control"
                            id="nameContact"
                            name="nameContact"
                            placeholder="نام و نام خانوادگی"
                            required
                            autoComplete="on"
                            value={name}
                            onChange={(event) => setName(event.target.value)} // Fix:set name correctly
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <i className="font-icon icon-envelope"></i>
                        <input
                            type="email"
                            className="input input__icon form-control"
                            id="emailContact"
                            name="emailContact"
                            placeholder="آدرس ایمیل"
                            required
                            autoComplete="on"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-12 col-md-12">
                        <textarea
                            className="textarea form-control"
                            id="messageContact"
                            name="messageContact"
                            placeholder="پیام ..."
                            rows="4"
                            required
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        ></textarea>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                        <div id="validator-contact" className="hidden"></div>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-2 text-left">
                        <button type="submit" className="btn">
                            <i className="font-icon">                    <BsSendPlusFill className='instagram-icon' />
                            </i> ارسال پیام
                        </button>
                    </div>
                </div>
            </form>
            <br/>
        </>
    );
}
