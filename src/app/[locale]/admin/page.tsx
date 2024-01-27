
'use client';

import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react"
import Login from './Login';
import DataTable from './DataTable';

const Admin = () => {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email || '';
  const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',') || [];

  useEffect(() => {
    if (session && status === "authenticated" && !adminEmails.includes(userEmail)) {
      signOut()
    }
  }, [])


  return (
    <div>

    {status !== 'authenticated' || !adminEmails?.includes(userEmail)  ? <Login /> : 
      <DataTable />
    }
   </div>

  )
  
}

export default Admin