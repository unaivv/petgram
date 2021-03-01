import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import Context from "./Context"


const client = new ApolloClient({
	uri: "https://petgram-server-unaivv.vercel.app/graphql",
	request: operation => {
		const token = window.sessionStorage.getItem('token')
		const authorization = token ? `bearer ${token}` : ''
		operation.setContext({
			headers: {
			  authorization
			}
		})
	},
	onError: error => {
		const {networkError} = error
		if(networkError && networkError.result.code === 'invalid_token'){
			window.sessionStorage.removeItem('token')
			window.location.href = '/'
		}
	}
})

ReactDOM.render(
	<React.StrictMode>
		<Context.Provider>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</Context.Provider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
