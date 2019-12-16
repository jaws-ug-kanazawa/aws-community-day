$(function(){
    $('.js-lp-accordion .js-lp-accordion-title').each(function() {

        var $this = $(this);
        var wrapper = $('.js-lp-accordion');

        $(wrapper).addClass('js-active');

        var utid = $(this).closest(wrapper).attr('data-utid');
        var id = 'accordion-' + utid + $this.index();

        $this.nextUntil('.js-lp-accordion-title').wrapAll('<div id="'+ id +'" aria-hidden="true" class="lp-accordion-content">');
        var panel = $this.next();
        $this.wrapInner('<button aria-expanded="false" aria-controls="'+ id +'">');
        var button = $this.children('button');

        button.on('click', function() {
            var state = $(this).attr('aria-expanded') === 'false' ? true : false;
            $(this).attr('aria-expanded', state);
            panel.attr('aria-hidden', !state);
            panel.slideToggle();
        });

    });

});

ACMS.Ready(function() {
    ACMS.Config.autoHeightRArray = [{
    mark: '.js-autoheight-r-item',
    config: {
        style: 'height',
        element: '',
        offset: 0,
        parent: '.js-autoheight-r-container',
        list: '.js-autoheight-r-list'
        }
    }];
});
