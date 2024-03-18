import { createRoot } from 'react-dom/client';
import React, { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	// Создаем состояние для данных формы
	const [formData, setFormData] = useState(defaultArticleState);

	// Функция для обновления данных формы
	const handleFormSubmit = (newFormData: ArticleStateType) => {
		setFormData(newFormData);
	};

	const handleResetStyles = () => {
		setFormData(defaultArticleState); // сбрасываем состояние formData
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': formData.fontFamilyOption.value,
					'--font-size': formData.fontSizeOption.value,
					'--font-color': formData.fontColor.value,
					'--container-width': formData.contentWidth.value,
					'--bg-color': formData.backgroundColor.value,
				} as CSSProperties
			}>
			{/* передаем данные формы в компонент ArticleParamsForm */}
			<ArticleParamsForm
				onSubmit={handleFormSubmit}
				onReset={handleResetStyles}
			/>

			{/* передаем данные формы в компонент Article */}
			<Article formData={formData} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

export default App;
