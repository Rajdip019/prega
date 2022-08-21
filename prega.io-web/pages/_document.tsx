import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
    return (
        <Html lang="en">
            <link rel="icon" href="/logo.png" />
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}