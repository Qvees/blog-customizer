import { createRoot } from 'react-dom/client';
import React, { StrictMode, CSSProperties, useState } from 'react';
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
	const [pageOption, setPageOption] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': pageOption.fontFamilyOption.value,
					'--font-size': pageOption.fontSizeOption.value,
					'--font-color': pageOption.fontColor.value,
					'--container-width': pageOption.contentWidth.value,
					'--bg-color': pageOption.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				pageOption={pageOption}
				setPageOption={setPageOption}
			/>

			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

export default App;
