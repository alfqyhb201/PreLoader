function hideLoader() {
    const colorWrapper = document.getElementById("colorWrapper");

    const tl = gsap.timeline();

    tl.to(colorWrapper, {
        duration: 2,
        // delay: 2,
        y: -2000,
        opacity: 0,
        onComplete: () => {
            console.log('loader hidden');
            window.scrollTo({ top: 0 });
            // showContent();
            colorWrapper.remove();
            }
        // opacity: 0,
        // ease: "bounce",
    });
    // tl.to(colorWrapper, {
    //     duration: 2,
    //     delay: 2
    // });
    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    //   }
      
    //   sleep(2000).then(() => { colorWrapper.remove();  });
}