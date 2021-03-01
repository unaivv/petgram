import {useState} from 'react'

export const UselocalStorage = (key, initialValue) => {
	const [storedValue, setvalue] = useState(() => {
		try{
			const item = window.localStorage.getItem(key)
			return item !== null ? JSON.parse(item) : initialValue
		}catch(e){
			console.log(e)
			return initialValue
		}
	})

	const setLocalStorage = value => {
		try{
			window.localStorage.setItem(key, JSON.stringify(value))
			setvalue(value)
		} catch (e){
			console.log(e)
		}
	}

	return [storedValue, setLocalStorage]
}