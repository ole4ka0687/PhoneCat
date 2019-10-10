'use strict';

class PhoneCatalogue {
	constructor(options) {
		this._el = options.el;

		this._render();
	}

	_render() {
		const template = document.querySelector('#phone-catalogue-template').innerHTML

		this._el.innerHTML = template;
	}
}