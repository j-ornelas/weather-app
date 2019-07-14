import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { reducers } from './reducers';

const logger = createLogger();

export const store = createStore(
  reducers,
  applyMiddleware(logger)
);
