import React from 'react'
import ChancellorNominee from './ChancellorNominee'

class LegSession extends React.Component{
    constructor(props){
        super(props)
        this.state={
            LegSessionNo: this.props.givenstate.LegSessionNo,
            playerstats: this.props.givenstate.playerstats,
            currentPresNominee: this.props.givenstate.currentPres,
            currentChanceNominee: null,
            lastelectedpres: this.props.givenstate.lastElectedPres,
            lastelectedchance: this.props.givenstate.lastElectedChance,
            
        }
    }
    componentDidMount =()=>{
        let randomPres ={}
        let playerstats = this.state.playerstats
        if(this.state.LegSessionNo === 1){
            randomPres = playerstats[Math.floor(Math.random()*playerstats.length)];
            this.props.setStartingPres(randomPres)
        }
        this.setState({
            currentPresNominee: randomPres
        })
    }
    setchancenom=(name)=>{
        let chancenom ={}
        for (let i=0; i<this.state.playerstats.length;i++){
            if(this.state.playerstats[i].name == name){chancenom = this.state.playerstats[i] }
        }
        console.log(chancenom)
        this.setState({
            currentChanceNominee:chancenom
        })
    }

    render(){
        return(
            <div>
                Welcome to Legislative Session #{this.state.LegSessionNo}
                <p> ---------- </p>
                {this.state.currentPresNominee !== null?
                <div>
                    <br /> {this.state.LegSessionNo === 1? 
                    <div>{this.state.currentPresNominee.name} has been randomly selected to be the first presidential nominee</div>
                    :<div></div>}
                    {this.state.currentPresNominee.name} must pick another player to be their chancellor nominee.
                    <ChancellorNominee givenstate={this.state} setchancenom={this.setchancenom}/>
                    {this.state.currentChanceNominee !== null?
                        <div>Players must now vote on whether to approve this government.<br />
                            
                        </div>
                        :<div></div>
                    }                    
                </div>
                :<div></div>
                }
            </div>
        )
    }
}

export default LegSession