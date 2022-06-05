import React from 'react'

class RevealIDBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            person: this.props.person,
            boxIsOpen: false,
            players: parseInt(this.props.players)
        }
    }
    openBox= ()=>{
        this.setState({
            boxIsOpen: true
        })
    }
    closeBox= ()=>{
        this.setState({
            boxIsOpen: false
        })
    }

    render(){
        return(<div>
                {this.state.boxIsOpen?
                <div className='border border-primary m-5 p-5 rounded'>
                    {this.state.person.name}:<br />
                    You are {this.state.person.role} from the {this.state.person.party} Party!
                    <br /> ---------- <br />
                    {this.state.person.role === "a Liberal"?<div>Help the other Liberals enact FIVE Liberal policies!</div>:<div></div>}
                    {this.state.person.role === "a Fascist"?<div>Help the other Fascists enact SIX Fascist policies <br />OR<br /> Elect Hitler as Chancellor after 3 Fascist policies have been passed!</div>:<div></div>}
                    {this.state.person.role === "Hitler"?<div>Help the other Fascists enact SIX Fascist policies <br />OR <br/> Be elected Chancellor after 3 Fascist policies have been passed!</div>:<div></div>}
                    <br /> ---------- <br />
                    {this.state.person.role === "a Liberal"?<div>As a Liberal you do not know the identities of any of the other players.</div>:<div></div>}
                    {this.state.person.role === "a Fascist"?<div>You know the identities of the Fascists. They are:<br />
                    <div className='border border-primary m-5 p-5 rounded'>
                    <ul>
                        {this.props.fascists.map((fascist,index) => <li key={index}>{fascist.name===this.state.person.name?<div>{fascist.name} (You)</div>:<div>{fascist.name} (Fascist)</div>}</li>)}
                        {this.props.hitler.map((hitler,index) => <li key={index}>{hitler.name} (Secret Hitler) </li>)}
                    </ul>
                    </div>

                    </div>:<div></div>}
                    {this.state.person.role === "Hitler"?<div>
                        {this.state.players >6?
                        <div>As there are 7 or more players, Hitler does not know the identities of the other Fascists</div>
                        :<div>You know the identities of the Fascists. They are:<br />
                            <div className='border border-primary m-5 p-5 rounded'>
                            <ul>
                                {this.props.fascists.map((fascist,index) => <li key={index}>{fascist.name} (Fascist)</li>)}
                                {this.props.hitler.map((hitler,index) => <li key={index}>{hitler.name} (Hitler - You) </li>)}
                            </ul>
                            </div>
                        </div>}
                    </div>:<div></div>}
                    
                    
                    <br /><button className='btn btn-primary m-5' onClick={this.closeBox}>Click to Close</button>
                </div>
                :<div><button className='btn btn-primary m-5' onClick={this.openBox}> {this.state.person.name}</button></div>
                }
            </div>
        )
    }
}

export default RevealIDBox