import React, { useState } from 'react';
import { Modal, Typography, Button, Grid, Avatar } from '@mui/material';
import PopUpMembroAdicionado from './pop-up_add';

const PopUpAddMembro = ({ open, handleClose, member }) => {
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

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
                    Adicionar Membro
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ 
                        marginTop: '5%', 
                        textAlign: 'center', 
                        fontSize: '1rem' 
                    }}
                >
                    Deseja adicionar o membro <Typography component="span" fontWeight="bold">{memberName}</Typography>?
                </Typography>

                <Grid 
                    container 
                    spacing={2} 
                    sx={{ 
                        marginTop: '6%',
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
                                color: '#FF0000',
                                borderColor: '#FF0000',
                                '&:hover': {
                                    backgroundColor: '#FF0000',
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
                                color: '#07382E',
                                borderColor: '#07382E',
                                '&:hover': {
                                    backgroundColor: '#07382E',
                                    color: '#FFFFFF',
                                    borderBlockColor: 'transparent'
                                }
                            }}
                            onClick={handleOpenPopup}
                        >
                            ADICIONAR
                        </Button>
                    </Grid>
                </Grid>

               
                <PopUpMembroAdicionado 
                    open={openPopup} 
                    handleClose={handleClosePopup} 
                    member={member} 
                />
            </div>
        </Modal>
    );
};

export default PopUpAddMembro;
