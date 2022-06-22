import React from 'react'
import Message from "./Message";
import bg from "./HW1.module.css";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'wvv',
    message: 'some dasdddddddddddd4233568793    469yt7890   g394y97 3hg9v83dddddddddtext',
    time: '22:00',
}

const messageData2 = {
    avatar: 'https://i.pinimg.com/564x/bc/2d/f3/bc2df3634c0a8258b73a69b8be108453.jpg',
    name: 'nevermore',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    time: '22:47',
}

function HW1() {
    return (
        <div className={bg.background}>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
