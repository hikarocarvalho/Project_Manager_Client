import React from "react";
import "./Modal.css";
const Modal = ({children}) => (
    <section className="modal">
        {children}
    </section>
)
export default Modal;