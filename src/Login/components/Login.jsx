import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onChangeUsername, onChangePassword, loginUser } from '../Actions';
import { Redirect } from 'react-router-dom';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
            user : JSON.parse(sessionStorage.getItem('userInfo')),
        }
		this.changeHandler = this.changeHandler.bind(this);
		this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
	}

	changeHandler(event) {
		event.target.name === 'username' ?
			this.props.onChangeUsername(event) :
			this.props.onChangePassword(event)
	}

	onLoginFormSubmit(event) {
		event.preventDefault();
		this.props.loginUser(this.props.username, this.props.password);
	}

	render() {
		return (
			<div className="login-form">
				<form onSubmit={this.onLoginFormSubmit}>
					<h2 className="text-center">Log in</h2>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Username(Case Sensitive)" required="required"
							name="username"
							value={this.props.username}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="form-group">
						<input type="password" className="form-control" placeholder="Password" required="required"
							name="password"
							value={this.props.password}
							onChange={this.changeHandler}
						/>
					</div>

					{
						this.props.error === null ? '' :
							<div className="form-group">
								<span className="error">{this.props.error}</span>
							</div>
					}
					<div className="form-group">
						<button type="submit" className="btn btn-primary btn-block">Log in</button>
					</div>
				</form>
				{
					(this.state.user && this.state.user.name) ? 
						<Redirect to="/home" /> : ''
				}
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		username: state.user.username,
		password: state.user.password,
		user: state.user.user,
		error: state.user.error
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onChangeUsername,
		onChangePassword,
		loginUser
	}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)