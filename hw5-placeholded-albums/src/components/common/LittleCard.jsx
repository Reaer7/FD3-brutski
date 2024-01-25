// import { useCallback } from 'react'

/**
 * @param {{ title: string, url: string, thumbnailUrl: string }} data
 * @returns
 */
export function LittleCard(data) {
    return <>
    <a href={data.url} target='_blank'>
        <div className="same-card"
            // onClick={useCallback(() => window.open(data.url, '_blank', 'noopener noreferrer'),[data])}
            // onClick={() => window.open(data.url, '_blank', 'noopener noreferrer')}
        >
            <img src={data.thumbnailUrl}
                 alt="little photo"
                 border="1px blue solid"
            />
            <div className="text">{data.title}</div>
        </div>
    </a>
    </>
}