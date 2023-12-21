import React from 'react';
const WithLoading=(WrappedComponent)=>{
    return class WithLoadingComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={
                isLoading: true,
            };
        }
        componentDidMount(){
            //setTimeOutId
            const setTimeOutId=setTimeout(()=>{
                this.setState((prevState)=>({
                    isLoading:false,
                }));
            },2000);
            //clean up function
            return ()=>clearTimeout(setTimeOutId);
        }
        render(){
            const{isLoading}=this.state;
            return isLoading ?( <p>Loading....</p>):(<WrappedComponent{...this.props}/>
            );
        }
    };
};
export default WithLoading;