/**
 * @param {{ title: string, thumbnailUrl: string }} data
 * @returns
 */
export function LittleCard(data) {
	return <div className="same-card">
		<img src={data.thumbnailUrl}
			 alt="album little"
			 border="1px blue solid"
		/>
		<div className="text">{data.title}</div>
	</div>
}