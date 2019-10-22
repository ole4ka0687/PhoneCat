'use strict';

import './style.css';
import compiledTemplate from './template.hbs';

export default class PhoneCatalogue {
	constructor(options) {
		this._el = options.el;
		this._phones = options.phones;

		this._render();
		this._el.addEventListener('click', this._onPhoneClick.bind(this));
	}

	hide() {
		this._el.classList.add('js-hidden');
	}

	_render() {

		this._el.innerHTML = compiledTemplate({
			phones: this._phones,
		});
	}

	_onPhoneClick(event) {
		let phoneElement = event.target.closest('[data-element="phone"]');

		if (!phoneElement) {
			return;
		}

		let customEvent = new CustomEvent('phoneSelected', {
			detail: phoneElement.dataset.phoneId
		});

		this._el.dispatchEvent(customEvent);



		console.log(phoneElement.dataset.phoneId);
	}
}