import React from 'react';

import { Link } from 'react-router-dom';

import Menu from '../../Menu';

import Paper from '@material-ui/core/Paper';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const styles = {
	newsItemContainer: {
		margin: '150px 50px 10px 50px',
		padding: '10px 20px',
	},
	header: {
		fontSize: 32,
		fontWeight: 900,
		marginBottom: 100,
	},
	mainText: {
		fontSize: 24,
		marginBottom: 20,
	},
	date: {
		fontSize: 20,
		color: 'darkGray',
		marginBottom: 5,
		textAlign: 'right',
	},
	newsLink: {
		textDecoration: 'none',
		color: 'black !important',
		'&:hover': {
			opacity: '.75',
		},
	},
};
class NewsItemPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getNewsItem(this.props.match.params.newsId);
	}
	render() {
		console.log('NEWS ITEM PROPS-->', this.props);
		const { header, text, date } = this.props.newsList&&this.props.newsList[0]||{};
		const { classes } = this.props;
		return (
			<React.Fragment>
				<Menu />
				<Paper className={classes.newsItemContainer}>
					<div className={classes.header}>{header}</div>
					<div className={classes.mainText}>{text}</div>
					<div className={classes.date}>{date}</div>
				</Paper>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(NewsItemPage);
