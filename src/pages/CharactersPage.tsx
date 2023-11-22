import React, { useState, useEffect } from 'react';
import { Result } from '../utils/types';
import { getCharacters, getPages } from '../api/characters';
import { Box, Typography, Pagination, Stack, Grid } from '@mui/material';
import CardItem from '../components/CardItem';
import { useNavigate } from 'react-router-dom';

const CharactersPage: React.FC = () => {
    const [characters, setCharacters] = useState<Result[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(0);

    const navigate = useNavigate()

    useEffect(() => {
        getCharacters(currentPage)
            .then(data => setCharacters(data))
    }, [currentPage])

    useEffect(() => {
        getPages()
            .then(data => setPages(data))
    }, [])

    const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const handleDetailPage = (id: number) => {
        navigate(`/characters/${id}`);
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Stack sx={{ alignItems: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Basic react-app
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Current page: {currentPage}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    All pages: {pages}
                </Typography>
                <Stack sx={{ alignItems: 'center' }}>
                    <Pagination count={pages} page={currentPage} onChange={handleChangePage} variant="outlined" color="primary" />
                </Stack>
            </Stack>
            <Grid container spacing={5} sx={{ padding: '40px' }}>
                {characters.map(el => <Grid key={el.id} onClick={() => handleDetailPage(el.id)} item xs={3}>
                    <CardItem id={el.id} name={el.name} status={el.status} image={el.image} />
                </Grid>)}
            </Grid>
        </Box>
    );
}

export default CharactersPage