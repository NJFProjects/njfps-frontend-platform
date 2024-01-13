import {
	MagnifyingGlassIcon,
	UsersIcon,
	ClockIcon,
	CalendarDaysIcon,
	SwatchIcon,
	HeartIcon,
	EyeIcon,
	BookmarkIcon,
} from "@heroicons/vue/24/outline";

interface IconArrayOutlineClass {
	[key: string]: typeof MagnifyingGlassIcon;
}

const IconArrayOutline: IconArrayOutlineClass = {
	MagnifyingGlassIcon: MagnifyingGlassIcon,
	UsersIcon: UsersIcon,
	ClockIcon: ClockIcon,
	CalendarDaysIcon: CalendarDaysIcon,
	SwatchIcon: SwatchIcon,
	HeartIcon: HeartIcon,
	EyeIcon: EyeIcon,
	BookmarkIcon: BookmarkIcon,
};

export { IconArrayOutline };
