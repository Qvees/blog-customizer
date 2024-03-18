import React, { useState } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import {
	OptionType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';

interface ArticleParamsFormProps {
	onSubmit: (formData: ArticleStateType) => void;
	onReset: () => void;
}

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({
	onSubmit,
	onReset,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState<ArticleStateType>({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	const handleFontFamilyChange = (option: OptionType) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			fontFamilyOption: option,
		}));
	};

	const handleFontSizeChange = (option: OptionType) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			fontSizeOption: option,
		}));
	};

	const handleFontColorChange = (option: OptionType) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			fontColor: option,
		}));
	};

	const handleBackgroundColorChange = (option: OptionType) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			backgroundColor: option,
		}));
	};

	const handleContentWidthChange = (option: OptionType) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			contentWidth: option,
		}));
	};

	const handleArrowButtonClick = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	const handleReset = () => {
		setFormData(defaultArticleState); // Сбрасываем состояние формы
		onReset(); // Вызываем функцию сброса стилей на сайте
	};

	const handleSubmit = () => {
		onSubmit(formData);
	};
	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleArrowButtonClick} />
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<h2 className={styles.formTitle}>Задайте параметры</h2>
					<Select
						selected={formData.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleFontFamilyChange}
						title='Шрифт:'
					/>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={formData.fontSizeOption}
						onChange={handleFontSizeChange}
						title='Размер шрифта:'
					/>
					<Select
						selected={formData.fontColor}
						options={fontColors}
						onChange={handleFontColorChange}
						title='Цвет шрифта:'
					/>
					<Select
						selected={formData.backgroundColor}
						options={backgroundColors}
						onChange={handleBackgroundColorChange}
						title='Фоновый цвет:'
					/>
					<Select
						selected={formData.contentWidth}
						options={contentWidthArr}
						onChange={handleContentWidthChange}
						title='Ширина контента:'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Reset' type='button' onClick={handleReset} />
						<Button title='Apply' type='button' onClick={handleSubmit} />
					</div>
				</form>
			</aside>
		</>
	);
};
