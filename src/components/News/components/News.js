import React from 'react';

import Menu from '../../Menu';
import { withStyles } from '@material-ui/core/styles';

import NewsItem from './NewsItem';


import '../styles.css';

const styles = {
	root: {
		background: 'black',
	},
	dataSelect: {
		background: 'white',
		width: 120,
		marginLeft: 55,
		padding: 2,
	},
	timeTable: {
		marginTop: 50,
		width: '100%',
	},
	newsContainer: {
		marginTop: 100,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},
	timeItem: {
		background: 'rgb(240,240,240)',
		padding: 10,
		border: '2px solid lightBlue',
		'&:hover': {
			cursor: 'pointer',
			background: 'white',
		},
	},
	firstTimeItem: {
		paddingLeft: 90,
	},
	timeSpan: {
		fontSize: 20,
		lineHeight: '30px',
		fontWeight: 'bold',
	},
	confirmButton: {
		marginTop: 50,
		marginBottom: '-20px',
		width: 150,
		marginLeft: 55,
	},
	timeSelected: {
		background: 'rgb(240,240,240)',
		padding: 10,
		border: '4px solid green',
		'&:hover': {
			cursor: 'pointer',
			background: 'white',
		},
	},
	newsContainerHeader: {
		color: 'rgb(120,120,255)',
		fontSize: 32,
		width: '60%',
		textAlign: 'left',
		fontFamily: 'sans-serif',
		fontWeight: 600,
		marginBottom: 20,
	},
};

class Shedule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			day_id: 1,
			Popup: {
				open: false,
				message: 'Успех!',
				variant: 'success',
			},
		};
	}

	componentDidMount() {
		this.props.getNews();
	}

	componentDidUpdate(prevProps) {}
	render() {
		console.log('news props->', this.props);
		console.log('news state->', this.state);
		const { classes, newsList } = this.props;
		console.log('news props->', newsList);
		console.log('news state->', this.state);
		return (
			<div>
				<Menu />
				<div className={classes.newsContainer}>
					<div className={classes.newsContainerHeader}>Новости</div>
					{newsList && newsList.map((newsItem) => <NewsItem key={`news${newsItem.id}`} {...newsItem} />)}
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Shedule);
