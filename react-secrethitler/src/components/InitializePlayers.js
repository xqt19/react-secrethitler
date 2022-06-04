import React from 'react';

class InitializePlayers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            players: parseInt(this.props.players),
        }
    }

    componentDidMount=()=>{
        let allroles = []
        if (this.state.players === 5){
            allroles = ["a Liberal", "a Liberal", "a Liberal", "a Fascist", "Hitler"]
        } else if (this.state.players === 6){
            allroles = ["a Liberal", "a Liberal", "a Liberal", "a Fascist", "a Fascist", "Hitler"]
        } else if (this.state.players === 7){
            allroles = ["a Liberal", "a Liberal", "a Liberal", "a Liberal", "a Fascist", "a Fascist", "Hitler"]
        }
        let shuffledallroles = allroles.sort( ()=>Math.random()-0.5 );
        
        let thing = []
        let fascists=[]
        let hitler = []
        for (let i = 0; i < shuffledallroles.length; i++) {
            let player = {
                name: "Player"+(parseInt(i)+1),
                role: shuffledallroles[i],
                party: ""
            }
            if (shuffledallroles[i] === "a Liberal"){
                player.party = "Liberal"
            } else {
                player.party = "Fascist"
                if (player.role == "Hitler"){
                    hitler.push(player)
                } else {
                    fascists.push(player)
                }
            }
            thing.push(player)
          }
        this.props.setplayer(thing)
        this.props.setplayerfascists(fascists)
        this.props.setplayerhitler(hitler)
    }

    render(){
        return(
            <div>
                There are {this.state.players} players.

            </div>
        )
    }
}

export default InitializePlayers;