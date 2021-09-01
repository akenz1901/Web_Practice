import React from 'react'

const Button = (props) => {
    const btn_properties = {
        height: props.height,
        width: props.width,
        color: props.color,
        borderStyle: props.borderStyle,
        borderRadius: props.borderRadius,
        backgroundColor:props.backgroundColor,
    }

    return(
        <button style={btn_properties}>{props.Button}</button>
    );
}
export default Button;