//http://localhost/planetary/shedule/?day_id=1

import axios from 'axios';

export const createNews = (newsHeader, newsPreviewText, newsMainText) => (dispatch) => {
	dispatch({ type: 'CREATE_NEWS', status: 'processing' });
	axios
		.post(
			'http://localhost:8081/http://localhost/planetary/news/',
			{
				date: new Date(),
				newsHeader,
				newsPreviewText,
				newsMainText,
			},
			{
				headers: {
					Authorization: localStorage['token'],
				},
			}
		)
		.then(() => {
			dispatch({ type: 'CREATE_NEWS', status: 'success' });
		})
		.catch(() => {
			dispatch({ type: 'CREATE_NEWS', status: 'error' });
		});
};

export const getNews = (id) => (dispatch) => {
	const idString = id ? '?id=' + id : '';
	dispatch({ type: 'GET_NEWS', status: 'processing' });
	axios
		.get('http://localhost:8081/http://localhost/planetary/news/' + idString)
		.then((response) => {
			dispatch({ type: 'GET_NEWS', status: 'success', payload: response.data });
		})
		.catch((ex) => {
			dispatch({ type: 'GET_NEWS', status: 'error' });
		});
};
