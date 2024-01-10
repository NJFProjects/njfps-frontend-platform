import type { Meta, StoryObj } from "@storybook/vue3";

import ReactionIcon from "./ReactionIcon.vue";

const meta = {
	title: "Design System/Atom/ReactionIcon",
	component: ReactionIcon,
	tags: ["autodocs"],
} satisfies Meta<typeof ReactionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: (args) => ({
		components: { ReactionIcon },
		setup() {
			return { args };
		},
		template: '<ReactionIcon v-bind="args" class="w-6 h-6"/>',
	}),
	args: {
		iconName: "EyeIcon",
		statusActivated: false,
		statusAmount: 30,
		reactionEnabled: true,
	},
};
