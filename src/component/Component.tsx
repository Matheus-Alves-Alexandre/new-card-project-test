import React from 'react'

interface Deck {
    success: string
    deck_id: string
}

export function Component(props: Deck) {
    return (
        <div>
            <strong>{props.success}</strong>
            <strong>{props.deck_id}</strong>
        </div>
    )
}
