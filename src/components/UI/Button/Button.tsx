import { FC } from "react";
import { ButtonProps } from "../../../models/UI";
import './Button.css';

const Button: FC<ButtonProps> = (props) => {
    return <button className="btn" onClick={props.onClickEvent} type={props.type}>{props.children}</button>;
}

export default Button;