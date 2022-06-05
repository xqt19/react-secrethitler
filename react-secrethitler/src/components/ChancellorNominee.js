import React from 'react'

class ChancellorNominee extends React.Component{
    constructor(props){
        super(props)
        this.state={
            playerstats: this.props.givenstate.playerstats,
            lastelectedpres: this.props.givenstate.lastelectedpres,
            lastelectedchance:this.props.givenstate.lastelectedchance,
            currentPresNominee: this.props.givenstate.currentPresNominee,
            eligible: [],
            chancenomName: null
            
        }
    }
    componentDidMount=()=>{
        //determine eligibility
        // the currentpresnom cant nominate themselves
        //lastelectedpres and lastelectedchance are not allowed to be nominated.
        //lastelectedpres may be nominated if there are only 5 players remaining.
        //dead players cant be nominated
        //after the Election Tracker fires anyone can be elected president.
        let eligible = []
        let aliveplayers = []
        let playerstats = this.state.playerstats
        for (let i=0; i<playerstats.length; i++){
            if(playerstats[i].alive){aliveplayers.push(playerstats[i])}
        }
        if (aliveplayers.length <6) {
            for (let i=0; i<aliveplayers.length; i++){
                if(aliveplayers[i]!= this.state.lastelectedchance && aliveplayers[i]!= this.props.givenstate.currentPresNominee){eligible.push(aliveplayers[i])}
            }
        } else{
            for (let i=0; i<aliveplayers.length; i++){
                if(aliveplayers[i]!= this.state.lastelectedchance && aliveplayers[i]!= this.state.lastelectedpres && aliveplayers[i]!= this.props.givenstate.currentPresNominee)
                {eligible.push(aliveplayers[i])}
            }
        }
        this.setState({
            eligible: eligible
        })
    }

    setChanceNominee=(event)=>{
        this.props.setchancenom(event.target.value)
        this.setState({
            chancenomName: event.target.value
        })
    }

    render(){
        return(
            <div className="border border-primary m-5 p-5 rounded">
                {this.state.eligible !== [] && this.state.chancenomName === null ? <div>
                These are the eligible chancellor nominees:<br />
                {
                    this.state.eligible.map((person, index)=>(
                        <button key={index} className="btn btn-primary m-5" onClick={this.setChanceNominee} value={person.name}>{person.name}</button>
                    ))
                }
                </div>:<div></div>}

                {this.state.eligible !== [] && this.state.chancenomName !== null?
                <div> {this.props.givenstate.currentPresNominee.name} has nominated {this.state.chancenomName} as their chancellor nominee.</div>
                :<div></div>
                }

            </div>
        )
    }
}

export default ChancellorNominee