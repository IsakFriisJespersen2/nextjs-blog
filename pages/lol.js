import { useQueryState, queryTypes } from 'next-usequerystate'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { score: 0 } } // See the "paths" section below
//     ],
//     fallback: true,
//   };
// }

export default function Lol() {
  const [count, setCount] = useQueryState('count', queryTypes.integer.withDefault(0));
  const router = useRouter()

  useEffect(() => {
    setCount(count)
  }, [count])

  useEffect(() => {
    // The counter changed!
  }, [router.query.count])

  // useEffect(() => setCount(0),[count]);


  return (
    <div>
      <p>Your score is {count}</p>
      {/* <p>count: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(c => c + 1 ?? 0 + 1)}>+</button>
      <button onClick={() => setCount(c => c + 1 ?? 0 - 1)}>-</button>
      <button onClick={() => setCount(null)}>Clear</button> */}
    </div>
  )
}
