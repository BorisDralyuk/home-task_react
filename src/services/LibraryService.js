export default class LibraryService {
	data = [
		{
			id: 1,
			title: 'Production-Ready Microservices',
			author: 'Susan J. Fowler',
			price: 32,
			description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
			count: 5,
			publicationDate: '23 Jan 2019',
			publisher: 'ATLANTIC BOOKS',
			language: 'English'
		},
		{
			id: 2,
			title: 'Release It!',
			author: 'Michael T. Nygard',
			price: 45,
			description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
			count: 21,
			publicationDate: '23 Jan 2019',
			publisher: 'ATLANTIC BOOKS',
			language: 'English'
		},
		{
			id: 3,
			title: 'Night Boat to Tangier',
			author: ' Kevin Barry',
			price: 45,
			description: 'It is late one night at the Spanish port of Algeciras and two fading Irish gangsters are waiting on the boat from Tangier.A lover has been lost, a daughter has gone missing, their world has come asunder - can it be put together again ?',
			count: 58.59,
			publicationDate: '23 Jan 2019',
			publisher: 'Canongate Books Ltd',
			language: 'English'
		}
	]

	languages = [
		{
			value: 1,
			label: 'English'
		},
		{
			value: 2,
			label: 'Hebrew'
		},
		{
			value: 3,
			label: 'Russian'
		}
	];

	getBooks = () => {
		return this.data;
	}

	getLanguages = () => {
		return this.languages;
	}
}