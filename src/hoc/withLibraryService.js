import React from 'react';
import { LibraryServiceConsumer } from '../service-context/LibraryServiceContext';

const withLibraryService = () => (Wrapper) => {
	return (props) => {
		return(
			<LibraryServiceConsumer>
				{
					(libraryService) => {
						return <Wrapper {...props} libraryService={ libraryService } />
					}
				}
			</LibraryServiceConsumer>
		)
	}
}

export default withLibraryService;