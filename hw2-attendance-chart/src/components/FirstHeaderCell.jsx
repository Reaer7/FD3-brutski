import { v4 as uuidv4 } from 'uuid';

export function FirstHeaderCell() {
	return <div key={uuidv4()} className="header-cell" />
}