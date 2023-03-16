import type { Meta, StoryObj } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Beispiel from '$lib/components/Beispiel.svelte';
import Beispiel_mit_Rahmen from '$lib/components/Beispiel_mit_Rahmen.svelte';

const meta: Meta<Beispiel> = {
	component: Beispiel
	// tags: ['autodocs']
};

type Story = StoryObj<Beispiel>;

export default meta;

// export default {
// 	component: Beispiel
// };

export const Default_Name: Story = {};

export const Anderer_Name: Story = {
	render: () => ({
		Component: Beispiel,
		props: {
			name: 'Anderer'
		},
		on: {
			click: action('clicked')
		}
	}),
	tags: ['no-screenshot']
};

export const Mit_Rahmen: Story = {
	render: () => ({
		Component: Beispiel_mit_Rahmen as any
	})
};

export const Mit_Play: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		// await step('Zeug tippen', () => {
		userEvent.type(canvas.getByPlaceholderText('Zusatz'), '!!!');
		userEvent.type(canvas.getByPlaceholderText('Zusatz'), '!!!11elf');
		// });

		// await step('Text suchen', async () => {
		await expect(canvas.getByText('Hallo', { exact: false })).toBeInTheDocument();
		// });
	}
};
