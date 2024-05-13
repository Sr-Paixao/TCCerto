import { Box, Grid, IconButton, Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const EmailBox = () => {
    const handleEmail = () => window.location.href = 'mailto:tccerto.app@outlook.com';

    return (
        <Box 
            onClick={handleEmail} 
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
                mt: 4, 
                cursor: 'pointer' 
            }}
        >
            <Grid container alignItems="center" spacing={1}>
                <Grid item>
                    <IconButton disabled>
                        <EmailOutlinedIcon 
                            sx={{ 
                                color:'#07382E',
                                marginLeft: '90%' 
                            }} 
                        />
                    </IconButton>
                </Grid>
                
                <Grid item>
                    <Typography 
                        variant="subtitle1" 
                        gutterBottom 
                        hrfe='tccerto.app@outlook.com' 
                        sx={{ 
                            marginTop: '5%', 
                            textAlign: 'center', 
                            fontWeight: 'bold', 
                            marginLeft: '20%' 
                        }}
                    >
                        tccerto.app@outlook.com
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EmailBox;
