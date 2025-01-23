import React from 'react'
import Header from '../Common/Header'
import Dashboard from '../Middle-Section/Dashboard'


export default function ViewTeam() {
  return (
    <>
    <Header />
    <div className="w-[100%]">
      <div className="flex">
        <div>
          <Dashboard />
        </div>
        <div>Addcourse</div>
      </div>
    </div>
  </>
  )
}
