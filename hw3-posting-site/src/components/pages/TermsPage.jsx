import { v4 as uuidv4 } from 'uuid';

export function TermsPage() {
	return <div id="terms-page">
		<h3 key={uuidv4()}>Terms of use of the site</h3>
		<ul key={uuidv4()} className="terms">
			<li>Term 1</li>
			<li>Term 2</li>
			<li>Term 3</li>
		</ul>
	</div>
}