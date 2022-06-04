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
                    {this.state.players === 0 
                    ? 
                    <div className='border border-primary m-5 p-5 rounded'>
                        Welcome to Secret Hitler!
                        <br /><ChoosePlayers setplayers={this.setplayers}/>
                    </div>
                    : <div></div>}


                    {this.state.players > 0
                    ?
                    <div>
                        {this.state.players} players! Alright! Lets get started then!
                    </div>
                    : <div></div>
                    }
                </header>
                </div>
            </div>
        );        
    }
}

export default Game;
