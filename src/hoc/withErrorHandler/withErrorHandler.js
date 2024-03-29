import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            };
            /*------------------
            In the interceptors we have to return something.
                -When sending the requenst, we can just return the request.
                -When recieveing the repsonse for an error, we can just return the response
            ------------------*/
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });
            this.responseInterceptor = axios.interceptors.response.use(response => response , error => {
                this.setState({error: error});
            });
        }
        
        componentWillUnmount () {
            console.log("[withErrorHandler] removing interceptors. Removing the Request Interceptor (" + this.requestInterceptor + "). Removing the Response Interceptor (" + this.responseInterceptor + ").");
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render () {
            return(
                <Auxiliary>
                    <Modal 
                        show={this.state.error}
                        /*Use modalClosed, 'clicked' is for the backdrop*/
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            );
        }  
    }
};

export default withErrorHandler;