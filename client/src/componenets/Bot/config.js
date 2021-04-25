import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import './Bot.css'
import LearningOptions from './LearningOptions/LearningOptions';
import LinkList from './LinkList/LinkList';
const config = {
    botName:'Gymnasio',
    initialMessages: [
      createChatBotMessage("Hello User", {
        widget: "TrainingOptions",
      }),
    ],
 
    widgets: [
    {
     	widgetName: "TrainingOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName:"strengthTraining",
      widgetFunc:(props)=><LinkList {...props} />,
      props:{
        options: [
          {
            text: "Push Workout",
            url:
              "page1",
            id: 1,
          },
          {
            text: "Core/Legs workout",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Pull Workout",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      }
    },
 ],
  







  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
    userChatMessage:{
      backgroundColor:"purple"
    }
  },
}

export default config