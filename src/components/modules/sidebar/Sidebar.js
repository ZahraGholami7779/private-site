

"use client"
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import anime from 'animejs';
import $ from 'jquery';
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";

export default function Sidebar() {
	const sidebarRef = useRef(null);

	return (
		<aside className="col-12 col-md-12 col-xl-3" ref={sidebarRef}>
			<div className="sidebar box shadow pb-0 sticky-column">
				<div className="avatar avatar--180">
					<Image
						src="/assets/img/z2.png"
						alt="Avatar"
						layout="responsive"
						width={188}
						height={188}
					/>
				</div>

				<div className="text-center">
					<h3 className="title title--h3 sidebar__user-name"><span className="weight--500">زهرا</span> غلامی </h3>
					<div className="badge badge--gray sentence"> برنامه نویس و توسعه دهنده وب</div>

					<div className="social">
						<a className="social__link" href="https://www.instagram.com/byte_masters_offical?igsh=MTFkcm51bXFjYjF1bA==">
							<RiInstagramFill className='instagram-icon' />
						</a>
						<a className="social__link" href="https://www.linkedin.com/in/zahra-gholami-9981092a0/">
							<IoLogoLinkedin className='instagram-icon' />
						</a>
						<a className="social__link" href="https://github.com/ZahraGholami7779">
							<AiOutlineGithub className='instagram-icon' />
						</a>
					</div>
				</div>

				<div className="sidebar__info box-inner box-inner--rounded">
					<ul className="contacts-block">
						<li className="contacts-block__item sentence" data-toggle="tooltip" data-placement="top" title="شعار">
							هر خط کد، یک تجربه دیجیتال جدید : )
						</li>
						<li className="contacts-block__item sentence" data-toggle="tooltip" data-placement="top" title="آدرس">
							<i className="font-icon icon-location"></i>ایران, شیراز
						</li>
						<li className="contacts-block__item sentence-email" data-toggle="tooltip" data-placement="top" title="ایمیل">
							<a href="mailto:z.gholami.7977@gmail.com"><i className="font-icon icon-envelope"></i>z.gholami.7977@gmail.com</a>
						</li>
					</ul>

					<a className="btn btn--blue-gradient sentence" href="/contact"><i className="font-icon icon-download"></i>ارتباط  با من</a>
				</div>
			</div>
		</aside>
	);
}

