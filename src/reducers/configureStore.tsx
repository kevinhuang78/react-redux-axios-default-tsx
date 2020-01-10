import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";
import DevTools from "../utils/DevTools";

const loggerMiddleware = createLogger();

const storeCompose = process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware),
        DevTools.instrument()
      )
    : compose(applyMiddleware(thunkMiddleware, loggerMiddleware));

const configureStore = (preloadedState?: any) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        storeCompose
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers/index", () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;
