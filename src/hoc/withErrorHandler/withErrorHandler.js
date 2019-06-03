import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return(
            <WrappedComponent {...props} />
        );
    }
};

export default withErrorHandler;