import React, { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './Image'
import Skeleton from './Skeleton'

const Images = () => {

  const { response, isLoading, searchImage } = useContext(ImageContext)

  return (
    <div>
        <h1 className='text-center font-bold	 text-violet-900 mt-6 text-2xl'>
            Results For {searchImage || 'Person'}
        </h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 my-10 max-w-7xl mx-auto px-4'>
          {isLoading ? <Skeleton item={10} /> : response.map((data, key) => <Image key={key} data={data} />)}
        </div>
    </div>
  )
}

export default Images