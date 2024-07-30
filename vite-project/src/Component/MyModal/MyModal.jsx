import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const MyModal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        empresa: '',
        descripcion: '',
        comentarios: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.trimStart(),
        }))
    }

    const handleKeyPress = (e) => {
        const charCode = e.charCode
        if (charCode < 48 || charCode > 57) {
            e.preventDefault()
        }
    }

    const handleKeyPressLetters = (e) => {
        const { value } = e.target
        const charCode = e.charCode

        const isLetter = (charCode >= 65 && charCode <= 90) || 
                         (charCode >= 97 && charCode <= 122) || 
                         (charCode >= 192 && charCode <= 255)

        const isSpace = charCode === 32

        if (isLetter || (isSpace && value[value.length - 1] !== ' ')) {
            return
        }

        e.preventDefault()
    }

    const handleKeyPressEmail = (e) => {
        if (e.charCode === 32) {
            e.preventDefault()
        }
    }

    // Validación de los campos del formulario
    const validate = () => {
        const newErrors = {}
        const nombrePattern = /^[A-Za-zÀ-ÖØ-ÿ\s]+$/
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const telefonoPattern = /^[0-9]+$/

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es obligatorio.'
        } else if (!nombrePattern.test(formData.nombre)) {
            newErrors.nombre = 'El nombre solo puede contener letras.'
        }

        if (!formData.apellido.trim()) {
            newErrors.apellido = 'El apellido es obligatorio.'
        } else if (!nombrePattern.test(formData.apellido)) {
            newErrors.apellido = 'El apellido solo puede contener letras.'
        }
        
        if (!formData.correo.trim()) {
            newErrors.correo = 'El correo electrónico es obligatorio.'
        } else if (!emailPattern.test(formData.correo) || /\s/.test(formData.correo))  {
            newErrors.correo = 'Ingresa un correo electrónico válido.'
        }
        
        if (!formData.telefono.trim()) {
            newErrors.telefono = 'El número de teléfono es obligatorio.'
        } else if (!telefonoPattern.test(formData.telefono)) {
            newErrors.telefono = 'El número de teléfono solo puede contener dígitos.'
        }
        
        if (!formData.empresa.trim()) {
            newErrors.empresa = 'El nombre de la empresa es obligatorio.'
        }

        if (!formData.descripcion.trim()) {
            newErrors.descripcion = 'La descripción del proyecto es obligatoria.'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            // Limpiar los datos del formulario
            setFormData({
                nombre: '',
                apellido: '',
                correo: '',
                telefono: '',
                empresa: '',
                descripcion: '',
                comentarios: '',
            })

            // Cerrar el modal después de enviar el formulario
            handleClose()
        }
    }

    return (
        <Modal show={show} onHide={() => {
            setFormData({
                nombre: '',
                apellido: '',
                correo: '',
                telefono: '',
                empresa: '',
                descripcion: '',
                comentarios: '',
            })
            handleClose()
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
                            onKeyPress={handleKeyPressLetters}
                            placeholder="Ingresa tu nombre"
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
                            onKeyPress={handleKeyPressLetters}
                            placeholder="Ingresa tu apellido"
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
                            onKeyPress={handleKeyPressEmail}
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
                            onKeyPress={handleKeyPress}
                            placeholder="Ingresa tu número de teléfono"
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
                            onKeyPress={handleKeyPressLetters}
                            placeholder="Ingresa el nombre de la empresa o proyecto"
                            required
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
                            onKeyPress={handleKeyPressLetters}
                            rows={10} 
                            placeholder="Ingresa la descripción del proyecto"
                            required
                            isInvalid={!!errors.descripcion}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.descripcion}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formComentarios" className="mt-3">
                        <Form.Label>Comentarios Adicionales</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            name="comentarios" 
                            value={formData.comentarios} 
                            onChange={handleChange}
                            rows={10} 
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
                            })
                            handleClose()
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
    )
}

export default MyModal
