import Sidebar from '@/components/modules/sidebar/Sidebar'
import About from '@/components/templates/about/About'
import Skill from '@/components/templates/skill/Skill'
import Comments from '@/components/templates/comments/Comments'
import React from 'react'
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
            <About></About>
            <Skill></Skill>
            <Comments></Comments>
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
