import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../SCSS/selectColor.style.scss'

type colorData = {
    colorFirst : string,
    colorSecond : string,
    colorThird : string
}

export default function SelectColor(props : {color :  colorData , index : number , handleMouseOver : (index: number) => void ,handleMouseOut : (index: number) => void }) {
    const {color : {colorFirst , colorSecond, colorThird} , handleMouseOver , handleMouseOut , index} = props;
    return (
        <select defaultValue={`Цвет`} className="select-color" onMouseOver={() => handleMouseOver(index)} onMouseOut={() => handleMouseOut(index)}>
            <option value="Цвет" disabled>Цвет</option>
            <option value={colorFirst}>{colorFirst}</option>
            <option value={colorSecond}>{colorSecond}</option>
            <option value={colorThird}>{colorThird}</option>
        </select>
    )
}
