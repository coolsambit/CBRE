(function() {
    //Display app info screen on panel
    $('.add-app').on('click', function() {
        $('.panel').hide();
        $('.app-info-panel').css({
            'transition': '0.25s',
            'left': '0'
        });
    }); 

    //Toggle app details
    $('.collapse-img').on('click', function () {
        $(this).parents().eq(1).find('.app-details').slideToggle(250);
        $(this).toggleClass('cbre-dropDown');
        $(this).parents().eq(1).siblings().find('.app-details').slideUp();
        $(this).parents().eq(1).siblings().find('.app-title img[class*=collapse-img]').removeClass('cbre-dropDown');
    });

    $('.app-title span').on('click', function () {
        $(this).parents().eq(1).find('.app-details').slideToggle(250);
        $(this).parents().eq(1).find('img[class*=collapse-img]').toggleClass('cbre-dropDown');
        $(this).parents().eq(1).siblings().find('.app-details').slideUp();
        $(this).parents().eq(1).siblings().find('.app-title img[class*=collapse-img]').removeClass('cbre-dropDown');
    });

    //Prevent toggle for list items that are not accessible
    $('.app-info-panel span.app-no-access').each(function() {
        $(this).parents().eq(1).addClass('prevent-click');
        $(this).parent().find('img.add-img').addClass('hide-el');
    });

    //Add new tile
    $(document).on('click', '.add-img', function() {
        $(this).addClass('delete-img').removeClass('add-img').attr('src', '../assets/images/minus.svg');
        let newTileEl = $('.app-tile:first-child').clone();
        let newTitle = $(this).next().text();
        $(newTileEl).find('.tile-heading').text(newTitle);
        $('.dashboard-apps-row').append(newTileEl);
    });

    //Remove tile
    $(document).on('click', '.delete-img', function() {
        $(this).addClass('add-img').removeClass('delete-img').attr('src', '../assets/images/plus.svg');
        let tileToDelete = $(this).next().text();
        $('.app-tile').each(function() {
            if($(this).find('.tile-heading').text().match(tileToDelete)) {
                $(this).remove();
            }
        });
    });

    $(document).on('click', '.app-close', function() {
        let currVal = $(this);
        currVal.parent().remove();
        let tileToDelete = currVal.next().find('.tile-heading').text();
        $('.app-list li').each(function() {
            let elemToUpdate = $(this).find('.app-title span');
            if(elemToUpdate.text().match(tileToDelete)) {
                console.log($(elemToUpdate).text());
                elemToUpdate.prev().addClass('add-img').removeClass('delete-img').attr('src', '../assets/images/plus.svg');
            }
        });
    });

})();