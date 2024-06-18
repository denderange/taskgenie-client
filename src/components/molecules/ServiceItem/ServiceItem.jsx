import { PropTypes } from "prop-types";
import { Box, Typography } from "components/atoms";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: "1rem",
	textAlign: "center",
	[theme.breakpoints.up("lg")]: {
		background: "color",
	},
	"& svg": {},
}));
const ServiceItem = ({ label, image, ...props }) => {
	return (
		<StyledPaper {...props}>
			<Typography variant='body2'>{label}</Typography>
			<Box
				sx={{
					overflow: "hidden",
					margin: "0 auto",
				}}
			>
				{image}
			</Box>
		</StyledPaper>
	);
};
ServiceItem.propTypes = {
	label: PropTypes.string.isRequired,
	image: PropTypes.element,
};
export default ServiceItem;
