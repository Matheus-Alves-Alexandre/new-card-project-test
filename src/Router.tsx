import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Page } from './pages/Page'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Page />} />
        </Routes>
    )
}
