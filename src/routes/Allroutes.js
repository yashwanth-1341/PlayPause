import React from 'react'
import { MovieDetail,Movielist,Search,PageNotFound } from '../pages'
import {Routes,Route} from 'react-router-dom'

export  function Allroutes() {
  return (
    <div className='dark:bg-darkbg'>
      <Routes>
        <Route path='' element={<Movielist api="movie/now_playing" title="Home"/> }/>
        <Route path='/movies/popular' element={<Movielist api="movie/popular" title="Popular"/>}/>
        <Route path='/movies/top' element={<Movielist api="movie/top_rated" title="Top Rated" />}/>
        <Route path='/movies/upcoming' element={<Movielist api="movie/upcoming" title="Upcoming" />}/>
        <Route path='movie/:id' element={<MovieDetail/>}/>
        <Route path='/search' element={<Search api="search/movie"/>}/>
        <Route path='*' element={<PageNotFound/>} title="Page Not Found"/>
      </Routes>
    </div>
  )
}
