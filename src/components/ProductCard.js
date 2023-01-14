import {Card} from '@mui/material';

const ProductCardStyles ={
	border: "1px solid black",
	borderRadius:"20px",
	display:"flex",
	flexDirection: "column",
	justifyContent:"space between",
	width: "326px",
	height: "386px",
	left: "0px",
	top: "0px",
	margin: "1%",
	padding:"1%"
}
export default function ProductCard ({name,seller,image}) {
	return(
		<Card raised={true} sx={ProductCardStyles}></Card> 
		
	)
};