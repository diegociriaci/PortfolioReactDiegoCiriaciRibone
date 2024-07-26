// src/Component/NotificacionFormulario/NotificacionFormulario.jsx
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Asegúrate de que esto esté importado

const NotificacionFormulario = ({ show, message, onClose }) => {
    const toastRef = useRef(null);

    useEffect(() => {
        if (show && window.bootstrap) {
            const toastElement = toastRef.current;
            if (toastElement) {
                const toast = new window.bootstrap.Toast(toastElement);
                toast.show();
            }
        }
    }, [show]);

    return (
        <div className="toast-container position-fixed top-0 start-0 p-3">
            <div ref={toastRef} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">Notificación</strong>
                    <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
        </div>
    );
};

export default NotificacionFormulario;
