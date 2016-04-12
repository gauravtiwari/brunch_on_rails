/*
	Expose all components to { window or global }
*/

// Utils
import reactComponent from './utils/reactComponent';

// Components/Views : Setup in order as Rails views
import IndexComponent from './src/pages/index';
import ShowComponent from './src/pages/show';
import IndexSecondComponent from './src/pages/indexSecond';

// Use the registered name in Rails Views as component names
export default function registerComponent() {
	reactComponent.register({
		IndexComponent,
		ShowComponent,
		IndexSecondComponent,
	});
}
