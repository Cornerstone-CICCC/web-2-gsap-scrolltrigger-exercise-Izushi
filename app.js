gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE
const lightModeTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.line-one',
    start: 'top top',
    markers: true,
    scrub: true,
    pin: true
  },
});

const orTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.line-two',
    start: 'top top',
    markers: true,
    scrub: true,
    pin: true
  }
});

const darkModeTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.line-three',
    start: 'top top',
    markers: true,
    scrub: true,
    pin: true
  }
});

lightModeTL
  .to('sun', {
    x: '100vw'
  })
  .from('.line-one span', {
    y: '100vh',
    stagger: 0.2,
  })
  .to('.container', {
    backgroundColor: 'yellow',
  })
  .from('.sun', {
    x: '100vw'
  })
  .to('.sun', {
    x: '-100vw',
  })
  .to('.line-one span', {
    x: '100vw',
  }, '<')
  .to('.container', {
    backgroundColor: 'white'
  }, '<');

  orTL
    .from('.line-two span:nth-child(1)', {
      x: '-100vw',
      opacity: 0,
      scale: 10,
    })
    .from('.line-two span:nth-child(2)', {
      x: '100vw',
      opacity: 0,
      scale: 10,
    }, '<')
    .to('.line-two span:nth-child(1)', {
      y: -30,
    })
    .to('.line-two span:nth-child(1)', {
      y: 0,
    })
    .to('.line-two span:nth-child(2)', {
      y: -30,
    }, '<')
    .to('.line-two span:nth-child(2)', {
      y: 0,
    });

  darkModeTL
    .from('.line-three span', {
      y: '100vh',
      stagger: 0.2,
    })
    .to('.line-three', {
      backgroundPositionX: 0,
    })
    .to('.line-three span', {
      color: 'gray'
    }, '<')
    .from('.moon', {
      x: '100vw'
    }, '<');