import React, { useEffect, useState } from 'react'

export const  useFetch=(api,query="")=> {
    const [data,Setdata]=useState([])
    const url = `https://api.themoviedb.org/3/${api}?api_key=f5c6e5963847c8175bc714e2cdd689f5&query=${query}`
    useEffect(()=>
        {
            fetchmovies()
        },[url])
      
        const fetchmovies=async()=>
          {
              try {
                const res=await fetch(url)
                const data=await res.json();
                if(data)
                  {
                    Setdata(data.results)
                  }
              } catch (error) {
                console.error(error);
                return ;
              }
          }
      
return {data}
}
