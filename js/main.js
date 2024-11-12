$(document).ready(function(){


// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");


$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.nine_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});


$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link_collection');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open_collection');

    if (!e.data.multiple) {
      $el.find('').not($next).slideUp().parent().removeClass('open_collection');
    };
  } 

  var accordion = new Accordion($('#accordion_collection'), false);
});

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link_collection');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open_collection');

    if (!e.data.multiple) {
      $el.find('').not($next).slideUp().parent().removeClass('open_collection');
    };
  } 

  var accordion = new Accordion($('#accordion_collection2'), false);
});



$(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close, .burger2').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.burger2').toggleClass('is-open');
    $('.sliding-panel-content, .burger2, body, .sliding-panel-fade-screen, .header_left').toggleClass('is-visible');
  });
});


$('.seven_sl').slick({
        infinite: true,
        swipe: true,
        dots: false,
        autoplay: true,
    	autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 773,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
  });


$('.item_sl').slick({
        infinite: true,
        swipe: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 773,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
  });



});


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});



'use strict';



class Dropdown {
  constructor(element, options) {
    this.element = element;
    this.toggler = element.querySelector('.js-dropdown-toggler');
    this.title = element.querySelector('.js-dropdown-title');
    this.icon = element.querySelector('.js-dropdown-icon');
    this.choices = element.querySelectorAll('.js-dropdown-choice');
    
    this.classActive = options.cssElementActive || 'js-dropdown-active';
    this.classExpanded = options.cssElementExpanded || 'js-dropdown-expanded';
    
    this.modes = Array.prototype.map.call(this.choices, choice => choice.dataset['mode']);
    
    if (!this.element || !this.toggler || !this.title || !this.icon || !this.choices.length) {
      throw new Error('Something is missing! Check the layout!');
    }
    
    this.init();
  }
  
  init() {
    this.toggler.addEventListener('click', this.toggleExpanded.bind(this));
    Array.prototype.forEach.call(this.choices, choice => {
      choice.addEventListener('click', this.choose.bind(this));
    });
  }
  
  toggleExpanded() {
    if (!this.element.classList.contains(this.classExpanded) || !this.element.classList.contains('js-dropdown-expanded')) {
      this.setExpanded();
    } else {
      this.unsetExpanded();
    }
  }
  
  setExpanded() {
    this.element.classList.add(this.classExpanded, 'js-dropdown-expanded');
  }
  
  unsetExpanded() {
    this.element.classList.remove(this.classExpanded, 'js-dropdown-expanded');
  }
  
  choose(event) {
    console.log(event);
    const mode = event.target.dataset['mode'];
    const title = event.target.innerHTML;
    
    this.activate();
    this.setTitle(title);
    this.colorize(mode);
    this.setIcon(mode);
    this.unsetExpanded();
  }
  
  activate() {
    this.element.classList.add(this.classActive, 'js-dropdown-active');
  }
  
  setTitle(title) {
    this.title.innerHTML = title;
  }
  
  colorize(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.toggler.classList.remove(`dropdown__header_${item}`); });
    this.toggler.classList.add(`dropdown__header_${mode}`);
  }
  
  setIcon(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.icon.classList.remove(`fa-${item}`); });
    this.icon.classList.add(`fa-${mode}`);
  }
}

function initDropdown(options) {
  const dropdown = [];
  Array.prototype.forEach.call(document.querySelectorAll('.js-dropdown'), (item) => {
    dropdown.push(new Dropdown(item, options));
  });
}

initDropdown({ 
  cssElementActive: 'is-active',
  cssElementExpanded: 'is-expanded',
});