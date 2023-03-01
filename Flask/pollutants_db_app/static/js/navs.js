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
