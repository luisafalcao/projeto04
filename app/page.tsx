import Image from 'next/image'
import mainImage from '../public/home.svg'

export default function Home() {
  return (
    <main className='grid text-center gap-5'>
        <Image 
          className='h-full max-h-80'
          src={mainImage}
          alt='Ilustração de uma pessoa sentada em um sofá com um balde de pipoca no colo'
        />
        <h5>O que você quer ver agora?</h5>
    </main>
  )
}
