import Nav from "./Nav"
import Footer from "./Footer"


function Layout(props){

    return(
        <>
            <Nav></Nav>
            
                {props.children}

            <Footer></Footer>
        </>
    )
}
export default Layout;