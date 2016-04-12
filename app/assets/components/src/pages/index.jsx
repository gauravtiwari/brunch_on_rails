import React from 'react';
import $ from 'jquery';

const EchoChannel = App.cable.subscriptions.create('EchoChannel', {
});

App.EchoChannel = EchoChannel;

export default class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
		this._sengPing = this._sengPing.bind(this);
		this._setupSubscription = this._setupSubscription.bind(this);
		this.state = {
			message: props.message,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this._sengPing();
		}, 5000);
		this._setupSubscription();
	}

	_setupSubscription() {
		const _this = this;
		App.cable.subscriptions.create('EchoChannel', {
			received: function(data) {
				_this.setState({ message: data.message });
				return data;
			}
		});
	}

	_sengPing() {
		$.get('/ping', function(data) {
			console.log("Ping server");
		});
	}

	render() {
		return <h2>{this.state.message}</h2>;
	}
}
