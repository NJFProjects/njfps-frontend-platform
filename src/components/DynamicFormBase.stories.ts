import type { Meta, StoryObj } from "@storybook/vue3";

import DynamicFormBase from "./DynamicFormBase.vue";
import * as Yup from "yup";

const meta = {
	title: "Design System/Atom/DynamicFormBase",
	component: DynamicFormBase,
	tags: ["autodocs"],
} satisfies Meta<typeof DynamicFormBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: (args) => ({
		components: { DynamicFormBase },
		setup() {
			return { args };
		},
		template: `<DynamicFormBase v-bind="args" />`,
	}),
	args: {
		// setting default values for the args
		schema: {
			fields: [
				{
					label: "Email",
					name: "email",
					rules: Yup.string().email().required(),
				},
				{
					label: "Password",
					name: "password",
					type: "password",
					rules: Yup.string().min(8).required(),
				},
			],
		},
	},
};
