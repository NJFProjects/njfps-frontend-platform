import type { Meta, StoryObj } from "@storybook/vue3";

import SingleCard from "./SingleCard.vue";

const meta = {
	title: "Design System/Atom/SingleCard",
	component: SingleCard,
	tags: ["autodocs"],
	args: {
		// setting default values for the args
		fromDate: "Jan 26, 2021",
		toDate: "Nov 15, 2021",
		teamSize: 5,
		likeAmount: 30,
		watchAmount: 18,
		bookmarkAmount: 4,
		hasLike: true,
		hasWatch: false,
		hasBookmark: true,
		cardImgURL:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		profileImgURL:
			"https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
} satisfies Meta<typeof SingleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EnglishNormal: Story = {
	render: (args) => ({
		components: { SingleCard },
		setup() {
			return { args };
		},
		template: '<SingleCard v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		cardTitle: "Lorem ipsum dolor sit amet consectetur. Libe",
	},
};

export const ChineseNormal: Story = {
	render: (args) => ({
		components: { SingleCard },
		setup() {
			return { args };
		},
		template: '<SingleCard v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		cardTitle: "早安你好，我叫嗨嗨，天天都很嗨，你呢？",
	},
};

export const EnglishShort: Story = {
	render: (args) => ({
		components: { SingleCard },
		setup() {
			return { args };
		},
		template: '<SingleCard v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		cardTitle: "I am short.",
	},
};

export const ChineseShort: Story = {
	render: (args) => ({
		components: { SingleCard },
		setup() {
			return { args };
		},
		template: '<SingleCard v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		cardTitle: "短！",
	},
};

export const EnglishLong: Story = {
	render: (args) => ({
		components: { SingleCard },
		setup() {
			return { args };
		},
		template: '<SingleCard v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		cardTitle: "pneumonoultramicroscopicsilicovolcanoconiosis is a long word",
	},
};

export const ChineseLogn: Story = {
	render: (args) => ({
		components: { SingleCard },
		setup() {
			return { args };
		},
		template: '<SingleCard v-bind="args" />',
	}),
	args: {
		// setting default values for the args
		cardTitle: "學而時習之不亦說乎有朋自遠方來不亦樂乎人不知而不慍不亦君子乎",
	},
};
