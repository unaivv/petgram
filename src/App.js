import React, { useContext, Suspense } from "react"
import { Redirect, Router } from "@reach/router"

import { GlobalStyle } from "./styles/GlobalStyles"

import { Logo } from "./components/Logo"
import { NavBar } from "./components/NavBar"

import { Context } from "./Context"

import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
//import { Favs } from "./pages/Favs"
import { User } from "./pages/User"
import { NotRegisteredUser } from "./pages/NotRegisteredUser"
import { NotFound } from "./pages/NotFound"

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
	const { isAuth } = useContext(Context)
	return (
		<Suspense fallback={<div></div>}>
			<GlobalStyle />
			<Logo />
			<Router>
				<NotFound default />
				<Home path="/" />
				<Home path="/pet/:categoryId" />
				<Detail path="/detail/:detailId" />
				{!isAuth && <NotRegisteredUser path="/login" />}
				{!isAuth && <Redirect noThrow from="/favs" to="/login" />}
				{!isAuth && <Redirect noThrow from="/user" to="/login" />}
				{isAuth && <Redirect noThrow from="/login" to="/" />}
				<Favs path="/favs" />
				<User path="/user" />
			</Router>
			<NavBar />
		</Suspense>
	)
}
