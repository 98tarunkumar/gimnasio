class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowerCase=message.toLowerCase();
      if(lowerCase.includes("hello")){
        this.actionProvider.greet();
      }
      else if(lowerCase.includes("bye")){
        this.actionProvider.bye();
      }
      else if(lowerCase.includes("javascript")|| lowerCase.includes("js")){
        this.actionProvider.handleJavaScriptQuiz();
      }
    }
  }
  
  export default MessageParser;