
'use client';

import React from 'react'
import { useSession } from "next-auth/react"
import Login from './Login';

const Admin = () => {
  const { data: session, status } = useSession()
  return (
    <div>

    {status !== 'authenticated' ? <Login /> : 
      <div>Admin</div>
    }
   </div>

  )
  
}

export default Admin