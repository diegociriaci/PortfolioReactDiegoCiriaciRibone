import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const MyModal = ({ show, handleClose }) => {
    // Define the state to handle form data and validation
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        empresa: '',
        descripcion: '',
        comentarios: '',
    })

    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    // Validate form fields
    const validate = () => {
        const newErrors = {}
        
        // Validate nombre and apellido (only letters allowed)
        const namePattern = /^[A-Za-zÀ-ÖØ-ÿ]+$/
        if (!namePattern.test(formData.nombre)) {
            newErrors.nombre = 'El nombre solo puede contener letras.'
        }
        if (!namePattern.test(formData.apellido)) {
            newErrors.apellido = 'El apellido solo puede contener letras.'
        }
        
        // Validate correo (email format)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(formData.correo)) {
            newErrors.correo = 'Ingresa un correo electrónico válido.'
        }
        
        // Validate telefono (only numbers allowed)
        const phonePattern = /^[0-9]+$/
        if (!phonePattern.test(formData.telefono)) {
            newErrors.telefono = 'El número de teléfono solo puede contener dígitos.'
        }
        
        // Validate empresa (can be empty, but must be alphanumeric if filled)
        const companyPattern = /^[A-Za-z0-9\s]+$/
        if (formData.empresa && !companyPattern.test(formData.empresa)) {
            newErrors.empresa = 'El nombre de la empresa solo puede contener letras, números y espacios.'
        }
        
        // Validate descripcion and comentarios (can be any text)
        // No specific pattern required for these fields

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            // Form is valid, perform your submission logic here
            console.log('Form data submitted:', formData)

            // Clear form fields
            setFormData({
                nombre: '',
                apellido: '',
                correo: '',
                telefono: '',
                empresa: '',
                descripcion: '',
                comentarios: '',
            })

            // Close the modal
            handleClose()
        }
    }

    // Handle modal close
    const handleModalClose = () => {
        // Clear form fields
        setFormData({
            nombre: '',
            apellido: '',
            correo: '',
            telefono: '',
            empresa: '',
            descripcion: '',
            comentarios: '',
        });
        // Call the passed close handler
        handleClose()
    }

    useEffect(() => {
        if (show) {
            setFormData({
                nombre: '',
                apellido: '',
                correo: '',
                telefono: '',
                empresa: '',
                descripcion: '',
                comentarios: '',
            })
        }
    }, [show])

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
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
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                        <Button variant="secondary" onClick={handleModalClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default MyModal
