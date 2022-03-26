import PropTypes from "prop-types";
import styled from "./Button.module.css"

const Button = ({ text, isClick, onIsClick}) => {
    return (
        <button className={styled.btn} onClick={() => onIsClick(!isClick)}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;