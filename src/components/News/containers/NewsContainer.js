import News from '../components/News';
import { getNews } from '../../../store/reducers/news/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		newsList: state.News.newsList,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getNews: () => dispatch(getNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
