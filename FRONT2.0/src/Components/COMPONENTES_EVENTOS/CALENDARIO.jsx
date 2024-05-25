import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, startOfToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Calendar = ({ events = [], tasks = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showWeek, setShowWeek] = useState(false);

  const renderHeader = () => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#174728', color: '#fff', p: 1 }}>
        <IconButton onClick={prevMonth}>
          <ArrowBackIosIcon sx={{ color: '#fff' }} />
        </IconButton>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>{format(currentDate, 'MMMM', { locale: ptBR }).toUpperCase()}</span>,<span style={{ marginLeft: '5px', fontWeight: 'normal' }}>{format(currentDate, 'yyyy')}</span>
        </Typography>
        <IconButton onClick={nextMonth}>
          <ArrowForwardIosIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Box>
    );
  };

  const renderDays = () => {
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return (
      <Grid container sx={{ textAlign: 'center', bgcolor: '#fff', p: 1 }}>
        {days.map((day, index) => (
          <Grid item xs key={index}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{day}</Typography>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = showWeek ? startOfWeek(startOfToday()) : startOfWeek(monthStart);
    const endDate = showWeek ? endOfWeek(startOfToday()) : endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;

        const isEvent = events.some(event => isSameDay(event.date, cloneDay));
        const isTask = tasks.some(task => isSameDay(task.date, cloneDay));

        days.push(
          <Grid item xs key={day} sx={{ textAlign: 'center', p: 1, bgcolor: isSameMonth(day, monthStart) ? '#fff' : '#f0f0f0' }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                bgcolor: isSameDay(day, new Date()) ? '#07382E' : isEvent ? '#105F4F' : isTask ? '#1D8570' : 'inherit',
                color: isSameDay(day, new Date()) || isEvent || isTask ? '#fff' : isSameMonth(day, monthStart) ? 'inherit' : '#c0c0c0',
                fontWeight: isSameDay(day, new Date()) ? 'bold' : 'normal'
              }}
            >
              <Typography variant="body1">
                {formattedDate}
              </Typography>
            </Box>
          </Grid>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <Grid container key={day} sx={{ textAlign: 'center' }}>
          {days}
        </Grid>
      );
      days = [];
    }
    return <>{rows}</>;
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const toggleView = () => {
    setShowWeek(!showWeek);
  };

  return (
    <Box sx={{ width: '500px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0px 2px 10px rgba(0,0,0,0.1)' }}>
      {renderHeader()}
      <Box sx={{ p: 1 }}>
        {renderDays()}
        {renderCells()}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#fff', p: 1 }}>
        <IconButton onClick={toggleView}>
          <HorizontalRuleIcon sx={{ color: '#07382E' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

const App = () => {
  const events = [
    { date: new Date(2024, 4, 15) }  // Evento em 15 de maio de 2024
  ];

  const tasks = [
    { date: new Date(2024, 4, 20) }  // Tarefa em 20 de maio de 2024
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Calendar events={events} tasks={tasks} />
    </Box>
  );
};

export default App;
