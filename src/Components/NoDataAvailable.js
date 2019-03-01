import React from 'react';

class NoDataAvailable extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(<p className="noDataAvailable">{this.props.message} data not available</p>);
    }
}

export default NoDataAvailable;