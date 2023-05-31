import * as React from "react"
import Head from "./Head"

export default function Layout({children}) {
  return <div className="bg-white flex flex-col h-screen justify-between">
            <Head />
                <div>
                {/* <NavBar /> */}
                <div className="">
                    {children}
                </div>
                </div>
            {/*  <Footer />  */}
        </div>
}
