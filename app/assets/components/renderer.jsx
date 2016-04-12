/*
	Expose all components to { window or global }
*/

// React Specific
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import createReactElement from './utils/createReactElement';

// UnMount component from a Node
function unmountComponents() {
	$('[data-react-component]').each(function(index, el) {
		ReactDOM.unmountComponentAtNode($(el)[0]);
	});
}

// Mount component at a Node
function mountComponents() {
	$('[data-react-component]').each(function(index, el) {
		const componentName = $(el).data('react-component-name');
		const props = $(el).data('react-component-props');
		$(el).attr('id', `react-component-name-${index}`);
		const domNodeId = $(el)[0];

		const reactElementOrRouterResult = createReactElement(
		  componentName,
		  props,
		  domNodeId,
		);
		ReactDOM.render(reactElementOrRouterResult, domNodeId);
	});
}

// Listen DOM events and { Mount, Unmount } react components
export default function renderComponents() {
	document.addEventListener('DOMContentLoaded', () => {
	  if (!(typeof Turbolinks !== 'undefined')) {
	    mountComponents();
	  } else {
	    if (typeof Turbolinks.controller !== 'undefined') {
	      document.addEventListener('turbolinks:before-cache', unmountComponents);
	      document.addEventListener('turbolinks:load', mountComponents);
	    } else {
	      document.addEventListener('page:before-unload', unmountComponents);
	      document.addEventListener('page:change', mountComponents);
	    }
	  }
	});
}
