import axios from 'axios'
import React from 'react'

import { Component } from '../component/Component'
import { Component2 } from '../component/Component2'

export function Page() {
    axios
        .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(function (response) {
            console.log(response)
        })

    return (
        <div>
            <Component2 />
        </div>
    )
}
