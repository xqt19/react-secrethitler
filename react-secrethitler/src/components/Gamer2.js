import React from 'react';
import './Gamer2.css';
import ChoosePlayers from './ChoosePlayers.js'
import InitializePlayers from './InitializePlayers';
import RevealIDBox from './RevealIDBox';

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state={
            players: 0,
            playerNames: [],
            playerstats: [],
            playerfascists: [],
            playerhitler: [],
            stagezero: false,
            stageone: false,
            stagetwo: false,
        }
    }
    setplayers=(number, playerNames)=>{
        this.setState({
            players: number,
            playerNames: playerNames,
            stagezero: true
        })
    }
    setplayer=(thing)=>{
        this.setState({
            playerstats: thing
        })
    }
    setplayerfascists=(thing)=>{
        this.setState({
            playerfascists: thing
        })
    }
    setplayerhitler=(thing)=>{
        this.setState({
            playerhitler: thing
        })
        console.log("hitler")
        console.log(thing)
    }
    clearStageOne =() =>{
        this.setState({
            stageone: true
        })
    }


    render(){
        return (
            <div>
                <div className="Game">
                <header className="Game-header">
                    {this.state.players === 0 && this.state.stagezero === false
                    ? 
                    <div className='border border-primary m-5 p-5 rounded'>
                        Welcome to Secret Hitler!
                        <br /><ChoosePlayers setplayers={this.setplayers}/>
                    </div>
                    : <div></div>}


                    {this.state.players > 0 && this.state.stagezero === true && this.state.stageone === false
                    ?
                    <div>
                        {this.state.players} players! Alright! Lets get started then!
                        
                        <InitializePlayers players={this.state.players} setplayer={this.setplayer} setplayerfascists={this.setplayerfascists} setplayerhitler={this.setplayerhitler} playerNames ={this.state.playerNames}/>

                        {this.state.playerstats !== []?
                        <div className='border border-primary m-5 p-5 rounded'>
                            Players Identities:
                            <br /> Please take turns to secretly view your role and party membership.
                            <br /> Press this button only after everyone have seen their roles.
                            <br /> <button className="btn btn-danger" onClick={this.clearStageOne}>Ready!</button>
                            <p> ---------- </p>
                            <ul>
                            {this.state.playerstats.map((person, index) => (
                                <li key={index}>
                                <RevealIDBox  key={index} players={this.state.players} person={person} fascists={this.state.playerfascists} hitler ={this.state.playerhitler}/>
                                </li>
                            ))}                               
                            </ul>
                        </div>
                        :<div></div>
                        }
                    </div>
                    : <div></div>
                    }

                
                {this.state.stageone === true && this.state.stagetwo === false? 
                <div>Ready for Stage 2</div>
                :<div></div>
                }
                </header>
                </div>
            </div>
        );        
    }
}

export default Game;
