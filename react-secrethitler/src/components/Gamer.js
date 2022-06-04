import React from 'react';
import './Gamer2.css';
import ChoosePlayers from './ChoosePlayers.js'

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state={
            players: 0
        }
    }
    setplayers=(event)=>{
        this.setState({
            players: event.target.value
        })
    }


    render(){
        return (
            <div>
                <div className="Game">
                <header className="Game-header">
                    <p>
                    Hello World! Welcome to Secret Hitler!
                    <br /> Number of players: {this.state.players}
                    {this.state.players === 0 
                    ? <div><ChoosePlayers setplayers={this.setplayers}/></div>
                    : <div></div>}
                    
                    </p>
                </header>
                </div>
            </div>
        );        
    }
}

export default Game;
