import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'xxtlwhgv',
	dataset: 'production',
	apiVersion: '2021-01-06',
	useCdn: true
});
