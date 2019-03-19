import NewsItemPage from '../components/NewsItemPage';
import { getNews } from '../../../store/reducers/news/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		newsList: state.News.newsList,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getNewsItem: (id) => dispatch(getNews(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemPage);
