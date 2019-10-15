'use strict';

class PhoneCatalogue {
	constructor(options) {
		this._el = options.el;
		this._phones = options.phones;

		this._render();
	}

	_render() {
		const template = document.querySelector('#phone-catalogue-template').innerHTML;
		const templateFunction = _.template(template);

		this._el.innerHTML = templateFunction({
			phones: this._phones,
		});
	}
}