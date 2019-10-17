'use strict';

export default class PhoneCatalogue {
	constructor(options) {
		this._el = options.el;
		this._phones = options.phones;

		this._render();
	}

	_render() {
		const template = document.querySelector('#phone-catalogue-template').innerHTML;
		this._compiledTemplate = _.template(template);

		this._el.innerHTML = this._compiledTemplate({
			phones: this._phones,
		});
	}
}