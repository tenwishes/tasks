import React from 'react'
import msg from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={msg.message__box}>
                <img className={msg.message__image} src={props.avatar} alt="avatar"/>
                <div>
                    <div className={msg.message__inside}>
                        <span className={msg.message__name}>{props.name}</span>
                        <div className={msg.message__text}>
                            <p>{props.message}</p>
                        </div>
                        <span className={msg.message__time}>{props.time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
