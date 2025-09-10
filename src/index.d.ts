import { ReactNode } from 'react';

// Componentes básicos
export interface ButtonProps {
	children: ReactNode;
	onPress?: () => void;
	func?: () => void; // Para compatibilidad con versiones anteriores
	className?: string;
	disabled?: boolean;
}

export interface SpacerProps {
	height?: number;
	width?: number;
	className?: string;
}

// Componentes UI
export interface FormProps {
	children?: ReactNode;
	func?: () => void;
	scroll?: boolean;
	map?: boolean;
	btn?: ReactNode;
}

export interface SectionProps {
	children: ReactNode;
	title?: string;
	className?: string;
}

export interface LabelProps {
	children: ReactNode;
	className?: string;
}

export interface InputLabelProps {
	children: ReactNode;
	className?: string;
	required?: boolean;
}

export interface NoteProps {
	children: ReactNode;
	className?: string;
}

export interface FooterProps {
	children: ReactNode;
	className?: string;
}

export interface InputProps {
	label?: string;
	placeholder?: string;
	value?: string;
	onChangeText?: (text: string) => void;
	className?: string;
	error?: string;
	multiline?: boolean;
	secureTextEntry?: boolean;
	keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

export interface CardProps {
	children: ReactNode;
	onPress?: () => void;
	className?: string;
	padding?: boolean;
	shadow?: boolean;
}

// Declaraciones de componentes
export declare const Button: React.FC<ButtonProps>;
export declare const Spacer: React.FC<SpacerProps>;
export declare const Form: React.FC<FormProps>;
export declare const Section: React.FC<SectionProps>;
export declare const Label: React.FC<LabelProps>;
export declare const InputLabel: React.FC<InputLabelProps>;
export declare const Note: React.FC<NoteProps>;
export declare const Footer: React.FC<FooterProps>;
export declare const Input: React.FC<InputProps>;
export declare const Card: React.FC<CardProps>;
export declare const Featured: React.FC<any>;
export declare const FooterSection: React.FC<any>;
