import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>My Virtual Garage</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
