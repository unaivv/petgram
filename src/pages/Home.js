import { ListOfPhotoCards } from "../container/ListOfPhotocards"
import { ListOfCategories } from "../components/ListOfCategories"
import { Layout } from "../components/Layout"
import { memo } from "react"

const HomePage = ({ categoryId }) => {
	return (
		<Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={categoryId} />
		</Layout>
	)
}

export const Home = memo(HomePage, (prevProps, props) => {
	return prevProps.categoryId === props.categoryId
})