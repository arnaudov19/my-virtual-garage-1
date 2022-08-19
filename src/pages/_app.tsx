import "antd/dist/antd.css"
import "../styles/global.css"
import { store, wrapper } from "../store/store"
import { Provider } from "react-redux"

// @ts-ignore
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
