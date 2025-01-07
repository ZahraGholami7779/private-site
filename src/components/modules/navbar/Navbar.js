"use client"
import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const sideNavRef = useRef(null);
  const sideNavOpenRef = useRef(null);

  const openMenuHandler = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const sideNavTl = anime.timeline({ autoplay: false });
    const sideNav = sideNavRef.current;

    if (sideNav) {
      sideNavTl
        .add({
          targets: '.nav',
          duration: 1000,
          width: ['0', '100%'],
          opacity: [0, 1],
          easing: 'easeInOutBack'
        })
        .add({
          targets: '.nav__item',
          duration: 200,
          delay: anime.stagger(50),
          opacity: [0, 1],
          translateX: [70, 0],
          easing: 'easeInOutBack'
        }, '-=500');

      if (isMenuOpen) {
        sideNavTl.play();
      } else {
        sideNavTl.reverse();
      }
    }

    // Cleanup function to remove class on unmount
    return () => {
      document.body.classList.remove('open-menu');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('open-menu');
    } else {
      document.body.classList.remove('open-menu');
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="circle-menu">
        <div className={`hamburger ${isMenuOpen ? "is-active" : ""}`} ref={sideNavOpenRef} onClick={openMenuHandler}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={`inner-menu js-menu sentence ${isMenuOpen ? "is-active" : ""}`} ref={sideNavRef}>
        <ul className="nav">
          <li className="nav__item">
            <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>درباره من</Link>
          </li>
          <li className="nav__item">
            <Link href="/resume" className={router.pathname === "/resume" ? "active" : ""}>رزومه من</Link>
          </li>
          <li className="nav__item">
            <Link href="/portfolio" className={router.pathname === "/portfolio" ? 'active' : ""}>نمونه کار ها</Link>
          </li>
          <li className="nav__item">
            <Link href="/contact" className={router.pathname === "/contact" ? "active" : ""}>تماس با من</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
