import React, { Component } from 'react';


 export class Lifecycles extends Component {
    constructor() {
        super();
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps);
        return false;
    }

    render(){
        console.log('render');
        return(
            <div>
                <h1>Lifecycles Component</h1>
                {this.props.textProp}
            </div> 
        );
    }
}

//export default Lifecycles;


