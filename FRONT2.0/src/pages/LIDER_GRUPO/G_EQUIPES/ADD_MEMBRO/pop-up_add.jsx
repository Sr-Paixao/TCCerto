import React, { useEffect } from 'react';
import { Modal, Typography, Grid, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PopUpMembroAdicionado = ({ open, handleClose, member }) => {
    const navigate = useNavigate();

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            navigate('/GERAL_EQUIPE');
        }, 3000);

        
        return () => clearTimeout(timeout);
    }, [navigate]);

    if (!member) return null; 

    const { name, avatarSrc } = member;

    return (
        <Modal 
            open={open} 
            onClose={handleClose}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    width: '340px',
                    borderRadius: '6px'
                }}
            >
                <Avatar 
                    alt={name} 
                    src={avatarSrc} 
                    sx={{ 
                        width: 100, 
                        height: 100, 
                        marginBottom: '10px',
                        margin: 'auto', 
                        mt: 2
                    }} 
                />

                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        mt: 2
                    }}
                >
                    Membro Adicionado
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ 
                        marginTop: '5%', 
                        textAlign: 'center', 
                        fontSize: '1rem' 
                    }}
                >
                    O membro <Typography component="span" fontWeight="bold">{name}</Typography> foi adicionado com sucesso!
                </Typography>

                <Grid 
                    container 
                    justifyContent="center"
                    sx={{ 
                        marginTop: '6%',
                    }}
                >
                </Grid>
            </div>
        </Modal>
    );
};

export default PopUpMembroAdicionado;
