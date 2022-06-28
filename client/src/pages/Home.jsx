import React from 'react'
import { Card } from '../components/Card'
import { posts } from '../data'

export const Home = () => {
  return (
    <div className='home'>
        {posts.map(post=>{ return <Card key={post.id} post={post}/>})}
    </div>
  )
}
