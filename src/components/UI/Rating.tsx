import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import { colors } from '@src/styles/styles'

function Rating({ rating }) {
  return (
    <div className="flex">
      {Array(Math.floor(rating))
        .fill(null)
        .map((_, i) => (
          <SolidStarIcon key={i} width={20} color={colors.yellow[500]} />
        ))}
      {Array(5 - Math.floor(rating))
        .fill(null)
        .map((_, i) => (
          <StarIcon key={i} width={20} color={colors.yellow[500]} />
        ))}
    </div>
  )
}

export default Rating
