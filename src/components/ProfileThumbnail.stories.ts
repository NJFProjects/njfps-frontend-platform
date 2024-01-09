import type { Meta, StoryObj } from "@storybook/vue3";

import ProfileThumbnail from "./ProfileThumbnail.vue";

const meta = {
	title: "Design System/Atom/ProfileThumbnail",
	component: ProfileThumbnail,
	tags: ["autodocs"],
	argTypes: {
		size: { control: "select", options: ["md", "lg", "xl", "xxl"] },
	},
} satisfies Meta<typeof ProfileThumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: (args) => ({
		components: { ProfileThumbnail },
		setup() {
			return { args };
		},
		template: '<ProfileThumbnail v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		size: "md",
		userName: "Phoebe",
		showDropList: true,
		profileImgURL:
			"https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
};
