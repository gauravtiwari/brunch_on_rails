import context from './context';
import ComponentRegistery from './componentRegistry';

const ctx = context();

ctx.reactComponent = {
	register(components) {
		return ComponentRegistery.register(components);
	},
	getComponent(name) {
		return ComponentRegistery.get(name);
	},
};

export default ctx.reactComponent;
