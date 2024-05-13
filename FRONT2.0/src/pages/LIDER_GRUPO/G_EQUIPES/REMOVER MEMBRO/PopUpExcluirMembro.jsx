import React, { useState } from 'react';
import { Modal, Typography, Button, Grid, Avatar } from '@mui/material';
import PopUp3 from './POPUP_REMOVIDO';

const PopUpExcluirMembro = ({ open, handleClose, member }) => {
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup2 = () => {
        setOpenPopup(false);
    };

    // Verifica se member é null antes de acessar sua propriedade name
    const memberName = member ? member.name : '';

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
                    height: '340px',
                    borderRadius: '6px'
                }}
            >
                <Avatar 
                    alt={memberName} 
                    src={member?.avatarSrc} 
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
                    Remover Membro
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ 
                        marginTop: '5%', 
                        textAlign: 'center', 
                        fontSize: '1rem' 
                    }}
                >
                    Deseja remover o membro <Typography component="span" fontWeight="bold">{memberName}</Typography>?
                </Typography>

                <Grid 
                    container 
                    spacing={2} 
                    sx={{ 
                        marginTop: '6%',
                        mt: 1
                    }}
                >
                    <Grid item xs={6}>
                        <Button
                            onClick={handleClose}
                            fullWidth
                            variant="outlined"
                            sx={{
                                mt: 2,
                                mb: 5,
                                maxWidth: '180px',
                                backgroundColor: '#FFFFFF',
                                color: '#07382E',
                                borderColor: '#07382E',
                                '&:hover': {
                                    backgroundColor: '#07382E',
                                    color: '#FFFFFF'
                                }
                            }}
                        >
                            CANCELAR
                        </Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                                mt: 2,
                                mb: 5,
                                maxWidth: '180px',
                                backgroundColor: 'transparent',
                                color: '#FF0000',
                                borderColor: '#FF0000',
                                '&:hover': {
                                    backgroundColor: '#FF0000',
                                    color: '#FFFFFF',
                                    borderBlockColor: 'transparent'
                                }
                            }}
                            onClick={handleOpenPopup}
                        >
                            REMOVER
                        </Button>
                    </Grid>
                </Grid>

                <PopUp3 
                    open={openPopup} 
                    handleClose={handleClosePopup2} 
                />
            </div>
        </Modal>
    );
};

export default PopUpExcluirMembro;
