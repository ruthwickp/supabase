import React, { useState } from 'react'
import Tabs from 'components/AdminAccess/tabs'
import SectionHeader from 'components/UI/SectionHeader'

const AdminAccess = () => {
  const [tabId, setTabId] = useState('tabTableEditor')

  return (
    <div className="py-16 bg-gray-50 dark:bg-dark-200 overflow-hidden lg:py-24">
      <div className="container mx-auto sm:px-16 xl:px-20">
        <div className="relative items-center">
          <div className="relative">
            <SectionHeader
              title={'Build your app,'}
              title_alt={' without leaving the dashboard'} 
              subtitle={'Admin Access'} 
            />
            <div className="grid sm:flex sm:flex-col-reverse lg:flex-row lg:grid-cols-2 gap-28 items-center">
              <Tabs
                tabId={tabId}
                setTabId={setTabId}
              />
              <div className="shadow-lg">
                <div className="w-full rounded-t-md h-5 bg-dark-300 flex items-center justify-start px-2">
                  <div className="h-2 w-2 mr-2 rounded-full bg-dark-400"/>
                  <div className="h-2 w-2 mr-2 rounded-full bg-dark-400"/>
                  <div className="h-2 w-2 mr-2 rounded-full bg-dark-400"/>
                </div>
                <video className="rounded-b-md" src={`videos/${tabId}.mp4`} autoPlay loop muted>
                  Your browser does not support the video tag
                </video>           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAccess