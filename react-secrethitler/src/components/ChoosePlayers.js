import React from "react";

class ChoosePlayers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            players: 0,
            alice : "Alice",
            bob : "Bob",
            charlie : "Charlie",
            draco : "Draco",
            erin : "Erin",
            fang : "Fang",
            george : "George",
        }
    }
    
    setplayers =(event)=>{
        let playernames = []
        for (let i=0; i<parseInt(event.target.value); i++){
            let defaultName=["Alice", "Bob", "Charlie", "Draco", "Erin", "Fang", "George"]
            playernames.push(defaultName[i])
        }
        this.setState({
            players: parseInt(event.target.value),
            playernames: playernames
        })
    }
    submitName = (event)=>{
        let changedName = event.target.defaultValue
        let newName = event.target.value
        switch(changedName) {
            case "Alice":
              this.setState({
                  alice: newName
              })
              break;
            case "Bob":
                this.setState({
                    bob: newName
                })
              break;
            case "Charlie":
                this.setState({
                    charlie: newName
                })
            break;
            case "Draco":
                this.setState({
                    draco: newName
                })
            break;
            case "Erin":
                this.setState({
                    erin: newName
                })
                break;
            case "Fang":
                this.setState({
                    fang: newName
                })
            break;
            case "George":
                this.setState({
                    George: newName
                })
            break;
            default:
              // code block
          }
    }
    submitForm =()=>{
        let playernames = []
        let currentNames = [this.state.alice,this.state.bob,this.state.charlie,this.state.draco,this.state.erin,this.state.fang,this.state.george]
        for (let i =0; i<parseInt(this.state.players); i++){playernames.push(currentNames[i])}
        this.props.setplayers(this.state.players, playernames)
    }

    render(){
        return(
            <div>
                {this.state.players === 0 ? <div>
                    Please select number of players:
                    <br />
                    <div className='d-flex'>
                        <button className='btn btn-primary mx-5' value="5" onClick={this.props.setplayers}>5</button>
                        <button className='btn btn-primary mx-5' value="6" onClick={this.setplayers}>6</button>
                        <button className='btn btn-primary mx-5' value="7" onClick={this.setplayers}>7</button>                        
                    </div>                    
                </div>: <div></div>
                }

                {this.state.players >0 ?
                <div>
                    ---------- <br />
                    {this.state.players} Players<br />
                    Please insert your player names:
                    <ul>
                        {
                            this.state.playernames.map((name, index) => <li key={index}><input className="form-control form-control-sm" type="text" defaultValue={name} onChange={this.submitName} /></li>)
                        }                        
                    </ul>
                    <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
                </div>
                :<div></div>
                }



            </div>
        )
    }
}

export default ChoosePlayers