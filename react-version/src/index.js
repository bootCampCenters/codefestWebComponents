import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { defineCustomElements as defineMyComponent } from '@marcosginel/my-component/dist/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

defineMyComponent(window);
