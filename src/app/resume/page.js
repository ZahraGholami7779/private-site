import Resume from '@/components/templates/resume/Resume'
import SkillsRange from '@/components/templates/skills-range/SkillsRange'
import Sidebar from '@/components/modules/sidebar/Sidebar'
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
                    <Resume></Resume>
                    <SkillsRange></SkillsRange>
                </div>
                </div>
              </div>
            </div>
          </main>
    </>
  )
}
