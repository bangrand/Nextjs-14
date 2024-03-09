import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata = {
    title: "Next App",
    description: "Next.js starter app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={fira.className}>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
