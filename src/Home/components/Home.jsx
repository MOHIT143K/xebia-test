import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { Planet } from './Plannet';
import { performSearch, onChangeSearch, setSelectedSearchedPlanet } from '../Actions';
import { logoutUserSuccess } from '../../Login/Actions';
import { Redirect } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : JSON.parse(sessionStorage.getItem('userInfo')),
        }
        this.searchPlanet = this.searchPlanet.bind(this);
        this.searchSelect = this.searchSelect.bind(this);
    }

    searchPlanet(value) {
        this.props.onChangeSearch(value);
        this.props.performSearch(value);
    }

    searchSelect(event) {
        let selectedPlanet = {};
        this.props.planets.map(value => {
            if (value.name === event) {
                selectedPlanet = value;
            }
            return null;
        });
        this.props.onChangeSearch(event);
        this.props.setSelectedSearchedPlanet(selectedPlanet);
    }

    render() {
        return (
            <div className="container">
                {
					this.state.user && this.state.user.name ? '' :
						<Redirect to="/" />
				}
                <Header 
                    username={this.state.user && this.state.user.name}
                    logout={this.props.logoutUserSuccess}
                />
                <SearchBar
                    searchPlanet={this.searchPlanet}
                    searchTerm={this.props.searchTerm}
                    onChangeSearch={this.props.onChangeSearch}
                    searchSelect={this.searchSelect}
                    items={this.props.planets}
                />
                {
                    Object.keys(this.props.selectedPlanet).length > 0 ? 
                        <Planet 
                            selected={this.props.selectedPlanet}
                        /> : ''
                }
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        searchTerm: state.home.searchTerm,
        username: state.user.username,
        planets: state.home.searchedPlanets.results,
        selectedPlanet: state.home.selectedPlanet
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        performSearch,
        onChangeSearch,
        setSelectedSearchedPlanet,
        logoutUserSuccess
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)