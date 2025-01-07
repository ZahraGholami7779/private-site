import React from 'react'
import Sidebar from '@/components/modules/sidebar/Sidebar'
import Gallery from '@/components/templates/gallery/Gallery'
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
                  <Gallery></Gallery>
                </div>
                </div>
              </div>
            </div>
          </main>
    
    </>
  )
}
