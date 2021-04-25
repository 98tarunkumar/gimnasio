class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet=()=>{
        const message=this.createChatBotMessage("Hello friend");
        this.addMessageToState(message)
    }
    bye=()=>{
      const message=this.createChatBotMessage("See ya!!");
      this.addMessageToState(message)
    }


    handleStrengthTraining =()=>{
      const message=this.createChatBotMessage(
        "We got your back,Let's go!!",
        {
          widget:"strengthTraining"
        }
      )
      this.addMessageToState(message)
    }


    addMessageToState=(message)=>{
      this.setState(prevState=>({ //save the previous state, before updating the new message
        ...prevState,
        messages:[...prevState.messages,message]
      }))
    }
  }
  
  export default ActionProvider;