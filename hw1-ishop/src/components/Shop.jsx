import { v4 as uuidv4 } from "uuid";
import ShowProductsTable from "./ShowProductsTable";

const PRODUCT_ARRAY = [
	{
		id: uuidv4(),
		name: 'APPLE',
		price: 1,
		url: 'https://as2.ftcdn.net/v2/jpg/02/52/93/81/1000_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg',
		amount: 10
	},
	{
		id: uuidv4(),
		name: 'JALAPENO',
		price: 8,
		url: 'https://as2.ftcdn.net/v2/jpg/06/77/79/33/1000_F_677793362_jXOFahcVTGs9HhESWdaVwr5JFu54xq25.jpg',
		amount: 3
	},
	{
		id: uuidv4(),
		name: 'MEAT',
		price: 8,
		url: 'https://as2.ftcdn.net/v2/jpg/06/83/57/91/1000_F_683579122_LGotUeuAZJ1t3oimpa4KaK41KbMZ7fI4.jpg',
		amount: 3
	},
	{
		id: uuidv4(),
		name: 'WHITE BREAD',
		price: 2,
		url: 'https://as2.ftcdn.net/v2/jpg/05/19/02/19/1000_F_519021990_4j58LBuEqJ5K5CxmETVrEacmepGFKP7u.jpg',
		amount: 5
	},
	{
		id: uuidv4(),
		name: 'GRAPE',
		price: 13,
		url: 'https://as1.ftcdn.net/v2/jpg/06/81/72/34/1000_F_681723465_iopJAhC9O1uR75Whe9C5LEkWsA9FDPcS.jpg',
		amount: 4
	},
];

export default function Shop({ numOfProducts, shopName }) {
	const shop = {
		name: shopName,
		products: PRODUCT_ARRAY.slice(0, numOfProducts),
	};

	return <div key={uuidv4()}>
		<ShowProductsTable shop={shop} />
	</div>
}