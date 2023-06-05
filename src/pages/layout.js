import Navigation from "../components/_common/Navigation"
import MainSidebar from "../components/_common/MainSidebar"
import Footer from "../components/_common/Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <div id="main" className="sidebar-mini layout-fixed">
                <div className="wrapper container-fluid p-0">
                    {/** Navigation */}
                    <Navigation/>
                    <MainSidebar/>
                    <div className="content-wrapper">
                        <Outlet />
                    </div>
                    <Footer/>
                    {/** Sidebar */}
                    {/** Content */}
                    {/** Footer */}
                </div>
            </div>
        </>
    )
}