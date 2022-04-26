import { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import ChatBot from './ChatBot';

export const Home = () => {

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    return (
        <Container>   
            <Box display="flex">
            </Box>
            <ChatBot/>
        </Container>
        
    )
}
