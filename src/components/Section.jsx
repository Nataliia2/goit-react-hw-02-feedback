import React from "react"
import {Thumb,Title} from './Section.styles'
const Section = ({title,children})=>{
    return(
        <Thumb>
            <Title>{title}</Title>
            {children}
        </Thumb>
    )
}
export default Section;