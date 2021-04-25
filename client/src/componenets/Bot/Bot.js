import React,{Component} from 'react'
import './Bot.css'
import config from './config.js'
import ActionProvider from './ActionProvider.js'
import MessageParser from './MessageParser.js'
import Chatbot from 'react-chatbot-kit'
import BOT from './speak.png'
// function Bot() {
class Bot extends Component{


    constructor(props, context) {
        super(props, context);

        this.state = {
            active: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render(){
    return (
        <div className="outer">

            {this.state.active && 
                 <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                /> 
            }
            <div className={!this.state.active? "chatbot":"clear"}  onClick={this.handleClick}>
                <img src={BOT}></img>
                {/* <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                /> */}
            </div>

            
            
        </div>
    )
    }
}

export default Bot
