"use client"

import React, { useState } from 'react';
import { BsSendPlusFill } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import swal from 'sweetalert';

export default function PostComment() {
    const [askQuestion, setAskQuestion] = useState("");

    const sendQuestionHandler = (event) => {
        event.preventDefault();

        if (askQuestion.trim() === "") {
            swal({
                title: "لطفا سوال خود را وارد کنید!",
                icon: "warning",
                button: "متوجه شدم",
            });
            return;
        }

        swal({
            title: "درخواست شما با موفقیت ثبت شد",
            icon: "success",
            buttons: "در صورت عدم دریافت پاسخ طی 48 ساعت آینده از طریق ایمیل با من ارتباط بگیرید.",
        });

        // Clear the textarea after submission
        setAskQuestion("");
    }

    return (
        <form className="comment-form" onSubmit={sendQuestionHandler}>
            <textarea
                id="commentForm"
                className="textarea textarea--white form-control"
                required
                value={askQuestion}
                onChange={(event) => setAskQuestion(event.target.value)}
                placeholder="سوال خود را بپرسید..."
                rows="1"
            ></textarea>
            <button type="submit" className="btn">
                <i className="font-icon">
                    <BsSendPlusFill className='instagram-icon' />
                </i>
            </button>
            <div className="dropdown dropup">
                <i className="font-icon" id="dropdownEmoji" data-toggle="dropdown" aria-haspopup="true">
                    <VscSmiley className="instagram-icon" />
                </i>
            </div>
        </form>
    );
}
