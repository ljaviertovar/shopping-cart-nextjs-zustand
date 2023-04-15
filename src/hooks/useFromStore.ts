import { useEffect, useState } from "react"

export default function useFromStore<T, F>(
	store: (callback: (state: T) => unknown) => unknown,
	storeCallback: (state: T) => F
) {
	const stateOfStore = store(storeCallback) as F
	const [state, setState] = useState<F>()

	useEffect(() => {
		setState(stateOfStore)
	}, [stateOfStore])

	return state
}
