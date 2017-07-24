import React, { Component } from 'react';
import {StaggeredMotion, spring, presets} from 'react-motion';
import './App.css';
import range from 'lodash.range';

class Pacman extends Component {

    render() {
        console.log(this.props,this,this.props.state.pacmanStartMove);
        return (
            <div className="pacmanReact">
                <div className="logo">
                    <div className="leftBracket bracket" style={this.props.state.bracketDisappear}>&#123;</div>
                    <div className="SMCCPC" onClick={()=>this.props.pacmanStartMove()}>
                        <div className={this.props.state.top_pacman}>
                            SMC
                        </div>
                        <div className={this.props.state.bottom_pacman}>
                            CPC
                        </div>
                    </div>
                    <div className="rightBracket bracket" style={this.props.state.bracketDisappear}>&#125;</div>
                </div>
                <div className="food">

                    <svg width="1000" height="600">
                        <circle id="circle" r="20" cx="100" cy="100" fill="tomato" />
                        <path id="00000" d="M697.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796">

                        </path>

                    </svg>
                </div>
            </div>
        );
    }
}

class App extends Component {
    constructor(){
        super();
        this.state={
            //pacman className
            top_pacman:"SMC pacman top-pacman",
            bottom_pacman:"CPC pacman bottom-pacman",
            //pacman style
            bracketDisappear:{display:"inline-block"},
            //pacman methods
            pacmanStartMove:this.pacmanStartMove,
        }
    }
    pacmanStartMove(){

        this.setState({bracketDisappear:{display:"none"}});
        this.setState({pacmanStartMove:undefined});
        setTimeout(()=>{
            this.setState({top_pacman:"pacman top-pacman pacman-top-running"});
            this.setState({bottom_pacman:"pacman bottom-pacman pacman-bottom-running"});
        },1000);

    }
    render(){

        return(
            <Pacman state={this.state} pacmanStartMove={()=>{this.pacmanStartMove()}}/>
        )
    }
}

export default App;
