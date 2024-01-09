function hideLoader() {
    const colorWrapper = document.getElementById("colorWrapper");

    const tl = gsap.timeline();

    tl.to(colorWrapper, {
        duration: 2,
        // delay: 2,
        y: -2000,
        // opacity: 0,
        // ease: "bounce",
    });
    // tl.to(colorWrapper, {
    //     duration: 2,
    //     delay: 2
    // });
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      sleep(2000).then(() => { colorWrapper.remove();  });
}