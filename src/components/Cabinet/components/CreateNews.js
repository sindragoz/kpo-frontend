import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Popup from '../../Popup/Popup';
import classNames from 'classnames';

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
		textAlign: 'center',
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
		marginTop: 0,
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
	headerTextField: {
		background: 'white',
		color: 'white',
		marginBottom: 30,
		marginLeft: 55,
		width: 300,
	},
	previewTextField: {
		background: 'white',
		color: 'white',
		marginBottom: 30,
		marginLeft: 55,
		width: 300,
	},
	mainTextField: {
		background: 'white',
		color: 'white',
		marginBottom: 30,
		marginLeft: 55,
		width: 300,
	},
};

class Shedule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			day_id: 1,
			headerValue: '',
			previewTextValue: '',
			mainTextValue: '',
			Popup: {
				open: false,
				message: 'Успех!',
				variant: 'success',
			},
			timeValue: '10:00',
		};
	}

	componentDidMount() {
		//this.getSheduleByDayId(this.state.day_id);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.creatingNews && !this.props.creatingNews) {
			if (this.props.creatingNewsError) {
				this.setState(
					{
						Popup: {
							open: true,
							message: 'Запрос не выполнен!',
							variant: 'error',
						},
					},
					() =>
						setTimeout(
							() =>
								this.setState({
									Popup: {
										open: false,
										message: 'Запрос не выполнен!',
										variant: 'error',
									},
								}),
							2000
						)
				);
			} else {
				this.setState(
					{
						Popup: {
							open: true,
							message: 'Успех',
							variant: 'success',
						},
					},
					() =>
						setTimeout(
							() =>
								this.setState({
									Popup: {
										open: false,
										message: 'Успех',
										variant: 'success',
									},
								}),
							2000
						)
				);
			}
		}
	}

	handleClose = () => {
		this.setState({ PopupOpen: false });
	};

	onHeaderChange = (e) => {
		const value = e.target.value;
		this.setState({ headerValue: value });
	};
	onPreviewTextChange = (e) => {
		const value = e.target.value;
		this.setState({ previewTextValue: value });
	};
	onMainTextChange = (e) => {
		const value = e.target.value;
		this.setState({ mainTextValue: value });
	};

	render() {
		console.log('create news props->', this.props);
		console.log('create news state->', this.state);
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.newsContainer}>
					<form className={classes.container} noValidate>
						<TextField
							inputProps={{
								style: { padding: 10 },
							}}
							placeholder={'Заголовок'}
							value={this.state.headerValue}
							onChange={(e) => this.onHeaderChange(e)}
							className={classes.headerTextField}
							inputProps={{
								step: 300, // 5 min
							}}
						/>
						<br />
						<TextField
							inputProps={{
								style: { padding: 10 },
							}}
							placeholder={'Обзорный текст'}
							value={this.state.previewTextValue}
							onChange={(e) => this.onPreviewTextChange(e)}
							className={classes.previewTextField}
							inputProps={{
								step: 300, // 5 min
							}}
							multiline
							rows={5}
						/>
						<br />
						<TextField
							inputProps={{
								style: { padding: 10 },
							}}
							placeholder={'Основной текст'}
							value={this.state.mainTextValue}
							onChange={(e) => this.onMainTextChange(e)}
							className={classes.mainTextField}
							inputProps={{
								step: 300, // 5 min
							}}
							multiline
							rows={15}
						/>
					</form>
					<br />
					<Button
						variant="contained"
						color="primary"
						className={classes.confirmButton}
						onClick={() =>
							this.props.createNews(
								this.state.headerValue,
								this.state.previewTextValue,
								this.state.mainTextValue
							)}
					>
						Создать
					</Button>
				</div>
				<Popup
					open={this.state.Popup.open}
					onClose={this.handleClose}
					variant={this.state.Popup.variant}
					message={this.state.Popup.message}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(Shedule);
