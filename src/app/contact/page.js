import React from 'react'
import Sidebar from '@/components/modules/sidebar/Sidebar'
import Contact from '@/components/modules/contact/Contact'
import Navbar from '@/components/modules/navbar/Navbar'
export default function page() {
  return (
    <>
         <main className="main">
            <div className="container gutter-top">
              <div className="row sticky-parent">
                <Sidebar></Sidebar>
                <div className="col-12 col-md-12 col-xl-9">
                <div className="box shadow pb-0">
                  <Navbar></Navbar>
                    <Contact></Contact>
                </div>
                </div>
              </div>
            </div>
          </main>
    </>
  )
}
