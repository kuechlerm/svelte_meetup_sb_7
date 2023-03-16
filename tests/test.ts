import { expect, test } from '@playwright/test';

test('Story Screenshot', async ({ page, request }) => {
	const result = await request.get('index.json');

	const config = await result.json();
	const stories = Object.keys(config.entries)
		.map((story_name) => config.entries[story_name])
		.filter((story) => story.type === 'story' && !story.tags.includes('no-screenshot'))
		.filter((story) => story.title.startsWith('lib/'));

	// TODO loop here
	const story_url = `iframe.html?id=${stories.at(0).id}`;

	await page.goto(story_url);
	await expect(page.getByText('Hallo Test')).toBeVisible();

	expect(await page.locator('#storybook-root').screenshot()).toMatchSnapshot(
		`screenshots/${stories.at(0).id}.png`
	);

	// geht nicht, Test ist in iframe
	// await expect(page.getByText('Welcome to Storybook')).toBeVisible();
});
