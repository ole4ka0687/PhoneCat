'use strict';

import compiledTemplate from './template.hbs';
import Component from '../component';

export default class PhoneViewer extends Component {
	constructor(options) {
		super(options.el);

		this._el.addEventListener('click', this._onBackButtonClick.bind(this));
		this._el.addEventListener('click', this._onAddButtonClick.bind(this));
	}

	setPhone(phone) {
		this._phone = phone;
		this._render();
	}

	_render() {

		this._el.innerHTML = compiledTemplate({
			phone: this._phone,
		});
	}

	_onBackButtonClick(event) {

		if (!event.target.closest('[data-element="back-button"]')) {
			return;
		}

		this._el.dispatchEvent(new CustomEvent('back'));
	}

	_onAddButtonClick(event) {

		if (!event.target.closest('[data-element="add-button"]')) {
			return;
		}

		this._el.dispatchEvent(new CustomEvent('addd'));
	}
}