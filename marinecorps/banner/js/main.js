// Banner Slides
var slides = [{
    image: 'img/img1.jpg',
    title: 'Into The Blue',
    text: 'The Marines attended UET at the base pool to remain prepared in the event of aircraft crash into a body of water, requiring the persons aboard to make an espace.',
    video: 'http://youtube.com/',
    url: '#'
  }, {
    image: 'img/img2.jpg',
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor dolor, sagittis blandit elit. Integer accumsan diam sit amet nisi efficitur iaculis.',
    video: 'https://www.youtube.com/watch?v=ZyPpwxtUK7o',
    url: '#'
  }, {
    image: 'img/img3.jpg',
    title: 'Sit Amet',
    text: ' Fusce tincidunt sem vel ornare tempor. Etiam sagittis felis id leo lobortis, vulputate consequat odio mollis. Mauris vel augue varius.',
    video: 'https://www.youtube.com/',
    url: '#'
  }, {
    image: 'img/img4.jpg',
    title: 'Consectetur',
    text: 'Mauris id porttitor dolor, sagittis blandit elit. Integer accumsan diam sit amet nisi efficitur iaculis.',
    video: 'https://www.youtube.com/',
    url: '#'
  }, {
    image: 'img/img5.jpg',
    title: 'Mauris porttitor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor dolor, sagittis blandit elit. Integer accumsan diam sit amet nisi efficitur iaculis.',
    video: 'https://www.youtube.com/',
    url: '#'
  }, {
    image: 'img/img6.jpg',
    title: 'Sagittis Blandit',
    text: 'Integer accumsan diam sit amet nisi efficitur iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor dolor, sagittis blandit elit. ',
    video: 'https://www.youtube.com/',
    url: '#'
  }, {
    image: 'img/img7.jpg',
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor dolor, sagittis blandit elit. Integer accumsan diam sit amet nisi efficitur iaculis.',
    video: 'https://www.youtube.com/',
    url: '#'
  }, {
    image: 'img/img8.jpg',
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor dolor, sagittis blandit elit. Integer accumsan diam sit amet nisi efficitur iaculis.',
    video: 'https://www.youtube.com/',
    url: '#'
  }, {
    image: 'img/img9.jpg',
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor dolor, sagittis blandit elit. Integer accumsan diam sit amet nisi efficitur iaculis.',
    video: 'https://www.youtube.com/',
    url: '#'
  }, {
    image: 'img/img10.jpg',
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor dolor, sagittis blandit elit. Integer accumsan diam sit amet nisi efficitur iaculis.',
    video: 'https://www.youtube.com/',
    url: '#'
  }, {
    image: 'img/img11.jpg',
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor dolor, sagittis blandit elit. Integer accumsan diam sit amet nisi efficitur iaculis.',
    video: 'https://www.youtube.com/',
    url: '#'
  }, {
    image: 'img/img12.jpg',
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor dolor, sagittis blandit elit. Integer accumsan diam sit amet nisi efficitur iaculis.',
    video: 'https://www.youtube.com/',
    url: '#'
  }
];

// on-point announcer
var Announcer = function(id, btnLeftId, btnRightId, pagerId, btnCloseId) {
  var close = btnCloseId ? document.getElementById(btnCloseId) : null;
  var carousel = new Carousel(id, pagerId, btnLeftId, btnRightId);

  function hide() {
    document.body.className = document.body.className.replace(' with-on-spot', '');
  }

  function open() {
    window.setTimeout(function() {
      document.body.className += ' with-on-spot';
    }, 1000);
  }

  if (close) {
    close.addEventListener('click', hide, false);
    close.addEventListener('touch', hide, false);
  }

  open();
}

// any carousel
var Carousel = function(stripId, pagerId, leftControlId, rightControlId) {
  var strip, pager, leftControl, rightControl, current, quantity;
  strip = stripId ? document.getElementById(stripId) : null;
  pager = pagerId ? document.getElementById(pagerId) : null;
  leftControl = leftControlId ? document.getElementById(leftControlId) : null;
  rightControl = rightControlId ? document.getElementById(rightControlId) : null;
  if (!strip || !leftControl || !rightControl) return;

  function setup() {
    current = 0;
    quantity = strip.children.length
    strip.style.width = quantity * 100 + '%';
    pager.innerHTML = (current + 1) + ' of ' + quantity;
    for (var i = 0; i < quantity; i++) {
      strip.children[i].style.width = 100 / quantity + '%';
    }
  }

  function moveLeft() {
    console.log('moving left');
    if (current + 1 <= 0) {
      pager.innerHTML = (Math.abs(current + 1) + 1) + ' of ' + quantity;
      TweenMax.to(strip, 0.5, {
        x: (++current * 100) + '%',
        ease: 'cubic-bezier(.67,.54,.43,.78)',
        onComplete: function(){ console.log('end');}
      });
    }
  }

  function moveRight() {
    console.log('moving right');
    if (Math.abs(current - 1) < quantity) {
      pager.innerHTML = (Math.abs(current - 1) + 1) + ' of ' + quantity;
      TweenMax.to(strip, 0.5, {
        x: (--current * 100) + '%',
        ease: 'cubic-bezier(.67,.54,.43,.78)',
        onComplete: function(){ console.log('end');}
      });
    }
  }

  leftControl.addEventListener('click', moveLeft, false);
  rightControl.addEventListener('click', moveRight, false);
  leftControl.addEventListener('touch', moveLeft, false);
  rightControl.addEventListener('touch', moveRight, false);

  setup();
}

var Banner = function(bannerId, bannerSlides) {
  var element = document.getElementById(bannerId) || null;
  var slides = bannerSlides || [];
  if (!element || slides.length == 0) return;

  var slides = bannerSlides;
  var nextSlide = {
    element: element.querySelector('div.next-slide') || null,
    number: element.querySelector('div.next-slide>.content>.row>h5') || null,
    title: element.querySelector('div.next-slide>.content>.row>h1') || null,
    text: element.querySelector('div.next-slide>.content>.row>p') || null,
    url: element.querySelector('div.next-slide>.content>.row>aside a:nth-child(1)') || null,
    video: element.querySelector('div.next-slide>.content>.row>aside a:nth-child(2)') || null
  };

  var currentSlide = {
    element: element.querySelector('div.current-slide') || null,
    number: element.querySelector('div.current-slide>.content>.row>h5') || null,
    title: element.querySelector('div.current-slide>.content>.row>h1') || null,
    text: element.querySelector('div.current-slide>.content>.row>p') || null,
    url: element.querySelector('div.current-slide>.content>.row>aside a:nth-child(1)') || null,
    video: element.querySelector('div.current-slide>.content>.row>aside a:nth-child(2)') || null
  };

  var counter = element.querySelector('div.counter');
  var circles = [];
  var current = -1;

  var navigation = {
    nextLink: element.querySelector('div.navigate>.next'),
    nextTitle: element.querySelector('div.navigate>.next>.title'),
    prevLink: element.querySelector('div.navigate>.prev'),
    prevTitle: element.querySelector('div.navigate>.prev>.title')
  };

  function update(index, slide) {
    slide.number.innerHTML = (index < 10) ? "0"+ (index+1) : (index+1);
    slide.title.innerHTML = slides[index].title;
    slide.text.innerHTML = slides[index].text;
    slide.url.setAttribute('href', slides[index].url);
    slide.video.setAttribute('href', slides[index].video);
  }

  function init() {
    makeCircles();
    load();
    preload();
    setInterval(fade, 5000);

    // continue if approved to code
    //navigation.nextLink.addEventListener();
    //navigation.prevLink.addEventListener();
  }

  function makeCircles() {
    for (var i = 0; i < slides.length; i++) {
      var circle = document.createElement('div');
      circle.className = 'circle';
      counter.appendChild(circle);
      circles.push(circle);
    }
  }

  function load() {
    if (++current >= slides.length) current = 0;
    circles[current].className = 'circle current';

    if (current == 0) circles[slides.length - 1].className = 'circle';
    else circles[current - 1].className = 'circle';

    currentSlide.element.style.backgroundImage = "url(" + slides[current].image + ")";
    update(current, currentSlide);
    navigate();
  }

  function navigate() {
    var prevIndex = (current - 1) < 0 ? slides.length - 1 : current - 1;
    var nextIndex = (current + 1) >= slides.length ? 0 : current + 1;
    navigation.prevTitle.innerHTML = slides[prevIndex].title;
    navigation.nextTitle.innerHTML = slides[nextIndex].title;
  }

  function preload() {
    var next = ((current + 1) >= slides.length) ? 0 : current + 1;
    nextSlide.element.style.backgroundImage = "url(" + slides[next].image + ")";
    update(next, nextSlide);
  }

  function fade() {
    currentSlide.element.className = 'current-slide fade-out';
    setTimeout(function() {
      load();
      preload();
      currentSlide.element.className = 'current-slide';
    }, 500);
  }
  init();
}
