import React from 'react'
import Card from '../components/Card'
import { posts } from '../data'

const Home = () => {
  return (
    <div className='home'>
        {posts.map((post) => {
            return (
                <Card post={post}/>
            )
        })}
    </div>
  )
}

export default Home