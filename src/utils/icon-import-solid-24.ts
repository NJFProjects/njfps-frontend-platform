import {
	MagnifyingGlassIcon,
	UsersIcon,
	ClockIcon,
	CalendarDaysIcon,
	SwatchIcon,
	HeartIcon,
	EyeIcon,
	BookmarkIcon,
} from "@heroicons/vue/24/solid";

interface IconArraySolidClass {
	[key: string]: typeof MagnifyingGlassIcon;
}

const IconArraySolid: IconArraySolidClass = {
	MagnifyingGlassIcon: MagnifyingGlassIcon,
	UsersIcon: UsersIcon,
	ClockIcon: ClockIcon,
	CalendarDaysIcon: CalendarDaysIcon,
	SwatchIcon: SwatchIcon,
	HeartIcon: HeartIcon,
	EyeIcon: EyeIcon,
	BookmarkIcon: BookmarkIcon,
};

export { IconArraySolid };
