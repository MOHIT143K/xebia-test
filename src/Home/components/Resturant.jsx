import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FOOD_IMG from '../../food.jpg';

// Main header used at home, search and watch list page
class Resturant extends Component {
    render () {
        return (
            <div className="container-fluid image-container">
                <img src={FOOD_IMG}></img>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        resturants: state.home.resturants
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Resturant)

