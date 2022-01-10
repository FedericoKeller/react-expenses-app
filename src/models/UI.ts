type ButtonActions = 'submit' | 'button' | 'reset';

export interface ButtonProps {
    onClickEvent?: () => void;
    type: ButtonActions;
}