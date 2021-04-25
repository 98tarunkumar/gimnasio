import React from 'react'
import './styles.css'

const LinkList = (props) =>{

    const LinkMarkup=props.options.map((link)=>(
        <li key={link.id} className="link-list-item">
            <a 
                href={link.url}
                terget="_blank"
                rel="noopener noreferrer"
                className="link-list-item-url"
            >
                {link.text}
            </a>

        </li>
    ))


    return <ul className="link-list" >{LinkMarkup}</ul>
}


export default LinkList