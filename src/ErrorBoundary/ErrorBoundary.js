import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return (<p><strong>{this.state.errorMessage.message}</strong></p>);
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;