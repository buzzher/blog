import $ from 'jquery';

class FadeOut {
	//target
	constructor() {
		this.itemsToReveal = $('.front-section__headline');
		this.hideItem();
		this.pageLoad();
	}
	//apply item is visible
	hideItem() {
		this.itemsToReveal.addClass('fade-out');
	}

	//what to do when..
	pageLoad() {
		this.itemsToReveal.addClass('fade-out--is-active');
	}
}

export default FadeOut;