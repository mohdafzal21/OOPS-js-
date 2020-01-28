import React, { PureComponent } from 'react'

export default class TImer extends PureComponent {

   constructor(props){
        super(props)
        this.state = {
                    count : 0
        }
        console.log("Construtor method : 1")
        //before the intial render
        //Its not safe to keep api requests 
    }
    
    componentWillMount(){
         console.log("will mount Depreciated 2 ")
    }

    componentDidMount(){
        this.tick = ()=>{
            setInterval(()=> this.setState({count : this.state.count + 1}), 3000 )
        }
        console.log("Inside Did MOunt 4")
        this.tick()
        // Get Called only once 
        // Api Requests 
        // Safe
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Will update", nextProps)
        console.log("will update", nextState)
    }
   
    componentDidUpdate(prevProps, prevState){
        console.log("Inside Did Update 3(2)")
        console.log("previous state",prevState)
        console.log("previous prrops",prevProps)
        if(prevState.count > 5){
            this.setState({
                count : 0
            })
         }
        //if the state - OnChange - push the data to db 
        // It is comparing the state = > saving data to db
        // it is the best plce auto save features 
        // localstorage 

    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("before the rerender method")
    //     if(nextState == this.state.count){
    //         return true
    //     }return false 
    // }
    componentWillUnmount(){
        clearInterval(this.tick)
    }

    

    render() {
        console.log("Render Method 3")
       const {toggle} = this.props
        return (
            <div>
                {this.state.count == 0 ? 'Loading Initial Render' :  <h1>{this.state.count}</h1> }
                {toggle ? ' Hello PROPS CHANGE' : 'Props DID nOT CHANGE'}
            </div>
        )
    }
}
