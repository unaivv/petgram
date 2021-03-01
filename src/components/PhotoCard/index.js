import PropTypes from 'prop-types'
import { Link } from "@reach/router"

import { ImgWrapper, Img, Article } from "./style"

import { FavButton } from "../FavButton"

import { UseNearScreen } from "../../hooks/useNearScreen"

import { ToggleLikeMutation } from "../../container/ToggleLikeMutation"

const DEFAULT_IMG =
	"https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMG }) => {
	const [show, element] = UseNearScreen()

	return (
		<Article ref={element}>
			{show && (
				<>
					<Link to={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} alt="" />
						</ImgWrapper>
					</Link>
					<ToggleLikeMutation>
						{(toggleLike) => {
							const handleFavClick = () => {
								toggleLike({ variables: { input: { id } } })
							}
							return (
								<FavButton
									liked={liked}
									likes={likes}
									onClick={handleFavClick}
								/>
							)
						}}
					</ToggleLikeMutation>
				</>
			)}
		</Article>
	)
}

PhotoCard.prototypes = {
	id: PropTypes.string.isRequired,
	liked: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired,
	likes: function(props, propName, componentName) {
		const propValue = props[propName]
		if(propValue === undefined){
			return new Error(`${propName} value must be defined`)
		}
		if(propValue > 0){
			return new Error(`${propName} value must be greater than 0`)
		}
	}
}
