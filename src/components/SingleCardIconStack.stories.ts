import type { Meta, StoryObj } from "@storybook/vue3";

import SingleCardIconStack from "./SingleCardIconStack.vue";

const meta = {
	title: "Design System/Atom/SingleCardIconStack",
	component: SingleCardIconStack,
	tags: ["autodocs"],
} satisfies Meta<typeof SingleCardIconStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: (args) => ({
		components: { SingleCardIconStack },
		setup() {
			return { args };
		},
		template: '<SingleCardIconStack v-bind="args" class="w-6 h-6"/>',
	}),
	args: {
		likeAmount: 30,
		watchAmount: 18,
		bookmarkAmount: 4,
		hasLike: false,
		hasWatch: true,
		hasBookmark: false,
	},
};
