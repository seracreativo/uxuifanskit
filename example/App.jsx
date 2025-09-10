// Ejemplo de uso de los componentes UXUI Fans Kit
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import {
	Form,
	Section,
	Button,
	Input,
	Card,
	Spacer,
	Label,
	Note,
} from 'uxuifanskit';

export default function ExampleApp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = () => {
		Alert.alert('Formulario', `Nombre: ${name}\nEmail: ${email}`);
	};

	return (
		<Form>
			<Section title='Ejemplo de UXUI Fans Kit'>
				<Note>
					Esta es una demostración de los componentes disponibles en la
					librería.
				</Note>

				<Spacer height={20} />

				<Card>
					<Label>Formulario de Ejemplo</Label>
					<Spacer height={16} />

					<Input
						label='Nombre'
						placeholder='Ingresa tu nombre'
						value={name}
						onChangeText={setName}
					/>

					<Input
						label='Email'
						placeholder='ejemplo@correo.com'
						value={email}
						onChangeText={setEmail}
						keyboardType='email-address'
					/>

					<Button onPress={handleSubmit}>Enviar</Button>
				</Card>

				<Spacer height={20} />

				<Card onPress={() => Alert.alert('Card', 'Card presionada!')}>
					<Label>Card Interactiva</Label>
					<Note>Esta card es presionable</Note>
				</Card>
			</Section>
		</Form>
	);
}
