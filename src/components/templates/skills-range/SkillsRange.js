// "use client"
// import React, { useEffect } from 'react'

// export default function SkillsRange() {

//     useEffect(()=>{

//     })
//   return (
//     <>
//         <div className="box-inner box-inner--rounded">
//         <h2 className="title title--h3 text-center">مهارت های کدنویسی</h2>

//                         <div className="row">
//                             <div className="col-12 col-lg-6">
//                                 <div className="box box__second">
//                                     <div className="progress">
//                                         <div className="progress-bar" role="progressbar" aria-valuenow="60"
//                                              aria-valuemin="0" aria-valuemax="100">
//                                             <div className="progress-text"><span>Web Design</span><span>60%</span></div>
//                                         </div>
//                                         <div className="progress-text"><span>Web Design</span></div>
//                                     </div>

//                                     <div className="progress">
//                                         <div className="progress-bar" role="progressbar" aria-valuenow="52"
//                                              aria-valuemin="0" aria-valuemax="100">
//                                             <div className="progress-text"><span>Node js</span><span>52%</span></div>
//                                         </div>
//                                         <div className="progress-text"><span>Node Js</span></div>
//                                     </div>

//                                     <div className="progress">
//                                         <div className="progress-bar" role="progressbar" aria-valuenow="45"
//                                              aria-valuemin="0" aria-valuemax="100">
//                                             <div className="progress-text"><span>Mongo DB</span><span>45%</span></div>
//                                         </div>
//                                         <div className="progress-text"><span>Mongo DB</span></div>
//                                     </div>

//                                     <div className="progress">
//                                         <div className="progress-bar" role="progressbar" aria-valuenow="82"
//                                              aria-valuemin="0" aria-valuemax="100">
//                                             <div className="progress-text"><span>Tailwind,Bootstrap</span><span>82%</span></div>
//                                         </div>
//                                         <div className="progress-text"><span>Tailwind,Bootstrap</span></div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-12 col-lg-6 mt-4 mt-lg-0">
//                                 <div className="box box__second">
//                                     <div className="progress">
//                                         <div className="progress-bar" role="progressbar" aria-valuenow="90"
//                                              aria-valuemin="0" aria-valuemax="100">
//                                             <div className="progress-text"><span>Html,Css</span><span>90%</span></div>
//                                         </div>
//                                         <div className="progress-text"><span>Html,Css</span></div>
//                                     </div>

//                                     <div className="progress">
//                                         <div className="progress-bar" role="progressbar" aria-valuenow="85"
//                                              aria-valuemin="0" aria-valuemax="100">
//                                             <div className="progress-text"><span>Javascript</span><span>85%</span></div>
//                                         </div>
//                                         <div className="progress-text"><span>Javascript</span></div>
//                                     </div>

//                                     <div className="progress">
//                                         <div className="progress-bar" role="progressbar" aria-valuenow="85"
//                                              aria-valuemin="0" aria-valuemax="100">
//                                             <div className="progress-text"><span>React Js</span><span>85%</span></div>
//                                         </div>
//                                         <div className="progress-text"><span>React Js</span></div>
//                                     </div>

//                                     <div className="progress">
//                                         <div className="progress-bar" role="progressbar" aria-valuenow="78"
//                                              aria-valuemin="0" aria-valuemax="100">
//                                             <div className="progress-text"><span>Next Js</span><span>78%</span></div>
//                                         </div>
//                                         <div className="progress-text"><span>Next Js</span></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//     </>
//   )
// }


"use client"
import React, { useEffect, useRef } from 'react';

export default function SkillsRange() {
    const progressBarsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerPoint = window.innerHeight; // Adjust as needed for your trigger
            const progressBars = progressBarsRef.current;

            progressBars.forEach((bar) => {
                const rect = bar.getBoundingClientRect();
                if (rect.top <= triggerPoint) {
                    const percentage = bar.getAttribute('aria-valuenow');
                    bar.style.width = `${percentage}%`;
                    bar.style.zIndex = '2';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it once to set width if already in view

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const skills = [
        { name: 'Web Design', value: 60 },
        { name: 'Node js', value: 52 },
        { name: 'Mongo DB', value: 45 },
        { name: 'Tailwind, Bootstrap', value: 82 },
        { name: 'Html, Css', value: 90 },
        { name: 'Javascript', value: 85 },
        { name: 'React Js', value: 85 },
        { name: 'Next Js', value: 78 },
    ];

    return (
        <div className="box-inner box-inner--rounded">
            <h2 className="title title--h3 text-center">مهارت های کدنویسی</h2>
            <div className="row">
                {skills.map((skill, index) => (
                    <div className="col-12 col-lg-6" key={index}>
                        <div className="box box__second">
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={skill.value}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    ref={(el) => (progressBarsRef.current[index] = el)}
                                >
                                    <div className="progress-text">
                                        <span>{skill.name}</span>
                                        <span>{skill.value}%</span>
                                    </div>
                                </div>
                                <div className="progress-text">
                                    <span>{skill.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

