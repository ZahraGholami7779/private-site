"use client"
import { useEffect } from 'react';
import anime from 'animejs';
import imagesLoaded from 'imagesloaded';

const Preloader = () => {
    useEffect(() => {

        function progressBar() {
            $('.progress').each(function() {
                var ctrl = new ScrollMagic.Controller();
                new ScrollMagic.Scene({
                    triggerElement: '.progress',
                    triggerHook: 'onEnter',
                    duration: 300
                })
                .addTo(ctrl)
                .on("enter", function (e) {
                    var progressBar = $('.progress-bar');
                    progressBar.each(function(indx){
                        $(this).css({'width': $(this).attr('aria-valuenow') + '%', 'z-index': '2'});
                    });
                });
            });
        }
        // Animation when the component mounts
        anime({
            targets: 'body',
            opacity: 1,
            delay: 400,
            complete: function(anim) {
                progressBar(); // Init progress bar
            }
        });

        // Preloader images
        const imgLoad = imagesLoaded(document.querySelectorAll('body, .js-img-load'), { background: true });
        imgLoad.on('always', function() {
            preloader(); // Init preloader
        });

        function preloader() {
            var tl = anime.timeline({});
            tl
                .add({
                    targets: '.preloader',
                    duration: 1,
                    opacity: 1
                })
                .add({
                    targets: '.circle-pulse',
                    duration: 300,
                    opacity: 1,
                    zIndex: '-1',
                    easing: 'easeInOutQuart'
                }, '+=500')
                .add({
                    targets: '.preloader__progress span',
                    duration: 500,
                    width: '100%',
                    easing: 'easeInOutQuart'
                }, '-=500')
                .add({
                    targets: '.preloader',
                    duration: 500,
                    opacity: 0,
                    zIndex: '-1',
                    easing: 'easeInOutQuart'
                });
        }

        // Cleanup function for imagesLoaded event listener
        return () => {
            imgLoad.off('always');
        };
    }, []); // Empty dependency array to run this effect on mount



    return (
        <div className="preloader">
            <div className="preloader__wrap">
                <div className="circle-pulse">
                    <div className="circle-pulse__1"></div>
                    <div className="circle-pulse__2"></div>
                </div>
                <div className="preloader__progress"><span></span></div>
            </div>
        </div>
    );
};

export default Preloader;
