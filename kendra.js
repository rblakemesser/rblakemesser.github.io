$(document).ready(function() {

    // Backbone router manages single-pagitude
    var AppRouter = Backbone.Router.extend({
        routes: {
            "*page": "defaultRoute"
        }
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
		console.log(page);
		if (page in routeMap) {
			swapContent(routeMap[page]);
		} else {
			swapContent(routeMap["home"]);
		}
    })

    // History manages browser navigation (back button)
    Backbone.history.start();

});

