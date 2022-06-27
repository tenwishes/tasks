import React from 'react'
import Message from "./Message";
import bg from "./HW1.module.css";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'wvv',
    message: 'some dasdddddddddddd4233568793    469yt7890   g394y97 3hg9v83dddddddddtext',
    time: '22:00',
}
const messageData3 = {
    avatar: 'https://i.pinimg.com/564x/34/d4/0a/34d40a6d3b181f070c081c21e628cce2.jpg',
    name: 'nevermore',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting indusook a galley of type and scrambled it to make a type specimen book.',
    time: '23:01',
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
                avatar={messageData3.avatar}
                name={messageData3.name}
                message={messageData3.message}
                time={messageData3.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
