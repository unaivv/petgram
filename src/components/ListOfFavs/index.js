import PropTypes from 'prop-types'
import { Link, Grid, Image } from "./styles"

export const ListOfFavs = ({ favs = [] }) => {
	return (
		<Grid>
			{favs.map((fav) => (
				<Link key={fav.id} to={`/detail/${fav.id}`}>
					<Image src={fav.src} alt="" />
				</Link>
			))}
		</Grid>
	)
}

ListOfFavs.prototypes = {
	favs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			src: PropTypes.string.isRequired
		})
	)
}
