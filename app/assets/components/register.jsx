// Utils
import reactComponent from './utils/reactComponent';

// Components
import IndexComponent from './pages/index';
import ShowComponent from './pages/show';
import IndexSecondComponent from './pages/indexSecond';

// Use the registered name in Rails Views as component names
export default function registerComponent() {
	reactComponent.register({
		IndexComponent,
		ShowComponent,
		IndexSecondComponent,
	});
}
