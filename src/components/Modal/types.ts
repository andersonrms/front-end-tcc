import { ReactNode } from "react"

export interface ModalProps{
    children: ReactNode
    className?: string,
    autoWidth?: boolean,
    fullScreen?: boolean,
    callbacks?: ModalCallbacksProps;
}

export interface ModalCallbacksProps {
    onOpen?: () => void;
    onClose?: () => void;
    onCloseButtonClick?: (e: React.SyntheticEvent) => void;
    onBackdropClick?: (e: React.SyntheticEvent) => void;
  }