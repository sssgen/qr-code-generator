import "@/styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className="w-screen h-screen flex items-center justify-center flex-col">{children}</body>
        </html>
    );
}
