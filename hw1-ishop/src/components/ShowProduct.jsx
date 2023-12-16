import { v4 as uuidv4 } from 'uuid';

export default function ShowProduct({ product }) {
	return <tr key={uuidv4()}>
		<td key={uuidv4()}>{product.name}</td>
		<td key={uuidv4()}>{product.price}</td>
		<td key={uuidv4()}><img className="product_picture"
				 src={product.url}
				 alt={product.name}
		/></td>
		<td key={uuidv4()}>{product.amount}</td>
	</tr>
}