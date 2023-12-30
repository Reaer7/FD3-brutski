import { v4 as uuidv4 } from 'uuid';

export function AboutPage() {
	return <div key={uuidv4()} id="about-page">
		<p key={uuidv4()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor vel orci commodo
			vehicula. Orci
			varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut aliquam dolor in lorem
			tempor vulputate. In dignissim vehicula nulla a dignissim. Maecenas sit amet nisl quis augue rutrum
			imperdiet. Integer interdum quam vitae finibus ultrices. Quisque vehicula gravida libero dignissim accumsan.
			Morbi elementum feugiat enim, eu imperdiet nibh. Vestibulum at dapibus felis, at elementum libero. Praesent
			pellentesque rutrum rhoncus. </p>
	</div>
}