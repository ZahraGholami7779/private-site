

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import anime from 'animejs'
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function Navbar() {
//   const router = useRouter();
//   const [isMenuOpen, setIsMenuOpen] = useState(true);
//   const [activeTab, setActiveTab] = useState('about'); // Default active tab
//   const sideNavRef = useRef(null);
//   const sideNavOpenRef = useRef(null);

//   const openMenuHandler = () => {
//     setIsMenuOpen(prev => !prev);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     if (window.innerWidth < 580) {
//       // Close mobile menu on tab click
//         setIsMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     const sideNavTl = anime.timeline({ autoplay: false });
//     const sideNav = sideNavRef.current;

//     if (sideNav) {
//       sideNavTl
//         .add({
//           targets: '.nav',
//           duration: 1000,
//           width: ['0', '100%'],
//           opacity: [0, 1],
//           easing: 'easeInOutBack'
//         })
//         .add({
//           targets: '.nav__item',
//           duration: 200,
//           delay: anime.stagger(50),
//           opacity: [0, 1],
//           translateX: [70, 0],
//           easing: 'easeInOutBack'
//         }, '-=500');

//       if (isMenuOpen===true) {
//         sideNavTl.play();
//       } else {
//         sideNavTl.reverse();
//       }
//     }

//     return () => {
//       document.body.classList.remove('open-menu');
//     };
//   }, [isMenuOpen]);

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.classList.add('open-menu');
//       return
//     } else {
//       document.body.classList.remove('open-menu');
//       return
//     }
//   }, [isMenuOpen]);

//   return (
//     <>
//       <div className="circle-menu">
//         <div className={`hamburger ${isMenuOpen===true ? "is-active" : ""}`} ref={sideNavOpenRef} onClick={openMenuHandler}>
//           <div className="line"></div>
//           <div className="line"></div>
//           <div className="line"></div>
//         </div>
//       </div>
//       <div className={`inner-menu js-menu sentence ${isMenuOpen===true ? "is-active" : ""}`} ref={sideNavRef}>
//         <ul className="nav">
//           <li className="nav__item">
//             <Link  href="/about" className={activeTab === 'about' ? "active" : ""} onClick={() => handleTabClick('about')}>درباره من</Link>
//           </li>
//           <li className="nav__item">
//             <Link href="/resume" className={activeTab === 'resume' ? "active" : ""} onClick={() => handleTabClick('resume')}>رزومه من</Link>
//           </li>
//           <li className="nav__item">
//             <Link href="/portfolio" className={activeTab === 'portfolio' ? 'active' : ""} onClick={() => handleTabClick('portfolio')}>نمونه کار ها</Link>
//           </li>
//           <li className={`nav__item`}>
//             <Link href="/contact" className={activeTab === 'contact' ? "active" : ""} onClick={() => handleTabClick('contact')}>تماس با من</Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }


"use client";
import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Default is closed
  const [activeTab, setActiveTab] = useState('about'); // Default active tab
  const sideNavRef = useRef(null);
  const sideNavOpenRef = useRef(null);

  const openMenuHandler = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth < 580) {
      // Close mobile menu on tab click
      setIsMenuOpen(false);
    }
  };

  const updateMenuState = () => {
    // Set the menu to closed if the window width is less than 580px
    if (window.innerWidth < 580) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true); // You can change this based on your desired behavior on larger screens
    }
  };

  useEffect(() => {
    // Set initial menu state based on window size
    updateMenuState();

    // Add event listener for resizing
    window.addEventListener('resize', updateMenuState);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('resize', updateMenuState);
    };
  }, []);

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

      if (isMenuOpen === true) {
        sideNavTl.play();
      } else {
        sideNavTl.reverse();
      }
    }

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
        <div className={`hamburger ${isMenuOpen === true ? "is-active" : ""}`} ref={sideNavOpenRef} onClick={openMenuHandler}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={`inner-menu js-menu sentence ${isMenuOpen === true ? "is-active" : ""}`} ref={sideNavRef}>
        <ul className="nav">
          <li className="nav__item">
            <Link href="/about" className={activeTab === 'about' ? "active" : ""} onClick={() => handleTabClick('about')}>درباره من</Link>
          </li>
          <li className="nav__item">
            <Link href="/resume" className={activeTab === 'resume' ? "active" : ""} onClick={() => handleTabClick('resume')}>رزومه من</Link>
          </li>
          <li className="nav__item">
            <Link href="/portfolio" className={activeTab === 'portfolio' ? 'active' : ""} onClick={() => handleTabClick('portfolio')}>نمونه کار ها</Link>
          </li>
          <li className={`nav__item`}>
            <Link href="/contact" className={activeTab === 'contact' ? "active" : ""} onClick={() => handleTabClick('contact')}>تماس با من</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

