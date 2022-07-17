import { memo } from 'react'

interface Props {
  firstName: string
  lastName: string
  width: number
  rounded: boolean
}

export const ProfileIcon = memo(({ firstName, lastName, width, rounded }: Props) => {
  return (
    <img
      src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&format=svg&color=ed1d24&background=fff&bold=true&font-size=0.5`}
      width={width}
      className={`border border-gray-400 ${rounded && 'rounded-full'}`}
    />
  )
})
