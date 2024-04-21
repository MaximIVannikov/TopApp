/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = withSvgr({
	images: {
		domains: ['courses-top.ru', 'cdn-bucket.hb.bizmrg.com', 'old-images.hb.ru-msk.vkcs.cloud'],
	},
	webpack(config) {
		return config;
	},
});

export default nextConfig;

// images: { domains: ['courses-top.ru'] },
