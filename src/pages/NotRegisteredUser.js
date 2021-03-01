import { useContext } from "react"
import { Context } from "../Context"

import { UserForm } from "../components/UserForm"
import { Layout } from "../components/Layout"

import { RegisterMutation } from "../container/RegisterMutation"
import { LoginMutation } from "../container/LoginMutation"

export const NotRegisteredUser = () => {
	const { activateAuth } = useContext(Context)
	return (
		<Layout
			title="Iniciar sesión y registrarse"
			subtitle="¿Quieres entrar en Petgram?"
		>
			<RegisterMutation>
				{(register, { data, loading, error }) => {
					const onSubmit = ({ email, password }) => {
						const input = { email, password }
						const variables = { input }
						register({ variables })
							.then(({ data }) => {
								const { signup } = data
								activateAuth(signup)
							})
							.catch((error) => {
								console.log(error.graphQLErrors[0].message)
							})
					}

					const errorMsg = error && error.graphQLErrors[0].message

					return (
						<UserForm
							disabled={loading}
							error={errorMsg}
							title="Registrarse"
							onSubmit={onSubmit}
						/>
					)
				}}
			</RegisterMutation>
			<LoginMutation>
				{(login, { data, loading, error }) => {
					const onSubmit = ({ email, password }) => {
						const input = { email, password }
						const variables = { input }
						login({ variables })
							.then(({ data }) => {
								const { login } = data
								activateAuth(login)
							})
							.catch((error) => {
								console.log(error.graphQLErrors[0].message)
							})
					}

					const errorMsg = error && error.graphQLErrors[0].message
					return (
						<UserForm
							disabled={loading}
							error={errorMsg}
							title="Iniciar sesión"
							onSubmit={onSubmit}
						/>
					)
				}}
			</LoginMutation>
		</Layout>
	)
}
