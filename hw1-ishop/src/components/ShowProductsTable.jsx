import { v4 as uuidv4 } from "uuid";
import ShowProduct from "./ShowProduct";

export default function ShowProductsTable({ shop }) {
	const shopName = shop?.name;
	const products = shop?.products;

	return <>
		<h2 key={uuidv4()}>Shop name is: {shopName}</h2>
		<h3 key={uuidv4()}>Products:</h3>
		<table key={uuidv4()} className="products_table">
			<thead key={uuidv4()}>
			<tr key={uuidv4()}>
				<th key={uuidv4()}>Name:</th>
				<th key={uuidv4()}>Price:</th>
				<th key={uuidv4()}>Picture:</th>
				<th key={uuidv4()}>Amount:</th>
			</tr>
			</thead>
			<tbody key={uuidv4()}>
			{
				products.map(product => <ShowProduct product={product} />)
			}
			</tbody>
		</table>
	</>
}