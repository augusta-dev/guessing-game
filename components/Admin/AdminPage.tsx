import React from 'react'
import Image from 'next/image'
import woman from '../../assets/Avatars/woman (2).png'
import Avatar from '../UI/Avatar'
export default function AdminPage() {
  return (
    <div>
        <Avatar image={woman}></Avatar>
    </div>
  )
}
