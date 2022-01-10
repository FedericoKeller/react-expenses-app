import { FC } from "react";
import { ButtonProps } from "../../../models/ui.interface";
import './Button.css';

const Button: FC<ButtonProps> = (props) => {
    return <button className="btn" onClick={props.onClickEvent} type={props.type}>{props.children}</button>;
}

export default Button;