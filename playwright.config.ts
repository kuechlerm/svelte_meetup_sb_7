import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	// webServer: {
	// 	command: 'npm run build && npm run preview',
	// 	port: 4173
	// },

	testDir: 'tests',
	use: {
		baseURL: 'http://localhost:6006/'
	}
};

export default config;
