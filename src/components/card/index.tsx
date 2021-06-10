import React from 'react'
import './index.css'

interface PropsCard {
    name: string,
    price:number,
    img:string,
    action:(event: React.MouseEvent<HTMLDivElement, MouseEvent>)=> void,
    type:string
}


const Card = (props:PropsCard) =>{
    return (
        <div onClick={props.action} className="card">
        <div className="card-container">
            <div className="card-image">

            <img className="card-container-img " src={props.img}/>
            </div>

        </div>
        <div  className="card-container-text">
            {props.name}<br/>
            ${props.price}
        </div>
        </div>
    )
}

export default Card