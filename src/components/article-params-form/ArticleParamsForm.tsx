import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
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
import { Text } from '../text/Text';
import { Separator } from '../separator';

interface ArticleParamsFormProps {
	pageOption: ArticleStateType;
	setPageOption: (pageOption: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	pageOption,
	setPageOption,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [formValues, setFormValues] = useState<ArticleStateType>(pageOption);
	const formRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (formRef.current && !formRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	const handleFontFamilyChange = (option: OptionType) => {
		setFormValues((prevFormValues) => ({
			...prevFormValues,
			fontFamilyOption: option,
		}));
	};

	const handleFontSizeChange = (option: OptionType) => {
		setFormValues((prevFormValues) => ({
			...prevFormValues,
			fontSizeOption: option,
		}));
	};

	const handleFontColorChange = (option: OptionType) => {
		setFormValues((prevFormValues) => ({
			...prevFormValues,
			fontColor: option,
		}));
	};

	const handleBackgroundColorChange = (option: OptionType) => {
		setFormValues((prevFormValues) => ({
			...prevFormValues,
			backgroundColor: option,
		}));
	};

	const handleContentWidthChange = (option: OptionType) => {
		setFormValues((prevFormValues) => ({
			...prevFormValues,
			contentWidth: option,
		}));
	};

	const handleReset = () => {
		setFormValues(defaultArticleState);
		setPageOption(defaultArticleState);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setPageOption(formValues);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				ref={formRef}
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text size={31} weight={800} align='left' family='open-sans'>
						Задайте параметры
					</Text>

					<Select
						selected={formValues.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleFontFamilyChange}
						title='Шрифт:'
					/>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={formValues.fontSizeOption}
						onChange={handleFontSizeChange}
						title='Размер шрифта:'
					/>
					<Select
						selected={formValues.fontColor}
						options={fontColors}
						onChange={handleFontColorChange}
						title='Цвет шрифта:'
					/>
					<Separator></Separator>
					<Select
						selected={formValues.backgroundColor}
						options={backgroundColors}
						onChange={handleBackgroundColorChange}
						title='Фоновый цвет:'
					/>
					<Select
						selected={formValues.contentWidth}
						options={contentWidthArr}
						onChange={handleContentWidthChange}
						title='Ширина контента:'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
