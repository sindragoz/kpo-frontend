export default function SearchInfo(state = [], action) {
	console.log('REDUX STATE-->', state);
	switch (action.type) {
		case 'GET_NEWS':
			if (action.status == 'processing') return { ...state, gettingNews: true, gettingNewsError: true };
			if (action.status == 'success') {
				return { ...state, gettingNews: false, newsList: action.payload };
			}
			return { ...state, gettingNews: false, gettingNewsError: true };
		case 'CREATE_NEWS':
			if (action.status == 'processing') return { ...state, creatingNews: true, creatingNewsError: false };
			if (action.status == 'success') {
				return { ...state, creatingNews: false };
			}
			if (action.status === 'error') return { ...state, creatingNews: false, creatingNewsError: true };
			return { ...state, creatingNews: false, creatingNewsError: true };
		default:
			return state;
	}
}
