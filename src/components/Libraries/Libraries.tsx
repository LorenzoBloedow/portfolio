import { useState } from "react";
import LibraryPreview from "./LibraryPreview";
import LibrarySelector from "./LibrarySelector";

export type Library = "tailwind-safe-container" | "firestore-get-doc-wrapper" | "is-string-functional-component" |
"is-consecutive-day" | "detect-programming-language" | "tailwind-shades-for-custom-colors" |
"programming-colors" | "bloatedmath";

function Libraries() {
    const [library, setLibrary] = useState<Library>("tailwind-shades-for-custom-colors");

    function changeLibrary(library: Library) {
        setLibrary(library);
    }

    return (
        <div
        style={{
            contentVisibility: "auto"
        }}
        className="flex flex-col lg:flex-row md:justify-center items-center gap-7 lg:gap-16"
        >
            <LibraryPreview
            npmName={library}
            />

            <LibrarySelector
            changeLibrary={changeLibrary}
            />
        </div>
    );
}

export default Libraries;