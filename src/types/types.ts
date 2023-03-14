export interface IButtonProps {
    text: string;
    className: string;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export interface IInput {
    value: string;
    onChange(event: React.FormEvent<HTMLInputElement>): void;
    className: string;
    type: string;
    placeholder?: string;
    autoFocus?: boolean;
    onBlur?: () => void;
}

export interface IFormAddActionProps {
    body: string;
    setBody(value: string): void;
    addNewAction(event: React.MouseEvent<HTMLButtonElement>): void;
}

export interface IFormEditActionProps {
    text: string
    setText(value: string): void;
    setIsEdit(value: boolean): void;
}

export interface ISearchIconProps {
    onClick(event: React.MouseEvent<HTMLDivElement>): void;
}

export interface IActionListProps {
    removePost(id: number): (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IActionProps {
    action: IAction;
    removePost: Function;
    key: number;
    number: number;
}

export interface IActionControlsProps {
    copyActions: IAction[]
    setCopyActions(value: IAction[]): void;
}

export interface IAction {
    id: number;
    body: string;
}

export interface IActionsContext {
    actions: IAction[];
    setActions: Function;
}
