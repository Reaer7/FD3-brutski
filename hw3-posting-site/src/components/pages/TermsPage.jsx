import { v4 as uuidv4 } from 'uuid';

export function TermsPage() {
	return <div id="terms-page">
		<h3 key={uuidv4()}>Условия использования сайта</h3>
		<ul key={uuidv4()} className="terms">
			<li>Условие 1</li>
			<li>Условие 2</li>
			<li>Условие 3</li>
		</ul>
	</div>
}