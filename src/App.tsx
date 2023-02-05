
import './App.css'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

type catType = {
  fact: string,
  length: number
}

const getCatFact = async (): Promise<catType | undefined> => {
  try {
    const res = await axios.get("https://catfact.ninja/fact");
    return res.data
  }
  catch (e) {
    return e as undefined
  }
}

function App() {
  const { data,isLoading,isError } = useQuery({
    queryKey: ["cat"],
    queryFn: getCatFact,
  })
  if(isLoading) return <h1>Loading...</h1>
  if (isError) {
    return <span>error sorry </span>
  }



  return (
    <div className="App">
      <h1>hello world</h1>

      <p>{data?.fact}</p>

    </div>
  )
}

export default App
