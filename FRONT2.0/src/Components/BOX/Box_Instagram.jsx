import { Box, Grid, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const InstagramBox = () => {
    const handleInstagram = () => window.location.href = 'https://www.instagram.com/tccerto.app';

    return (
        <Box 
            onClick={handleInstagram} 
            sx={{ 
                boxShadow:'2px 0px 12px 5px rgba(0, 0, 0, 0.1)', 
                width:'100%', 
                height: '100%', 
                borderRadius: '5px', 
                marginTop: '5%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '-10px', 
                mt: 1.5, 
                cursor: 'pointer' 
            }}
        >
            <Grid container alignItems="center" spacing={1}>
                <Grid item>
                    <IconButton disabled>
                        <InstagramIcon sx={{ color:'#07382E', marginLeft: '90%' }} />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '5%', textAlign: 'center', fontWeight: 'bold', marginLeft: '80%' }}>
                        @tccerto.app
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InstagramBox;
