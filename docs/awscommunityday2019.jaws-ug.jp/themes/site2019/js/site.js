// ページ上部へ戻るボタンの表示の設定
$(function () {
    var $nav = $('.page-top-btn');
    var offset  = '50';
    var footer  = $(document).height() - $(window).height() - 500;
    $(window).scroll(function() {
        if($(window).scrollTop() > offset) {
            $nav.addClass('page-top-btn-appear');
        } else {
            $nav.removeClass('page-top-btn-appear');
        }
    });

  $.fn.delayAddClass = function (className, delay) {
    return $(this).delay(delay).queue(function (next) {
      $(this).addClass(className);
      next();
    });
  };
  $.fn.delayRemoveClass = function (className, delay) {
    return $(this).delay(delay).queue(function (next) {
      $(this).removeClass(className);
      next();
    });
  };

    var $mobileNavTrigger = $('.js-mobile-nav-btn');
    var $mobileNavContents = $('.js-mobile-nav');
    $($mobileNavTrigger).click(function(){
      $('body').toggleClass('is-locked');
      var $mobileNavAttr = $($mobileNavTrigger).attr('aria-expanded');
      if ($mobileNavAttr === 'true') {
        $($mobileNavTrigger).attr('aria-expanded', false);
        $($mobileNavContents).delayRemoveClass('is-opened', 1).delayRemoveClass('is-active', 100);
      } else {
        $($mobileNavTrigger).attr('aria-expanded', true);
        $($mobileNavContents).delayAddClass('is-active', 1).delayAddClass('is-opened', 100);
      }
    });

    // 郵便番号の「-」の挿入
    $('.js-insert-hyphen').blur(function(){
        function insertStr(str, index, insert) {
            return str.slice(0, index) + insert + str.slice(index, str.length);
        }
        var zip = $(this).val();
        if (zip.length > 6 && !zip.match('-')) {
            var zipHyphen = insertStr(zip, 3, '-');
            $(this).val(zipHyphen);
        }
    });
});

// オフキャンバスのブレイクポイントの設定
ACMS.Ready(function(){
    ACMS.Config.offcanvas.breakpoint = 1023;
});
