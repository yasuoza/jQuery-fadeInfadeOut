jQuery(function ($) {
    "use strict";

    // Modify these variables if needed.
    var current_img = 0,
        imgs = $('#main_imgs img'),
        imgs_length = imgs.length,
        thumb_target = '#thumb',
        fadetime = 500,
        changetime = fadetime * 10;
    
    // Set change picture intrval
    var init = setInterval(toNextImage, changetime);

    // clone picutre to thumbnail and bind changeImage to thumbnail
    // and hide all original pictures.
    imgs.each(function (i) {
        $(this)
            .clone()
               .css({width: '50px'})
               .addClass('opacity')
               .attr('a', '')
               .bind('click', function () {
                   changeImage.call(this, i);
               })
               .appendTo(thumb_target);
    });

    var thumb = $(thumb_target).children('img');
    function changeImage(i) {
        if($(this).attr('src') != imgs.eq(current_img).attr('src')) {
            clearInterval(init);
            imgs.eq(current_img).fadeOut(fadetime);
            thumb.eq(current_img).addClass('opacity');
            imgs.eq(i).fadeIn(fadetime);
            thumb.eq(i).removeClass('opacity');
            current_img = i;
            init = setInterval(toNextImage, changetime);
        }
        return false;
    }
    
    function toNextImage () {
        var tmp = current_img + 1;
        var next = tmp < imgs_length ? tmp : 0;
        changeImage(next);
    }

    // Start change picture
    changeImage(current_img);
});
