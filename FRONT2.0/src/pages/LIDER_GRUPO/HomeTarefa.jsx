import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EventNoteIcon from '@mui/icons-material/EventNote';

const TaskProgressBar = ({ tasks }) => {
  const getColor = (dueDate) => {
    const today = new Date();
    const endDate = new Date(dueDate);
    const timeDiff = endDate - today;
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    
    if (daysDiff < 7) return '#f44336';
    if (daysDiff < 14) return '#ff9800';
    return '#4caf50';
  };

  const getProgress = (startDate, dueDate) => {
    const start = new Date(startDate);
    const end = new Date(dueDate);
    const today = new Date();
    const totalDuration = end - start;
    const elapsed = today - start;
    const progress = (elapsed / totalDuration) * 100;
    
    return Math.min(Math.max(progress, 0), 100);
  };

  const taskStyle = (dueDate) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: 1,
    backgroundColor: getColor(dueDate),
    padding: '6px 12px',
    margin: '8px 0',
    position: 'relative',
    overflow: 'hidden',
  });

  const progressBarStyle = (startDate, dueDate) => ({
    position: 'absolute',
    left: 0,
    width: `${getProgress(startDate, dueDate)}%`,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  });

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    left: '12px',
    transform: 'translateY(-50%)',
    zIndex: 2,
  };

  const textStyle = {
    zIndex: 2,
    marginLeft: '36px',
    color: '#000',
    fontWeight: 'bold',
    position: 'relative',
  };

  const dateStyle = {
    position: 'absolute',
    top: '50%',
    right: '12px',
    transform: 'translateY(-50%)',
    zIndex: 2,
    color: '#000',
  };

  return (
    <Box sx={{width: '100%' }}>
      {tasks.filter(task => task.concluida === 0).map((task) => (
        <Box key={task.id} sx={taskStyle(task.data_limite)}>
          <Box style={progressBarStyle(task.data_criacao, task.data_limite)} />
          {task.concluida === 1 ? (
            <CheckBoxIcon style={{ ...iconStyle, color: '#000' }} />
          ) : (
            <CheckBoxOutlineBlankIcon style={iconStyle} />
          )}
          <Typography variant="subtitle1" style={textStyle}>
            {task.titulo_tarefa}
          </Typography>
          <Box style={dateStyle}>
            <EventNoteIcon fontSize="small" />
            <Typography variant="caption" sx={{ ml: '4px' }}>
              {new Date(task.data_limite).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TaskProgressBar;