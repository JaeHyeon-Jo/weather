import{ connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Weather from './Weather';
import { actionCreators as resetActions } from '../../reducer';

function mapStateToProps(state){
    const { isLoaded1 } = state;
    return {
        isLoaded1
        // error,
        // temperature,
        // name
    }
}

function mapDispatchToProps(dispatch){
    return{
        restartApp: bindActionCreators(resetActions.restartApp, dispatch),
        loadedApp: bindActionCreators(resetActions.loadedApp, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)