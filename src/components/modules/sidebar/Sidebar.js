

// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import Image from "next/image";
// import { RiInstagramFill } from "react-icons/ri";
// import { IoLogoLinkedin } from "react-icons/io";
// import { AiOutlineGithub } from "react-icons/ai";

// export default function Sidebar() {


// 	return (
// 		<aside 
// 			className={`col-12 col-md-12 col-xl-3 `} 
		
// 		>
// 			<div className={`sidebar box shadow pb-0 sticky-column`}>
// 				<div className="avatar avatar--180">
// 					<Image
// 						src="/assets/img/z2.png"
// 						alt="Avatar"
// 						layout="responsive"
// 						width={188}
// 						height={188}
// 					/>
// 				</div>

// 				<div className="text-center">
// 					<h3 className="title title--h3 sidebar__user-name"><span className="weight--500">زهرا</span> غلامی </h3>
// 					<div className="badge badge--gray sentence"> برنامه نویس و توسعه دهنده وب</div>

// 					<div className="social">
// 						<a className="social__link" href="https://www.instagram.com/byte_masters_offical?igsh=MTFkcm51bXFjYjF1bA==">
// 							<RiInstagramFill className='instagram-icon' />
// 						</a>
// 						<a className="social__link" href="https://www.linkedin.com/in/zahra-gholami-9981092a0/">
// 							<IoLogoLinkedin className='instagram-icon' />
// 						</a>
// 						<a className="social__link" href="https://github.com/ZahraGholami7779">
// 							<AiOutlineGithub className='instagram-icon' />
// 						</a>
// 					</div>
// 				</div>

// 				<div className="sidebar__info box-inner box-inner--rounded">
// 					<ul className="contacts-block">
// 						<li className="contacts-block__item sentence" title="شعار">
// 							هر خط کد، یک تجربه دیجیتال جدید : )
// 						</li>
// 						<li className="contacts-block__item sentence" title="آدرس">
// 							<i className="font-icon icon-location"></i>ایران, شیراز
// 						</li>
// 						<li className="contacts-block__item sentence-email" title="ایمیل">
// 							<a href="mailto:z.gholami.7977@gmail.com"><i className="font-icon icon-envelope"></i>z.gholami.7977@gmail.com</a>
// 						</li>
// 					</ul>

// 					<a className="btn btn--blue-gradient sentence" href="/contact"><i className="font-icon icon-download"></i>ارتباط  با من</a>
// 				</div>
// 			</div>
// 		</aside>
// 	);
// }



"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import anime from 'animejs';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiOutlineGithub } from 'react-icons/ai';

export default function Sidebar() {
    // useEffect(() => {
    //     const stickyColumns = document.querySelectorAll('.sticky-column');
    //     const parent = document.querySelector('.sticky-parent');
    //     const screenThreshold = 1200;

    //     const handleScroll = () => {
    //         const parentRect = parent.getBoundingClientRect();
    //         stickyColumns.forEach(column => {
    //             const columnRect = column.getBoundingClientRect();
                
    //             if (window.innerWidth >= screenThreshold) {
    //                 if (columnRect.top < 0 && columnRect.bottom > 0) {
    //                     column.style.position = 'fixed';
    //                     column.style.top = '0';
    //                     animateColumn(column, columnRect.top);
    //                 } else if (columnRect.bottom > parentRect.bottom) {
    //                     column.style.position = 'absolute';
    //                     column.style.bottom = '0';
    //                     animateColumn(column, columnRect.bottom);
    //                 } else {
    //                     column.style.position = 'relative';
    //                     column.style.top = 'auto';
    //                     animateColumn(column, 0); // Reset position
    //                 }
    //             } else {
    //                 column.style.position = 'relative';
    //                 column.style.top = 'auto';
    //                 animateColumn(column, 0); // Reset position
    //             }
    //         });
    //     };

    //     const handleResize = () => {
    //         if (window.innerWidth < screenThreshold) {
    //             stickyColumns.forEach(column => {
    //                 column.style.position = 'relative';
    //                 column.style.top = 'auto';
    //                 animateColumn(column, 0); // Reset position
    //             });
    //         } else {
    //             handleScroll(); // Run scroll logic on resize
    //         }
    //     };

    //     const animateColumn = (element, scrollPosition) => {
    //         anime({
    //             targets: element,
    //             translateY: [scrollPosition * -.5, 0], // Adjust the factor for speed
    //             opacity: [1],
    //             duration: 200,
    //             easing: 'easeInOutQuad',
    //         });
    //     };

    //     // Initial call
    //     handleScroll();

    //     // Attach event listeners
    //     window.addEventListener('scroll', handleScroll);
    //     window.addEventListener('resize', handleResize);

    //     // Cleanup function
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    useEffect(() => {
        const stickyColumns = document.querySelectorAll('.sticky-column');
        const parent = document.querySelector('.sticky-parent');
        const screenThreshold = 1200;

        const handleScroll = () => {
            const parentRect = parent.getBoundingClientRect();
            stickyColumns.forEach(column => {
                const columnRect = column.getBoundingClientRect();

                if (window.innerWidth >= screenThreshold) {
                    if (columnRect.top < 0 && columnRect.bottom > 0) {
                        column.classList.add('fixed');
                        column.classList.remove('absolute', 'relative');
                        animateColumn(column, columnRect.top);
                    } else if (columnRect.bottom > parentRect.bottom) {
                        column.classList.add('absolute');
                        column.classList.remove('fixed', 'relative');
                        column.style.bottom = '0';
                        animateColumn(column, columnRect.bottom - parentRect.bottom);
                    } else {
                        column.classList.add('relative');
                        column.classList.remove('fixed', 'absolute');
                        column.style.top = 'auto';
                        animateColumn(column, 0); // Reset position
                    }
                } else {
                    column.classList.add('relative');
                    column.classList.remove('fixed', 'absolute');
                    column.style.top = 'auto';
                    animateColumn(column, 0); // Reset position
                }
            });
        };

        const handleResize = () => {
            if (window.innerWidth < screenThreshold) {
                stickyColumns.forEach(column => {
                    column.classList.add('relative');
                    column.classList.remove('fixed', 'absolute');
                    column.style.top = 'auto';
                    animateColumn(column, 0); // Reset position
                });
            } else {
                handleScroll(); // Run scroll logic on resize
            }
        };

        const animateColumn = (element, scrollPosition) => {
            anime({
                targets: element,
                translateY: [scrollPosition * -0.5, 0], // Adjust the factor for speed
                opacity: [1], // Ensure opacity is set to 1
                duration: 200,
                easing: 'easeInOutQuad',
            });
        };

        const fadeIn = (element) => {
            anime({
                targets: element,
                opacity: [1],
                duration: 200,
                easing: 'easeInOutQuad',
            });
        };

        // Initial call
        handleScroll();
        
        // Fade in all sticky columns on mount
        stickyColumns.forEach(column => {
            fadeIn(column);
        });

        // Attach event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <aside className={`col-12 col-md-12 col-xl-3 sticky`}>
            <div className={`sidebar box shadow pb-0 sticky-column`}>
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
                    <div className="badge badge--gray sentence">برنامه نویس و توسعه دهنده وب</div>

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
                        <li className="contacts-block__item sentence" title="شعار">
                            هر خط کد، یک تجربه دیجیتال جدید : )
                        </li>
                        <li className="contacts-block__item sentence" title="آدرس">
                            <i className="font-icon icon-location"></i>ایران, شیراز
                        </li>
                        <li className="contacts-block__item sentence-email" title="ایمیل">
                            <a href="mailto:z.gholami.7977@gmail.com"><i className="font-icon icon-envelope"></i>z.gholami.7977@gmail.com</a>
                        </li>
                    </ul>

                    <a className="btn btn--blue-gradient sentence" href="/contact"><i className="font-icon"></i>ارتباط  با من</a>
                </div>
            </div>
        </aside>
    );
}
