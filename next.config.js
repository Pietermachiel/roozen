const withPWA = require('next-pwa');
const { createSecureHeaders } = require('next-secure-headers');

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true
	},
	images: {
		domains: ['cdn.sanity.io']
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: createSecureHeaders()
			}
		];
	}
});
