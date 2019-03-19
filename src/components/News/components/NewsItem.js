import React from 'react';

import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const styles = {
	newsItemContainer: {
		margin: 2,
		padding: '10px 20px',
		width: '60%',
	},
	header: {
		fontSize: 24,
		fontWeight: 900,
		marginBottom: 20,
	},
	previewText: {
		fontSize: 18,
		marginBottom: 20,
	},
	date: {
		fontSize: 14,
		color: 'darkGray',
		marginBottom: 5,
		textAlign: 'right',
	},
	newsLink: {
		textDecoration: 'none',
		color: 'black !important',
		'&:hover': {
			opacity:'.75',
		},
	},
};
const NewsItem = ({ classes,id, header, preview_text, date }) => {
	return (
		<Paper className={classes.newsItemContainer}>
			<div className={classes.header}>
				<Link to={'/news/'+id} className={classes.newsLink}>
					{header}
				</Link>
			</div>
			<div className={classes.previewText}>{preview_text}</div>
			<div className={classes.date}>{date}</div>
		</Paper>
	);
};

export default withStyles(styles)(NewsItem);
