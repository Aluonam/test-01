
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import FormComponent from './FormComponent';

// test('debe mostrar errores de validación cuando los campos están vacíos', () => {
//   render(<FormComponent />);

//   fireEvent.click(screen.getByText('Enviar'));

//   expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument();
//   expect(screen.getByText('El correo electrónico es obligatorio')).toBeInTheDocument();
// });

// test('debe mostrar un error cuando el correo electrónico no es válido', () => {
//   render(<FormComponent />);

//   fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Juan' } });
//   fireEvent.change(screen.getByLabelText('Correo electrónico:'), { target: { value: 'correo-invalido' } });
//   fireEvent.click(screen.getByText('Enviar'));

//   expect(screen.queryByText('El nombre es obligatorio')).toBeNull();
//   expect(screen.getByText('El correo electrónico no es válido')).toBeInTheDocument();
// });

// test('debe enviar el formulario correctamente cuando los campos son válidos', () => {
//   render(<FormComponent />);

//   fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Juan' } });
//   fireEvent.change(screen.getByLabelText('Correo electrónico:'), { target: { value: 'juan@example.com' } });
//   fireEvent.click(screen.getByText('Enviar'));

//   expect(screen.queryByText('El nombre es obligatorio')).toBeNull();
//   expect(screen.queryByText('El correo electrónico no es válido')).toBeNull();
//   expect(screen.queryByText('El correo electrónico es obligatorio')).toBeNull();
// });
