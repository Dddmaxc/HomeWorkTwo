import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'

type PropsType = {
	children: ReactNode
}

export const Layout: FC<PropsType> = ({ children }) => {
	const [open, setOpen] = useState(false)
	console.log(open)
	const handleClose = () => setOpen(false)
	const handleOpen = () => setOpen(true)

	useEffect(() => {
		open && (document.body.style.overflow = 'hidden')
		!open && (document.body.style.overflow = 'unset')
		// open && (document.body.style.background = '#0000004c')
		// !open && (document.body.style.background = '#ffffffef')
	}, [open]) // отключает прокрутку при открытом меню

	return (
		<>
			<Header handleOpen={handleOpen} />
			<Sidebar open={open} handleClose={handleClose} />
			<div>
				{/*страницы*/}
				{children}
			</div>
		</>
	)
}
