import React, { Component } from 'react'
export default class CounterClass extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
        increment=()=>{
            this.setState({count:this.state.count+1})
        }
        decrement=()=>{
            if(this.state.count>0)
            {
            this.setState({count:this.state.count-1})
            }
        }
    render(){
        return(
        <div>
            <button onClick={this.increment}>Increment</button>
            <h3>Count:{this.state.count}</h3>
            <button onClick={this.decrement}>Decrement</button>
        </div>
        )
        }
}