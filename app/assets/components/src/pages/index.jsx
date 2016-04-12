import React from 'react';
import $ from 'jquery';

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

	componentWillUnmount() {
		App.EchoChannel.unsubscribe();
	}

	_setupSubscription() {
		const EchoChannel = App.cable.subscriptions.create('EchoChannel', {
			received: function(data) {
				this.setState({ message: data.message });
			}.bind(this)
		});
		App.EchoChannel = EchoChannel;
	}

	_sengPing() {
		$.get('/ping', function(data) {
			console.log("Ping server");
		});
	}

	render() {
		return(
			<h2>Echo: {this.state.message}</h2>
		);
	}
}
