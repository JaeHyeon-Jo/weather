// Imports

// Actions

const RESTART_APP = "RESTART_APP";
const LOADED_APP = "LOADED_APP";

// Action Creators

function restartApp() {
  return {
    type: RESTART_APP
  };
}

function loadedApp() {
    return {
      type: LOADED_APP
    };
  }

// Reducer

const initialState = {
    isLoaded1: false
    // error: null,
    // temperature: null,
    // name: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case RESTART_APP:
      return applyRestartApp(state, action);
    case LOADED_APP:
      return applyLoadedApp(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyRestartApp(state, action) {
  return {
    ...state,
    isLoaded1: false
  };
}

function applyLoadedApp(state, action) {
    return {
      ...state,
      isLoaded1: true
    };
  }

// Exports

const actionCreators = {
  restartApp,
  loadedApp
};
export { actionCreators };

// Default

export default reducer;