import { FunctionComponent } from "react";
import Background from "../components/svg/Background";
import "../styles/globals.css";

interface RootLayoutProps {
    children: JSX.Element | JSX.Element[]
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Background />
                {children}
            </body>
        </html>
    );
}
 
export default RootLayout;