import MainPage from '../components/MainPage';
import { tryLogin, getUser, Unauthorize } from "../../../store/reducers/user/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    console.log("map->", state);
    return {
        isAuthorized: state.User.isAuthorized,
        fetching: state.User.fetching,
        isAuthorized: state.User.isAuthorized,
        user: state.User.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    tryLogin: (login, password) => dispatch(tryLogin(login, password)),
    getUser: () => dispatch(getUser()),
    Unauthorize: () => dispatch(Unauthorize())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

