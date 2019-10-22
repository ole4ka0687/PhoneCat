'use strict';

import compiledTemplate from './template.hbs';

export default class PhoneViewer {
	constructor(options) {
		this._el = options.el;
	}

	setPhone(phone) {
		this._phone = phone;
		this._render();
	}

	show() {
		this._el.classList.remove('js-hidden');
	}

	_render() {

		this._el.innerHTML = compiledTemplate({
			phone: this._phone,
		});
	}
}