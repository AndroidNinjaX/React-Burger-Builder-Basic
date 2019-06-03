import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        componentDidMount () {

        }

        render () {
            return(
                <Auxiliary>
                    <Modal show>
                        Something didn't work!
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            );
        }  
    }
};

export default withErrorHandler;