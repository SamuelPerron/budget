import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import './styles.scss';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
