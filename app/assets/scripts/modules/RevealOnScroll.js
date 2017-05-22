import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

	//target
	constructor () {
		this.itemsToReveal = $('.front-section__position');
		this.navBar = $('.primary-nav');
		this.hideItem();
		this.createWaypoints();
	}

	//apply hiden even
	hideItem() {
		this.itemsToReveal.addClass('reveal-item');
		this.navBar.addClass('fade-out__navbar');
		//console.log(this);
	}

	//what to do when..
	createWaypoints() {
		this.itemsToReveal.each(function() {
			//console.log(that);
			var currentItem = this;
			new Waypoint({
				element: currentItem, //DOM element
				handler: function() { //what happen when scroll
					$(currentItem).addClass('reveal-item--is-visiable')
				},
				offset: '90%'
			});
		});

		this.navBar.each(function() {
			var currentNavBar = this;
			new Waypoint({
				element: currentNavBar, //DOM element
				handler: function(direction) { //what happen when scroll
					if(direction === 'down') {
						$(currentNavBar).addClass('fade-out__navbar--is-active');
					} else {
						$(currentNavBar).removeClass('fade-out__navbar--is-active');
					}
				},
				offset: '-40%'
			});
		});
	}
}

export default RevealOnScroll;