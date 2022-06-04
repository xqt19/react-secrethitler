import React from "react";

class ChoosePlayers extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div>
                Please select number of players:
                <br />
                <div className='d-flex'>
                    <button className='btn btn-primary mx-5' value="5" onClick={this.props.setplayers}>5</button>
                    <button className='btn btn-primary mx-5' value="6" onClick={this.props.setplayers}>6</button>
                    <button className='btn btn-primary mx-5' value="7" onClick={this.props.setplayers}>7</button>                        
                </div>
            </div>
        )
    }
}

export default ChoosePlayers