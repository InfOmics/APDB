 // pill navigation
 $(document).on("click", ".nav-pills > li > a", function() {

  // get displaying tab content selector
  var active_tab_selector = $('.nav-pills > li > a.active').attr('href');		

  // find actived navigation and remove 'active' 
  var actived_nav = $('.nav-pills > li > a.active');
  actived_nav.removeClass('active');
        
  // add 'active' into clicked navigation
  $(this).addClass('active');
        
  // hide displaying tab content
  $(active_tab_selector).removeClass('active');
  $(active_tab_selector).addClass('hide');
        
  // show target tab content
  var target_tab_selector = $(this).attr('href');
  $(target_tab_selector).removeClass('hide');
  $(target_tab_selector).addClass('active');

});


 // affix navigation
 $(document).on("click", ".nav-stacked > li", function() {

  // find actived navigation and remove 'active' 
  var actived_nav = $('.nav-stacked > li.active');
  actived_nav.removeClass('active');
        
  // add 'active' into clicked navigation
  $(this).addClass('active');
        
});



//nav scroll 
$(document).scroll(function() {

  // iterate over span 
  var spans = $('span');
  spans.each(function(i,el) {
    
    // get location 
    var top  = $(el).offset().top-100;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();

    // get span id 
    var id = $(el).attr('id');

    // check location 
    if ( scroll > top && scroll < bottom ) {
      // change active class 
      $('li.active').removeClass('active');
      $('a[href="#'+id+'"]').parent().addClass('active');
    }

    // end of the page
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 300) {
      // change active class 
      $('li.active').removeClass('active');
      $('a[href="#sec3"]').parent().addClass('active');
    }

  })
});

