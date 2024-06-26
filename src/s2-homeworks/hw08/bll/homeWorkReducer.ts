import { UserType } from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (
	state: UserType[],
	action: ActionType
): UserType[] => {
	// need to fix any
	switch (action.type) {
		case 'sort': {
			const sortedState = [...state].sort((a, b) => {
				if (a.name > b.name) return action.payload === 'up' ? 1 : -1
				if (a.name < b.name) return action.payload === 'up' ? -1 : 1
				return 0
			})
			// by name

			return sortedState // need to fix
		}
		case 'check': {
			let copyState = state.filter(user => user.age >= action.payload) // need to fix
			return copyState
		}
		default:
			return state
	}
}
