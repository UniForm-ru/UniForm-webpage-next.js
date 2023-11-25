'use client'

import GlassContainer from '@/components/GlassContainer/GlassContainer'
import { events } from '@/scripts/fakeData'
import React from 'react'

export default function Events() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap: '20px'}}>
      {events.map((event) => (
        <GlassContainer flex gap={20}>
            <p>{event.event}</p>
            <p>{event.discription}</p>
        </GlassContainer>
      ))}
    </div>
  )
}
