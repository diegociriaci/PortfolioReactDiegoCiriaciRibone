// src/Component/Modal/MyModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import NotificacionFormulario from '../NotificacionFormulario/NotificacionFormulario';

const MyModal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        empresa: '',
        descripcion: '',
        comentarios: '',
    });

    const [errors, setErrors] = useState({});
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        const namePattern = /^[A-Za-zÀ-ÖØ-ÿ]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]+$/;
        const companyPattern = /^[A-Za-z0-9\s]*$/;

        if (!namePattern.test(formData.nombre)) {
            newErrors.nombre = 'El nombre solo puede contener letras.';
        }
        if (!namePattern.test(formData.apellido)) {
            newErrors.apellido = 'El apellido solo puede contener letras.';
        }
        if (!emailPattern.test(formData.correo)) {
            newErrors.correo = 'Ingresa un correo electrónico válido.';
        }
        if (!phonePattern.test(formData.telefono)) {
            newErrors.telefono = 'El número de teléfono solo puede contener dígitos.';
        }
        if (formData.empresa && !companyPattern.test(formData.empresa)) {
            newErrors.empresa = 'El nombre de la empresa solo puede contener letras, números y espacios.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Mostrar el toast
            setToastMessage('¡Formulario enviado exitosamente!');
            setToastVisible(true);

            // Limpiar los datos del formulario
            setFormData({
                nombre: '',
                apellido: '',
                correo: '',
                telefono: '',
                empresa: '',
                descripcion: '',
                comentarios: '',
            });

            // Cerrar el modal después de mostrar el toast
            handleClose();
        }
    };

    return (
        <>
            <Modal show={show} onHide={() => {
                setFormData({
                    nombre: '',
                    apellido: '',
                    correo: '',
                    telefono: '',
                    empresa: '',
                    descripcion: '',
                    comentarios: '',
                });
                handleClose();
            }} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Contacta con nosotros</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nombre" 
                                value={formData.nombre} 
                                onChange={handleChange} 
                                placeholder="Ingresa tu nombre"
                                pattern="[A-Za-zÀ-ÖØ-ÿ]+" 
                                required
                                isInvalid={!!errors.nombre}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.nombre}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formApellido" className="mt-3">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="apellido" 
                                value={formData.apellido} 
                                onChange={handleChange} 
                                placeholder="Ingresa tu apellido"
                                pattern="[A-Za-zÀ-ÖØ-ÿ]+" 
                                required
                                isInvalid={!!errors.apellido}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.apellido}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formCorreo" className="mt-3">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="correo" 
                                value={formData.correo} 
                                onChange={handleChange} 
                                placeholder="Ingresa tu correo electrónico"
                                required
                                isInvalid={!!errors.correo}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.correo}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formTelefono" className="mt-3">
                            <Form.Label>Número de Teléfono</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="telefono" 
                                value={formData.telefono} 
                                onChange={handleChange} 
                                placeholder="Ingresa tu número de teléfono"
                                pattern="[0-9]+" 
                                required
                                isInvalid={!!errors.telefono}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.telefono}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formEmpresa" className="mt-3">
                            <Form.Label>Nombre de la Empresa o Proyecto</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="empresa" 
                                value={formData.empresa} 
                                onChange={handleChange} 
                                placeholder="Ingresa el nombre de la empresa o proyecto"
                                pattern="[A-Za-z0-9\s]*"
                                isInvalid={!!errors.empresa}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.empresa}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formDescripcion" className="mt-3">
                            <Form.Label>Descripción del Proyecto</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="descripcion" 
                                value={formData.descripcion} 
                                onChange={handleChange} 
                                rows={3} 
                                placeholder="Ingresa la descripción del proyecto"
                            />
                        </Form.Group>
                        <Form.Group controlId="formComentarios" className="mt-3">
                            <Form.Label>Comentarios Adicionales</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="comentarios" 
                                value={formData.comentarios} 
                                onChange={handleChange} 
                                rows={3} 
                                placeholder="Ingresa comentarios adicionales"
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => {
                                setFormData({
                                    nombre: '',
                                    apellido: '',
                                    correo: '',
                                    telefono: '',
                                    empresa: '',
                                    descripcion: '',
                                    comentarios: '',
                                });
                                handleClose();
                            }}>
                                Cerrar
                            </Button>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Toast Notification */}
            <NotificacionFormulario 
                show={toastVisible} 
                message={toastMessage}
                onClose={() => setToastVisible(false)} 
            />
        </>
    );
};

export default MyModal;
