import React from 'react'
const showList: string[] = ['Friends', 'The Office', 'The Big Bang Theory', 'Two and A Half Men', 'Silicon Valley', 'Seinfeld', 'Parks and Recreations', 'Modern Family', 'How I Met Your Mother', 'Gilmore Girls', 'Community', 'Brooklyn Nine Nine']
const tvShows = showList.sort()
export default function SeriesOptions() {
  return (
    <>
    <select title='Shows List' className='w-full bg-transparent text-cyan border-cyan border-2 p-1 rounded-lg mt-12'>
      <option value="Select" className='bg-cyan text-white' selected disabled>Select TV Series</option>
      {tvShows.map(show => (
        <option value={show} key={Math.random()} className='text-white bg-cyan'>{show}</option>
      ))}
    </select>
    </>
    
  )
}
