"use client"

import { useState } from 'react'
import Image from 'next/image'
import mainImage from '../public/home.svg'
import Button from './components/button'
import Conteudo from './components/conteudo'

export default function Home() {
	const [tipo, setTipo] = useState("")
	const [click, setClick] = useState(false)
	const [reset, setReset] = useState(false)
	const [hideImage, setHideImage] = useState(false)

	function handleClick(tipo) {
		setTipo(tipo)
		setClick(true)
		setReset(true)
		setHideImage(true)
	}

	function renderConteudo() {
		if (tipo === "tv") {
			return (<Conteudo tipo="tv" />)
		} else if (tipo === "movie") {
			return (<Conteudo tipo="movie" />)
		} else {
			return
		}
	}

	function handleReset() {
		setTipo("")
		setClick(false)
		setReset(false)
		setHideImage(false)
	}

	return (
		<main className={`h-fit flex flex-col content-between main-home mb-10`}>

			{
				!click &&
				<div className='button-wrapper'>
					<Button nome="Série" tipo="tv" onClick={() => handleClick("tv")} />
					ou
					<Button nome="Filme" tipo="movie" onClick={() => handleClick("movie")} />
				</div>
			}

			{renderConteudo()}
			
			{
			!hideImage &&
			<Image
				className={`${tipo && 'scale-75'} h-full max-h-96 m-auto transition linear`}
				src={mainImage}
				alt='Ilustração de uma pessoa sentada em um sofá com um balde de pipoca no colo'
			/>
			}

			{reset &&
				<div className="button-wrapper">
					<Button nome="Começar novamente" onClick={handleReset} />
				</div>
			}

		</main>
	)
}