import type { Meta, StoryObj } from "@storybook/vue3";

import SearchBar from "./SearchBar.vue";

const meta = {
	title: "Design System/Atom/SearchBar",
	component: SearchBar,
	tags: ["autodocs"],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: (args) => ({
		components: { SearchBar },
		setup() {
			return { args };
		},
		template: '<SearchBar v-bind="args"/>',
	}),
	args: {
		// setting default values for the args
		placeholder: "vue",
	},
};
