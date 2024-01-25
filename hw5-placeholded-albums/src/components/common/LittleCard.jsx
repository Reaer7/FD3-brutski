// import { useCallback } from 'react'

/**
 * @param {{ title: string, url: string, thumbnailUrl: string }} data
 * @returns
 */
export function LittleCard(data) {
    return <>
        <div className="same-card" onClick={!!data.url
            ? () => window.open(data.url, '_blank', 'noopener noreferrer')
            : () => {}
        }>
            <img src={data.thumbnailUrl}
                 alt="little photo"
                 border="1px blue solid"
            />
            <div className="text">{data.title}</div>
        </div>
    </>
}