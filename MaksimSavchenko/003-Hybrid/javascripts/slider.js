$(function() {
  $('#project1').on('click', function() {
    $('.projectsWraper').css('transform', 'translateX (0)');
    $('.circlesWraper li').removeClass('current');
    $(this).addClass('current');
  });
  $('#project2').on('click', function() {
    $('.projectsWraper').css('transform', 'translateX (-100vw)');
    $('.circlesWraper li').removeClass('current');
    $(this).addClass('current');
  });
  $('#project3').on('click', function() {
    $('.projectsWraper').css('transform', 'translateX (-200vw)');
    $('.circlesWraper li').removeClass('current');
    $(this).addClass('current');
  });
});
