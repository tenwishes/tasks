import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: AffairType) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair)} // ???

    return (
        <div>
            <span key={props.affair._id}>{props.affair.name}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}
export default Affair
