import type { Meta, StoryObj } from "@storybook/vue3";

import AppIcon from "./AppIcon.vue";

const meta = {
	title: "Design System/Atom/AppIcon",
	component: AppIcon,
	tags: ["autodocs"],
	argTypes: {
		iconType: { control: "select", options: ["solid", "outline"] },
	},
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: (args) => ({
		components: { AppIcon },
		setup() {
			return { args };
		},
		template:
			'<AppIcon :icon-name="args.iconName" :icon-type="args.iconType" class="w-6 h-6"/>',
	}),
	args: {
		iconName: "DocumentPlusIcon",
		iconType: "outline",
	},
};
