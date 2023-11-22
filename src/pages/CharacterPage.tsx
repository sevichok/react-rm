import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../api/characters';
import { Result } from '../utils/types';
import CardItem from '../components/CardItem';
import { Stack } from '@mui/material';

const CharacterPage: React.FC = () => {
    const [idItem, setIdItem] = useState<string | undefined>('')
    const [character, setCharacter] = useState<Result>()

    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        setIdItem(id)
        if (idItem) {
            getCharacter(+idItem).then(data => setCharacter(data))
        }
    }, [idItem, id])

    const handleBack = () => {
        navigate(`/characters`);
    };

    return (
        <Stack sx={{ alignItems: 'center' }}>
            {character && <>
                <CardItem id={character.id} name={character.name} status={character.status} image={character.image} />
                <button onClick={handleBack}>Back</button>
            </>}
        </Stack>
    )
}

export default CharacterPage