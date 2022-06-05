import React from 'react'
import LegSession from './LegSession'

class StageTwoGame extends React.Component{
    constructor(props){
        super(props)
        this.state={
            playerhitler: this.props.playerhitler,
            playerstats: this.props.playerstats,
            playernames: this.props.playernames,
            LegSessionNo: 1,
            currentPres: null,
            startingPres:null,
            lastElectedPres:null,
            lastElectedChance:null
        }
    }
    setStartingPres =(person)=>{
        this.setState({
            startingPres: person
        })
    }


    render(){
        return(
            <div>
                <LegSession setStartingPres={this.setStartingPres} givenstate={this.state}/>
            </div>
        )
    }
}

export default StageTwoGame