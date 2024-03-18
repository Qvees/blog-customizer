// ArrowButton.stories.tsx
import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { ArrowButton, ArrowButtonProps } from './ArrowButton';

const meta: Meta<ArrowButtonProps> = {
	component: ArrowButton,
	title: 'Components/ArrowButton',
};

export default meta;

export const ArrowButtonStory: Story<ArrowButtonProps> = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleButtonClick = () => {
		setIsOpen(!isOpen);
	};

	return <ArrowButton isOpen={isOpen} onClick={handleButtonClick} />;
};
