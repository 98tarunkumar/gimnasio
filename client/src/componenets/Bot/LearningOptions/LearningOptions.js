import React from 'react'
import './styles.css'

const LearningOptions=(props)=>{

    const options=[
        {
            text:"Strength Training",
            handler:props.actionProvider.handleStrengthTraining,
            id:1
        },
        {text:"Yoga",handler:()=>{},id:2},
        {text:"Calisthenics",handler:()=>{},id:3},
        {text:"Weight Loss",handler:()=>{},id:4},
        {text:"Weight Gain",handler:()=>{},id:5},
    ];

    const optionnsMarkup=options.map((option)=>(
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ))

    return <div className="learning-options-container">{optionnsMarkup}</div>
}
export default LearningOptions