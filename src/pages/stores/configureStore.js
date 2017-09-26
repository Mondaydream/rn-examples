import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// 持久化数据, 具体参考官方
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
// 中间件开发
import logger from '../middleware/logger';
import api from '../middleware/api';

import rootReducer from '../reducers/rootReducer';
// 调试模式
import { DEBUG } from '../constants/constants';
// Chrome 结合 RemoteDev软件开发
import { composeWithDevTools } from 'remote-redux-devtools';
export default function configureStore(initialState) {
	// global __DEV__
	let finalCreateStore = null;
	if (DEBUG && __DEV__) {
		finalCreateStore = composeWithDevTools(
			applyMiddleware(thunk, api),
			autoRehydrate()
		)(createStore);
	} else {
		finalCreateStore = compose(
			applyMiddleware(thunk, api),
			autoRehydrate()
		)(createStore);
	}

	const store = finalCreateStore(rootReducer, initialState);
	// 持久化配置 if (typeof self === 'object') 
	persistStore(store, {storage: AsyncStorage});

	if (module.hot) {
		// Enable hot module replacement for reducers
		module.hot.accept(() => {
			const nextRootReducer = require('../reducers/rootReducer').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}