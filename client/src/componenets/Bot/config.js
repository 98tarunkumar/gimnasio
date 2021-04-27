import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import './Bot.css'
import LearningOptions from './LearningOptions/LearningOptions';
import LinkList from './LinkList/LinkList';
const config = {
    botName:'Gimnasio',
    initialMessages: [
      createChatBotMessage("Hello User", {
        widget: "TrainingOptions",
        widget:"YogaOptions",
        widget:"CalOptions",
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
              "page5",
            id: 2,
          },
          {
            text: "Pull Workout",
            url: "page2",
            id: 3,
          },
        ],
       
      }
    },
    {
      widgetName: "YogaOptions",
     widgetFunc: (props) => <LearningOptions {...props} />,
   },
   {
    widgetName:"yogaOptions",
    widgetFunc:(props)=><LinkList {...props} />,
    props:{
      options: [
        {
          text: "Begineer",
          url:
            "yogabeginer",
          id: 1,
        },
        {
          text: "Intermediate",
          url:
            "intermediateyoga",
          id: 2,
        },
        {
          text: "Advanced",
          url: "advanceyoga",
          id: 3,
        },
      ],
    },
  },
    {
      widgetName: "CalOptions",
     widgetFunc: (props) => <LearningOptions {...props} />,
   },
   {
    widgetName:"calOptions",
    widgetFunc:(props)=><LinkList {...props} />,
    props:{
      options: [
        {
          text: "Begineer",
          url:
            "calbegin1",
          id: 1,
        },
        {
          text: "Intermediate",
          url:
            "calinter1",
          id: 2,
        },
        {
          text: "Advanced",
          url: "advancecal1",
          id: 3,
        },
      ],
    },
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