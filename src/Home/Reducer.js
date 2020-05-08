import * as ActionTypes from './ActionTypes';

// Default State for Home Module
const initialState = {
    resturants: [{
        name: 'Barbeque',
        rating: 4.4,
        locations: ['Pan India'],
        offers: [{
            name: 'Food Voucher',
        }, {
            name: 'Buy a gift'
        }]
    }, {
        name: 'Faasos',
        rating: 4.4,
        locations: ['Mumbai', 'Pune', 'Nagpur', 'Delhi', 'Goa', 'Gurgaon'], 
        offers: [{
            name: 'Food Voucher',
        }, {
            name: 'Buy a gift'
        }]
    }, {
        name: 'Bite Club',
        rating: 4.4,
        locations: ['Mumbai', 'Pune', 'Nagpur', 'Delhi', 'Goa', 'Gurgaon'], 
        offers: [{
            name: 'Food Voucher',
        }, {
            name: 'Buy a gift'
        }]
    }, {
        name: 'Good Bowl',
        rating: 4.4,
        locations: ['Mumbai', 'Pune', 'Nagpur', 'Delhi', 'Goa', 'Gurgaon'],
        offers: [{
            name: 'Food Voucher',
        }, {
            name: 'Buy a gift'
        }]
    }, {
        name: 'Barbeque',
        rating: 4.4,
        locations: ['Pan India'],
        offers: [{
            name: 'Food Voucher',
        }, {
            name: 'Buy a gift'
        }]
    }, {
        name: 'Faasos',
        rating: 4.4,
        locations: ['Mumbai', 'Pune', 'Nagpur', 'Delhi', 'Goa', 'Gurgaon'], 
        offers: [{
            name: 'Food Voucher',
        }, {
            name: 'Buy a gift'
        }]
    }, {
        name: 'Bite Club',
        rating: 4.4,
        locations: ['Mumbai', 'Pune', 'Nagpur', 'Delhi', 'Goa', 'Gurgaon'], 
        offers: [{
            name: 'Food Voucher',
        }, {
            name: 'Buy a gift'
        }]
    }, {
        name: 'Good Bowl',
        rating: 4.4,
        locations: ['Mumbai', 'Pune', 'Nagpur', 'Delhi', 'Goa', 'Gurgaon'],
        offers: [{
            name: 'Food Voucher',
        }, {
            name: 'Buy a gift'
        }]
    }]
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ActionTypes.ON_LOAD:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}
