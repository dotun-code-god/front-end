
export const metadata = {
    title : "Nairarefill",
    description : 'We help you refill your naira'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                { children }
            </body>
        </html>
    )
}