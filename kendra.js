/**
* Function that tracks a click on an outbound link in Google Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label.
*/
var trackOutboundLink = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {
		'hitCallback': function () {
            document.location = url;
        }
    });
}

// Main site code
$(document).ready(function() {

    // Backbone router manages single-pagitude
    var AppRouter = Backbone.Router.extend({
        routes: {
            "*page": "defaultRoute"
        }
    });

	var allATags = $('#stories-content').find('.work a');
	var allLinks = [];
	_.each(allATags, function(aTag) {
        allLinks.push(aTag.href);
	});

	function getRandom(iterable) {
		return iterable[Math.floor(Math.random() * iterable.length)];
	}

    var randomButt = $('#random-butt');
    randomButt.on('click', function(e) {
        e.preventDefault();
		var randomLink = getRandom(allLinks);
		trackOutboundLink(randomLink);
		return false;
	});

    // Initiate the router
    var app_router = new AppRouter;
	
    // Map routes to page elements
    var routeMap = {
        "about": $('#about-content'),
        "stories": $('#stories-content'),
        "home": $('#home-content'),
        "butts": $('#butts-content')
    }
        	
    // Hides all elements, then shows the new page
    var $coverContainers = $('.cover-container');
    function swapContent($incomingPage) {
        $coverContainers.hide();
        $incomingPage.show();
    };

    app_router.on('route:defaultRoute', function(page) {
        ga('send', 'pageview', page);  // tell ga about new page

        if (page in routeMap) {
            swapContent(routeMap[page]);
        } else {
            swapContent(routeMap["home"]);
        }

    });

    // History manages browser navigation (back button)
    Backbone.history.start();

});

