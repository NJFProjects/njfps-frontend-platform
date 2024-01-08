import type { Meta, StoryObj } from "@storybook/vue3";

import BaseButton from "./BaseButton.vue";

const meta = {
	title: "Design System/Atom/BaseButton",
	component: BaseButton,
	tags: ["autodocs"],
	argTypes: {
		color: {
			control: "select",
			options: [
				"primary",
				"primarySelected",
				"secondary",
				"danger",
				"success",
				"info",
			],
		},
		size: { control: "select", options: ["sm", "md", "lg", "xl"] },
		type: {
			control: "select",
			options: ["solid", "light", "outline", "underline", "ghost"],
		},
		iconLeftType: { control: "select", options: ["solid", "outline"] },
		iconRightType: { control: "select", options: ["solid", "outline"] },
	},
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: (args) => ({
		components: { BaseButton },
		setup() {
			return { args };
		},
		template:
			'<BaseButton :color="args.color" :size="args.size" :type="args.type" :hasPaddingX="args.hasPaddingX" :iconLeft="args.iconLeft" :iconLeftType="args.iconLeftType" :iconRight="args.iconRight" :iconRightType="args.iconRightType">{{ args.default }}</BaseButton>',
	}),
	args: {
		// setting default values for the args
		color: "primary",
		size: "md",
		type: "solid",
		iconLeft: "DocumentPlusIcon",
		iconRight: "ArrowLongRightIcon",
		iconLeftType: "outline",
		iconRightType: "solid",
		hasPaddingX: true,
		default: "Button",
	},
};
