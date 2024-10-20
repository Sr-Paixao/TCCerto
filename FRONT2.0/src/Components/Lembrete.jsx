import React, { useState } from 'react';
import { CardContent, Typography, IconButton, Box } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Box1 from '../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';

const ReminderComponent = () => {
    const [reminderActive, setReminderActive] = useState(false);
    const [selectedReminder, setSelectedReminder] = useState('Desativado');

    const reminders = [
        { label: '1 Hora Antes', value: '1 Hora Antes' },
        { label: '1 Dia Antes', value: '1 Dia Antes' },
        { label: '1 Semana Antes', value: '1 Semana Antes' },
        { label: 'Desativado', value: 'Desativado' },
    ];

    const handleSelectReminder = (reminder) => {
        setSelectedReminder(reminder);
        setReminderActive(false);
    };

    return (
        <CardContent sx={{ padding: '2px 2px !important' }}> {/* Ajuste aqui o padding lateral */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1px' }}> {/* Adiciona gap para controle de espaçamento */}
            <NotificationsNoneIcon sx={{ color: '#07382E' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '100%' }}>
                Lembrete:
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <IconButton onClick={() => setReminderActive(!reminderActive)} sx={{ padding: '2px' }}>
                {selectedReminder === 'Desativado' ? (
                    <NotificationsOffIcon fontSize="small" />
                ) : (
                    <NotificationsNoneIcon fontSize="small" />
                )}
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ fontSize: '85%' }}>
                    {selectedReminder}
                </Typography>
                <IconButton onClick={() => setReminderActive(!reminderActive)}>
                    <ExpandMoreIcon fontSize="small" />
                </IconButton>
                </Box>
            </Box>
            </Box>

            {reminderActive && (
            <Box sx={{ marginTop: '8px' }}>
                {reminders.map((reminder) => (
                <Box key={reminder.value} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginY: '2px' }}>
                    <Typography variant="body2">{reminder.label}</Typography>
                    <IconButton onClick={() => handleSelectReminder(reminder.value)} sx={{ padding: '2px' }}>
                    {selectedReminder === reminder.value ? (
                        <RadioButtonCheckedIcon sx={{ color: '#07382E', fontSize: '1.2rem' }} />
                    ) : (
                        <RadioButtonUncheckedIcon sx={{ fontSize: '1.2rem' }} />
                    )}
                    </IconButton>
                </Box>
                ))}
            </Box>
            )}
        </CardContent>
    );
};

export default ReminderComponent;
