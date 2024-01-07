import "../src/style.css";
import { Preview } from "@storybook/vue3";

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/vue3').Preview } */
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: {
			default: "white",
			values: [
				{
					name: "white",
					value: "#FFFFFF",
				},
				{
					name: "black",
					value: "#1A202C",
				},
				{
					name: "njfps",
					value: "#164E63",
				},
				{
					name: "njfps-light",
					value: "#ECFEFF",
				},
				{
					name: "twitter",
					value: "#00aced",
				},
				{
					name: "facebook",
					value: "#3b5998",
				},
			],
		},
	},
};

export default preview;
