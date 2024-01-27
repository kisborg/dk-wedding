'use client'
import { signIn, signOut } from 'next-auth/react';
import React from 'react'

export default function Login () {
  
  return (
    <div>
      <button onClick={() => signIn('google')}>Login</button>
    </div>
  )
};