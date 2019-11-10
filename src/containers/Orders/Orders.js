import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        order: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(result => {
                const fetchOrders = [];
                for(let key in result.data){
                    fetchOrders.push({
                        ...result.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchOrders});
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render () {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);