gsap.from('#illustration1', {
    scrollTrigger: '#content1',
    y: 200,
    duration: 1,
    opacity: 0,
    scrub: 1
});
gsap.from('#illustration2', {
    scrollTrigger: '#content2',
    y: 200,
    duration: 1,
    opacity: 0,
    scrub: 1
});
gsap.from('#illustration3', {
    scrollTrigger: '#content3',
    y: 200,
    duration: 1,
    opacity: 0,
    scrub: 1
});








// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.feature-container',
//         start: 'center bottom',
//         end: 'center top'
//     }
// });

// tl.from('#illustration1', { y: 200, opacity: 0, duration: 1.5})
// tl.from('#illustration2', { y: 200, opacity: 0, duration: 1.5})
// tl.from('#illustration3', { y: 200, opacity: 0, duration: 1.5})