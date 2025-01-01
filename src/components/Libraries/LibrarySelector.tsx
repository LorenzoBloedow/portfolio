import type { FunctionComponent } from "react";
import type { Library } from "./Libraries";

interface LibrarySelectorProps {
    changeLibrary: (library: Library) => void;
}

const LibrarySelector: FunctionComponent<LibrarySelectorProps> = ({ changeLibrary }) => {
    const libraryNames = [
		"detect-programming-language",
		"firestore-get-doc-wrapper",
		"is-string-functional-component",
		"is-consecutive-day",
		"tailwind-safe-container",
		"tailwind-shades-for-custom-colors",
		"programming-colors",
		"bloatedmath",
	] as const;

    const libraries = libraryNames.map(name => (
        <button
        key={name}
        className="w-5 h-5 md:w-32 md:h-10 bg-[#789ce7] rounded-md md:p-2 group
        hover:bg-blue-700 transition-colors duration-200
        active:bg-blue-800 active:duration-75
        font-bold"
        onPointerUp={() => changeLibrary(name)}
        >
            <p
            className="hidden md:block truncate text-secondary text-xs
            transition-opacity duration-200 group-hover:opacity-0
            group-active:opacity-0 group-active:duration-75
            lg:text-sm"
            >
                {name}
            </p>
        </button>
    ));

    return (
        <div
        className="flex flex-col gap-3 sm:gap-5 lg:gap-7 md:mb-auto"
        >
            <p
            className="font-bold text-lg sm:text-xl lg:text-2xl text-center"
            >
                Select a Library
            </p>
            <div
            className="flex flex-wrap justify-center gap-x-7 gap-y-5 sm:w-56
            md:w-80 sm:gap-x-9 sm:gap-y-6 md:justify-between lg:gap-y-10"
            >
                {libraries}
            </div>
        </div>
    );
}
 
export default LibrarySelector;