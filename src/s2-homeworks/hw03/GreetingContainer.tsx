import React, {
	ChangeEvent,
	ChangeEventHandler,
	KeyboardEvent,
	useState,
} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
	users: UserType[] // need to fix any
	addUserCallback: (name: string) => void // need to fix any
}

type NameType = string
type ErrorType = string

export const pureAddUser = (
	name: string,
	setError: (value: string) => void,
	setName: (v: string) => void,
	addUserCallback: (value: string) => void
) => {
	if (!name.trim()) {
		setError('Ошибка! Введите имя!')
	} else {
		addUserCallback(name)
		setName('')
	}
	// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (value: string) => void) => {
	if (!name.trim()) {
		setError('Ошибка! Введите имя!')
	}
	// если имя пустое - показать ошибку
}

export const pureOnEnter = (
	e: KeyboardEvent<HTMLInputElement>,
	addUser: () => void
) => {
	if (e.key === 'Enter') {
		addUser()
	}
	// если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
	users,
	addUserCallback,
}) => {
	// деструктуризация пропсов
	const [name, setName] = useState<NameType>('') // need to fix any
	const [error, setError] = useState<ErrorType>('') // need to fix any

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
		// need to fix any
		let value = e.currentTarget.value
		setName(value) // need to fix

		error && setError('')
	}
	const addUser = () => {
		pureAddUser(name, setError, setName, addUserCallback)
	}

	const onBlur = () => {
		pureOnBlur(name, setError)
	}

	const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		pureOnEnter(e, addUser)
	}

	const totalUsers = users.length //0 == false
	const lastUserName = totalUsers ? users[totalUsers - 1].name : '' // need to fix

	return (
		<>
			<Greeting
				name={name}
				setNameCallback={setNameCallback}
				addUser={addUser}
				onBlur={onBlur}
				onEnter={onEnter}
				error={error}
				totalUsers={totalUsers}
				lastUserName={lastUserName}
			/>
		</>
	)
}

export default GreetingContainer
