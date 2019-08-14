import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundry from './error-boundry/ErrorBoundry';
import { LibraryServiceProvider } from './service-context/LibraryServiceContext';
import LibraryService from './services/LibraryService';
import { Provider } from 'react-redux';
import store from './redux/store';

const libraryService = new LibraryService()

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<LibraryServiceProvider value={ libraryService }>
				<App />
			</LibraryServiceProvider>
		</ErrorBoundry>
	</Provider>
	, document.getElementById('root'));

serviceWorker.unregister();
