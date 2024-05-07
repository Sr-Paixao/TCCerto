import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./protectedRouter";
import api from './api.js';

// Importe suas páginas aqui
import Index from "./pages/home.jsx";

import Central_Tarefa from './pages/TAREFAS/Central_Tarefas.jsx';
import Criar_Tarefa from './pages/TAREFAS/Criar_Tarefa.jsx';
import Dt_Tarefa from './pages/TAREFAS/Detalhes_Tarefa.jsx';
import Edt_Tarefa from './pages/TAREFAS/Editar_Tarefa.jsx';
import Tarefa_Concluida from './pages/TAREFAS/Tarefa_Concluida.jsx';








function App() {
    useEffect(() =>{
        api.get('usuarios').then(res=>{
            console.log(res);
        })
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>

                    <Route path="/Index" element={<Index />} />

                    <Route path='/Central_Tarefas' element={<Central_Tarefa/>}/>
                    <Route path='/Criar_Tarefa' element={<Criar_Tarefa/>}/>
                    <Route path='/Dt_Tarefa' element={<Dt_Tarefa/>}/>
                    <Route path='/Edt_Tarefa' element={<Edt_Tarefa/>}/>
                    <Route path='/Tarefa_Concluida' element={<Tarefa_Concluida/>}/>
                    

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;