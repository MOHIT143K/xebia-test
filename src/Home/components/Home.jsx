import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FOOD_IMAGE from '../../food.jpg';
import HEART_IMAGE from '../../heart.png';
import START_IMAGE from '../../heart.png';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const { resturants } = this.props;
        return (
            <div className="container-fluid">
                <header className="bg-dark navbar navbar-dark shadow-sm margin-bottom-20">&nbsp;</header>
                <section>
                    <div className="row">
                        {
                            resturants.map(resturant => {
                                return (
                                    <div className="col-lg-3" key={resturant.name}>
                                        <div className="card">
                                            <a href="/resturant" target="_blank">
                                                <img className="card-img-top" src={FOOD_IMAGE} alt="Card image cap" />
                                            </a>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <h5 className="card-title">{resturant.name}</h5>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        {
                                                            // [1,2,3,4,5].map(value => {
                                                            //     if (value < )
                                                            // })
                                                        }
                                                        {resturant.rating}
                                                    </div>
                                                    <div className="col-lg-12 small">
                                                        {resturant.locations.join(', ')}
                                                    </div>
                                                </div>
                                                <p className="card-text">
                                                {
                                                    resturant.offers.map(offer => {
                                                        return (<>{offer.name}<br/></>)
                                                    })
                                                }
                                                </p>
                                                <div className="row">
                                                    <div className="col-lg-6 image-container">
                                                        <img src={HEART_IMAGE} className="heart-icon" />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <a href="#" className="btn btn-outline-dark btn-sm float-right">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <footer className="bg-dark navbar navbar-dark shadow-sm margin-top-7">&nbsp;</footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)