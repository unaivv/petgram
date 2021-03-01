import PropTypes from 'prop-types'
import { Button } from "./styles"

export const SubmitButton = ({ children, onClick, disabled }) => (
	<Button disabled={disabled} onClick={onClick}>{children}</Button>
)

SubmitButton.prototypes = {
	children: PropTypes.node,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
}