$(document).ready(function() {
    const pinterestBoardUrl = 'https://www.pinterest.com/mr_q_works/';

    $.getJSON('https://api.pinterest.com/v3/pidgets/boards/' + pinterestBoardUrl + '/pins/', function(data) {
        const pins = data.data.pins;
        const galleryContainer = $('.gallery');
        pins.forEach(function(pin) {
            const imageUrl = pin.images['237x'].url;
            const image = $('<img>').attr('src', imageUrl);
            galleryContainer.append(image);
        });
    });
});
