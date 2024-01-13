import { IconArraySolid } from "./icon-import-solid-24";
import { IconArrayOutline } from "./icon-import-outline-24";

interface IconClass {
	[key: string]: typeof IconArraySolid;
}

const IconObject: IconClass = {
	solid: IconArraySolid,
	outline: IconArrayOutline,
};

export { IconObject };
