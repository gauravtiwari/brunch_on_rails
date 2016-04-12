// React Specific
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import createReactElement from './utils/createReactElement';
import registerComponents from './register';

// Call to register all components
registerComponents();

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

function turbolinksInstalled() {
  return (typeof Turbolinks !== 'undefined');
}

function turbolinksVersion5() {
  return (typeof Turbolinks.controller !== 'undefined');
}

function debugTurbolinks(...msg) {
  if (!window) {
    return;
  }

  console.log('TURBO:', ...msg);
}

document.addEventListener('DOMContentLoaded', () => {
  if (!turbolinksInstalled()) {
    debugTurbolinks(
      'NOT USING TURBOLINKS: DOMContentLoaded event, calling reactOnRailsPageLoaded'
    );
    mountComponents();
  } else {
    if (turbolinksVersion5()) {
      debugTurbolinks(
        'USING TURBOLINKS 5: document added event listeners turbolinks:before-cache and ' +
        'turbolinks:load.'
      );
      document.addEventListener('turbolinks:before-cache', unmountComponents);
      document.addEventListener('turbolinks:load', mountComponents);
    } else {
      debugTurbolinks(
        'USING TURBOLINKS 2: document added event listeners page:before-unload and ' +
        'page:change.');
      document.addEventListener('page:before-unload', unmountComponents);
      document.addEventListener('page:change', mountComponents);
    }
  }
});
