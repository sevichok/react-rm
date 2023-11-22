import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import CharactersPage from '../pages/CharactersPage';
import CharacterPage from '../pages/CharacterPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="characters">
                <Route index element={<CharactersPage />} />
                <Route path=":id" element={<CharacterPage />} />
            </Route>
            <Route path="*" element={<Navigate to="characters" />} />
        </Routes>
    )
}

export default AppRouter