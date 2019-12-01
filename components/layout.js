import Head from "next/head"
import Nav from "./nav"
const Layout=(props)=>(

    <div>
        <Head>
            <title>Semih Page</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cerulean/bootstrap.min.css"/>
        </Head>
        <Nav/>
        {props.children}
    </div>
)
export default Layout