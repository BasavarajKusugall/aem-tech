$(document).ready(function() {
    if ($('ul').hasClass('instaCarausal')) {
        var instagram = $('ul.instaCarausal');
        var count = $('ul.instaCarausal').attr('data-cnt');
        var uid = $('ul.instaCarausal').attr('data-uid');
        var tokn = $('ul.instaCarausal').attr('data-actokn');
        var size = $('ul.instaCarausal').attr('data-size');
        $.ajax({
            type: 'GET',
            url: 'https://api.instagram.com/v1/users/' + uid + '/media/recent?access_token=' + tokn + '&count=' + count + '&callback=?',
            dataType: 'jsonp',
            success: function(response) {
                var imageUrl;
                instagram.empty();
                for (var i = 0; i < response.data.length; i++) {
                    if (size == 'thumbnail') {
                        imageUrl = response.data[i].images.thumbnail.url;
                    } else if (size == 'low_resolution') {
                        imageUrl = response.data[i].images.low_resolution.url;
                    } else if (size == 'standard_resolution') {
                        imageUrl = response.data[i].images.standard_resolution.url;
                    }
					instagram.append($('<li> <img src=\"'+imageUrl+'\"/></li>'));
                }
            }
        });
    }
});



