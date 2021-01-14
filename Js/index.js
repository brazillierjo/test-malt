console.log('onContentPrepare add calendar context : text');
console.log('onContentPrepare add calendar context : text');
console.log('onContentPrepare add calendar context : text');
var Scrolltock = function (container) {
  if (!container) container = jQuery(document);
  jQuery('a.scrollTo', container).click(function (event) {
    var pageurl = window.location.href.split('#');
    var linkurl = jQuery(this).attr('href').split('#');

    if (jQuery(this).attr('href').indexOf('#') != 0 &&
      ((jQuery(this).attr('href').indexOf('http') == 0 && pageurl[0] != linkurl[0]) ||
        jQuery(this).attr('href').indexOf('http') != 0 && pageurl[0] !=
        'https://dev.avis2sante.net/joomla-dev-mrehab-2/' + linkurl[0].replace('/joomla-dev-mrehab-2/', ''))
    ) {
      // here action is the natural redirection of the link to the page
    } else {
      event.preventDefault();
      jQuery(this).scrolltock();
    }
  });
}
jQuery(document).ready(function ($) {
  $(document.body).append('<a href="#" class="scrollToTop"></a>');
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  Scrolltock();

  $.fn.scrolltock = function () {
    var link = $(this);
    var page = jQuery(this).attr('href');
    var pattern = /#(.*)/;
    var targetEl = page.match(pattern);
    if (!targetEl.length) return;
    if (!jQuery(targetEl[0]).length) return;

    // close the menu hamburger
    if (link.parents('ul.nav,ul.menu,ul.maximenuck').length) {
      var menu = $(link.parents('ul.nav,ul.menu,ul.maximenuck')[0]);
      if (menu.parent().find('> .mobileckhambuger_toggler').length && menu.parent().find(
        '> .mobileckhambuger_toggler').attr('checked') == 'checked') {
        menu.animate({
          'opacity': '0'
        }, function () {
          menu.parent().find('> .mobileckhambuger_toggler').attr('checked', false);
          menu.css('opacity', '1');
        });
      }
    }

    var speed = link.attr('data-speed') ? link.attr('data-speed') : 1000;
    var isMobile = ($(window).width() <= 0);
    if (isMobile) {
      var offsety = link.attr('data-mobile-offset') ? parseInt(link.attr('data-mobile-offset')) : 0;
    } else {
      var offsety = link.attr('data-offset') ? parseInt(link.attr('data-offset')) : 0;
    }
    jQuery('html, body').animate({
      scrollTop: jQuery(targetEl[0]).offset().top + offsety
    }, speed, scrolltock_setActiveItem());
    return false;
  }
  // Cache selectors
  var lastId,
    baseItems = jQuery('a.scrollTo');
  // Anchors corresponding to menu items
  scrollItems = baseItems.map(function () {
    // if (! jQuery(jQuery(this).attr('href')).length) return;
    var pattern = /#(.*)/;
    var targetEl = jQuery(this).attr('href').match(pattern);

    if (targetEl == null) return;
    if (!targetEl[0]) return;
    if (!jQuery(targetEl[0]).length) return;
    var item = jQuery(targetEl[0]);
    if (item.length) {
      return item;
    }
  });
  // Bind to scroll
  jQuery(window).scroll(function () {
    scrolltock_setActiveItem();
  });

  function scrolltock_setActiveItem() {
    var isMobile = ($(window).width() <= 0);
    if (isMobile) {
      var offsety = 0;
    } else {
      var offsety = 0;
    }
    // Get container scroll position
    var fromTop = jQuery(this).scrollTop() - (offsety) + 2;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if (jQuery(this).offset().top < fromTop)
        return this;
    });
    if (cur.length) {
      // Get the id of the current element
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : '';
      var targetParent = baseItems.end().filter('[href$="#' + id + '"]').parent();

      if (lastId !== id || !targetParent.hasClass('active')) {
        lastId = id;
        // Set/remove active class
        baseItems.parent().parent().find('.active').removeClass('active');
        baseItems
          .parent().removeClass('active')
          .end().filter('[href$="#' + id + '"]').parent().addClass('active');
      }
    } else {
      baseItems.parent().parent().find('.active').removeClass('active');
      baseItems.parent().removeClass('active');
    }
  }
});

jQuery(window).load(function () {
  // loop through the scrolling links to check if the scroll to anchor is needed on the page load
  jQuery('a.scrollTo').each(function () {
    var pageurl = window.location.href;
    var linkurl = jQuery(this).attr('href');
    var pattern = /#(.*)/;
    var targetLink = linkurl.match(pattern);
    var targetPage = pageurl.match(pattern);

    if (targetLink == null) return;
    if (targetPage == null) return;
    if (!targetLink.length) return;
    if (!jQuery(targetLink[0]).length) return;

    if (jQuery(targetPage[0]).length && targetLink[0] == targetPage[0]) {
      jQuery(this).scrolltock();
    }
  });
});

function displayEngageBoxNotif(boxId, nbNotifs) {
  console.log("Show engagebox v2.0 #" + boxId + " JS via JDocument for " + nbNotifs + " notifs ...");
  var htmlNotif = jQuery(".eb-" + boxId + " .ebox-yn-headline").html();
  console.log("htmlNotif : " + htmlNotif);
  var htmlNotifValid = htmlNotif.replace("{{nb_notifs}}", nbNotifs);
  console.log("htmlNotifValid : " + htmlNotifValid);
  jQuery(".eb-" + boxId + " .ebox-yn-headline").html(htmlNotifValid);

  console.log("open engagebox v2.0 #" + boxId);
  box.open();
}
console.log('onContentPrepare add calendar context : mod_custom.content');
var apiKey = "AIzaSyBzSphBD6LOM7tk9xTnenbFn5GkfE8v820";
var serverKey =
  "AAAAXxjIvrs:APA91bHkrbbavoO8Lu0GaqTZEd9Q7S1GfV7liOjAjOVaF4AGPULviz10WJpEMMb6u4CSKDMFZFE1IWYXU5Leq-XlYxTUr_m4McH5mPBA-Z2u6kJ_Syc4YVaVedRzsawbVG_JqMQgYpNR";
var project_id = "a2s-joompush";
var messagingSenderId = "408437702331";
var fbsw_url = "https://dev.avis2sante.net/joomla-dev-mrehab-2/firebase-messaging-sw.js";
var sw_url = "https://dev.avis2sante.net/joomla-dev-mrehab-2/joompush-sw.js";
var baseurl = "https://dev.avis2sante.net/joomla-dev-mrehab-2/";
var isClient = "site";
var userid = 1109;
var jpgdpr_show = '';
var jpgdpr = 0;
var jpgdpr_unsub = 0;
var jpgdpr_unsub_msg = '';