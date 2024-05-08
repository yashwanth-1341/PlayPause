import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import React, { useEffect} from 'react'
import { useTitle } from "../hooks/useTitle";

export const Search = ({api}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(api, queryTerm);

  useTitle(`Search result for ${queryTerm}`)
  
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}