import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./protectedRouter";
import api from './api.js';

// Importe suas páginas aqui

import Convite from './pages/CONVITE_GRUPO/Convite.jsx';
import Convite2 from './pages/CONVITE_GRUPO/Convite2.jsx';

import Index from "./pages/home.jsx";

import Central_Tarefa from './pages/TAREFAS/Central_Tarefas.jsx';
import Criar_Tarefa from './pages/TAREFAS/Criar_Tarefa.jsx';
import Dt_Tarefa from './pages/TAREFAS/Detalhes_Tarefa.jsx';
import Edt_Tarefa from './pages/TAREFAS/Editar_Tarefa.jsx';
import Tarefa_Concluida from './pages/TAREFAS/Tarefa_Concluida.jsx';

import Config from './pages/CONFIGURAÇÕES/Config.jsx';
import Relatar_Problema from './pages/CONFIGURAÇÕES/Central_Ajuda.jsx';
import Avalicao from './pages/CONFIGURAÇÕES/Avaliacao.jsx';
import Termo_2 from './pages/CONFIGURAÇÕES/Termo_2.jsx';

import Geral_Equipe from './pages/G_EQUIPES/Gerenciamento.jsx';
import Info_Equipe from './pages/G_EQUIPES/Info_Equipe.jsx';
import Edt_Equipe from './pages/G_EQUIPES/EDITAR EQUIPE/Edt_Equipe.jsx';
import Remover_Membro from './pages/G_EQUIPES/REMOVER MEMBRO/Remover_Membro.jsx';
import Desfazer_Equipe from     './pages/G_EQUIPES/DESFAZER EQUIPE/Desfazer_Equipe.jsx';

import Modelo from './pages/MODELO/Modelo.jsx';

import Orcamento from './pages/Orçamento/Orcamento.jsx';
import Area_de_atuação from './pages/Orçamento/Orçamento2.jsx';
import Horas_Trabalhadas from './pages/Orçamento/Orçamento3.jsx';
import Software_Pagos2 from './pages/Orçamento/Orçamento4.jsx';
import Orçamento_Total from './pages/Orçamento/Orçamento5.jsx';
import Dt_Orçamento from './pages/Orçamento/orçamento6.jsx';








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

                    <Route path="/Convite" element={<Convite />} />
                    <Route path="/Convite2" element={<Convite2 />} />

                    <Route path="/Index" element={<Index />} />

                    <Route path='/Central_Tarefas' element={<Central_Tarefa/>}/>
                    <Route path='/Criar_Tarefa' element={<Criar_Tarefa/>}/>
                    <Route path='/Dt_Tarefa' element={<Dt_Tarefa/>}/>
                    <Route path='/Edt_Tarefa' element={<Edt_Tarefa/>}/>
                    <Route path='/Tarefa_Concluida' element={<Tarefa_Concluida/>}/>

                    <Route path='/Config' element={<Config/>}/>
                    <Route path='/Relatar_Problema' element={<Relatar_Problema/>}/>
                    <Route path='/Avalicao' element={<Avalicao/>}/>
                    <Route path='/Termo_2' element={<Termo_2/>}/>

                    <Route path='/Geral_Equipe' element={<Geral_Equipe/>}/>
                    <Route path='/Info_Equipe' element={<Info_Equipe/>}/>
                    <Route path='/Edt_Equipe' element={<Edt_Equipe/>}/>
                    <Route path='/Remover_Membro' element={<Remover_Membro/>}/>
                    <Route path='/Desfazer_Equipe' element={<Desfazer_Equipe/>}/>

                    <Route path='/Modelo' element={<Modelo/>}/>

                    <Route path='/Orcamento' element={<Orcamento/>}/>
                    <Route path='/Area_de_atuação' element={<Area_de_atuação/>}/>
                    <Route path='/Horas_Trabalhadas' element={<Horas_Trabalhadas/>}/>
                    <Route path='/Software_Pagos2' element={<Software_Pagos2/>}/>
                    <Route path='/Orçamento_Total' element={<Orçamento_Total/>}/>
                    <Route path='/Dt_Orçamento' element={<Dt_Orçamento/>}/>


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;