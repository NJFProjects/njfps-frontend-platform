import type { Meta, StoryObj } from "@storybook/vue3";

import LogoPlaceholder from "./LogoPlaceholder.vue";

const meta = {
	title: "Design System/Atom/LogoPlaceholder",
	component: LogoPlaceholder,
	tags: ["autodocs"],
} satisfies Meta<typeof LogoPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WhiteBgLogo: Story = {
	render: (args) => ({
		components: { LogoPlaceholder },
		setup() {
			return { args };
		},
		template: '<LogoPlaceholder class="h-16 object-cover" v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		isWhiteBg: true,
		isLogo: true,
	},
};

export const BlackBgLogo: Story = {
	parameters: {
		backgrounds: { default: "njfps" },
	},
	render: (args) => ({
		components: { LogoPlaceholder },
		setup() {
			return { args };
		},
		template: '<LogoPlaceholder class="h-16 object-cover" v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		isWhiteBg: false,
		isLogo: true,
	},
};

export const WhiteBgBanner: Story = {
	render: (args) => ({
		components: { LogoPlaceholder },
		setup() {
			return { args };
		},
		template: '<LogoPlaceholder class="h-16 object-cover" v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		isWhiteBg: true,
		isLogo: false,
	},
};

export const BlackBgBanner: Story = {
	parameters: {
		backgrounds: { default: "njfps" },
	},
	render: (args) => ({
		components: { LogoPlaceholder },
		setup() {
			return { args };
		},
		template: '<LogoPlaceholder class="h-16 object-cover" v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		isWhiteBg: false,
		isLogo: false,
	},
};
