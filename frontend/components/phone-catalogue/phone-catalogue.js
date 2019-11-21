'use strict';

import './style.css';
import compiledTemplate from './template.hbs';
import Component from '../component';

export default class PhoneCatalogue extends Component {
	constructor(options) {
		super(options.el);

		this._phones = [];

		this._render();

		this.on('click', this._onPhoneClick.bind(this));
	}

	setPhones(phones) {
		this._phones = phones;
		this._render();
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

		this.trigger('phoneSelected', phoneElement.dataset.phoneId);
	}
}