import { v4 as uuidv4 } from "uuid";
import FirstHeaderCell from "./FirstHeaderCell";

export default function DateCells({ dates }) {
	return <div className="row">
		<FirstHeaderCell />
		{
			dates.map(date => <div key={uuidv4()} className="header-cell">{date}</div>)
		}
	</div>
}
