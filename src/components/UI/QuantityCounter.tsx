import { ChevronUpIcon as ChevronIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function QuantityCounter({ quantity }) {
  const [count, setCount] = useState<number>(quantity)

  function incrementCount() {
    return count >= 99 ? setCount(99) : setCount((prev) => prev + 1)
  }

  function decrementCount() {
    return count <= 1 ? setCount(1) : setCount((prev) => prev - 1)
  }

  return (
    <div className="flex items-center gap-4">
      Count: {count}
      <span className="inline-flex flex-col items-center gap-2">
        <button className="text-yellow-500" onClick={incrementCount}>
          <ChevronIcon width={20} />
        </button>
        <button className="rotate-180 text-yellow-500" onClick={decrementCount}>
          <ChevronIcon width={20} />
        </button>
      </span>
    </div>
  )
}

export default QuantityCounter
