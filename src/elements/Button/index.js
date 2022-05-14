//rfc
import React from 'react'

//KEY : imrr
//untuk route navigaton di aplikasi
import { Link } from 'react-router-dom'

//impt
import propTypes from 'prop-types'

export default function Button(props) {
    const className = [props.className]
    if(props.isPrimary) className.push("btn-primary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadow) className.push("btn-shadow")

    //handle onCLick
    const onClick = () => {
        //memastikan Button tersedia properti onClick atau tidak
        if(props.onClick) props.onClick()
    }

    if(props.isDisable || props.isLoading){
        //disabled = bootstrap untuk Button nggak bisa di click
        if(props.isDisable) className.push("disabled")
        return(
            <span className={className.join(' ')} 
                style={props.style} >
                {props.isLoading ? (
                <>
                <span className='spinner-boarder spinner.boarder-sm mx-5'></span>
                <span className='sr-only'>Loading...</span></>
                ):(
                    props.children
                )}
            </span>
        )
    }

    if(props.type === "link") {
        if(props.isExternal){
            return(
                //props.children berisi apa yang didalam return
                //join = mengubah array jadi string dan dipisah sesuai space
                <a href={props.href} 
                className={className.join(' ')} 
                style={props.style} 
                //noopenner noreferrer untuk Source Engine Optimization, jika tidak ada noopenner noreferrer maka akan dapat warning di Logs
                target={props.target === "_blank" ?"noopenner noreferrer":undefined}
                rel={props.target === "_blank" ?"noopenner noreferrer":undefined}>{props.children}</a>
            )
        }else {
            return(
                //Link kedalam aplikasi
                <Link to={props.href} 
                className={className.join(' ')} 
                style={props.style} 
                // onClick={onClick}
                >
                {props.children}
                </Link>
            )
        }
    }
    return (
        <button className={className.join(' ')} 
                // style={props.style} onClick={onClick}
                >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    //oneOf = enum. Hanya terima properti tertentu
    type: propTypes.oneOf(["button", "link"]),
    //memastikan Button akan memiliki function
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    //memastikan Button atau Link disable
    isDisable: propTypes.bool,
    //untuk Loading spinner
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    //memastikan Button mengarah ke luar atau dalam aplikasi
    isExternal: propTypes.bool,
    hasShadow: propTypes.bool,
    isPrimary: propTypes.bool
}
