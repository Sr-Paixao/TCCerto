import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./protectedRouter";
import api from './api.js';

// Importe suas páginas aqui

import Add_Membro from './pages/LIDER_GRUPO/G_EQUIPES/ADD_MEMBRO/Add_Membro.jsx';

import Index from "./pages/LIDER_GRUPO/home.jsx";

import Perfil_L from "./pages/LIDER_GRUPO/Perfil_L.jsx";

import Central_Tarefa from './pages/LIDER_GRUPO/TAREFAS/Central_Tarefas.jsx';
import Criar_Tarefa from './pages/LIDER_GRUPO/TAREFAS/Criar_Tarefa.jsx';
import Dt_Tarefa from './pages/LIDER_GRUPO/TAREFAS/Detalhes_Tarefa.jsx';
import Edt_Tarefa from './pages/LIDER_GRUPO/TAREFAS/Editar_Tarefa.jsx';
import Tarefa_Concluida from './pages/LIDER_GRUPO/TAREFAS/Tarefa_Concluida.jsx';

import Config from './pages/LIDER_GRUPO/CONFIGURAÇÕES/1_Config.jsx';
import Relatar_Problema from './pages/LIDER_GRUPO/CONFIGURAÇÕES/2_Central_Ajuda.jsx';
import Avalicao from './pages/LIDER_GRUPO/CONFIGURAÇÕES/3_Avaliacao.jsx';
import Termo_2 from './pages/LIDER_GRUPO/CONFIGURAÇÕES/4_Termo_2.jsx';

import Geral_Equipe from './pages/LIDER_GRUPO/G_EQUIPES/Gerenciamento.jsx';
import Info_Equipe from './pages/LIDER_GRUPO/G_EQUIPES/Info_Equipe.jsx';
import Edt_Equipe from './pages/LIDER_GRUPO/G_EQUIPES/EDITAR EQUIPE/Edt_Equipe.jsx';
import Remover_Membro from './pages/LIDER_GRUPO/G_EQUIPES/REMOVER MEMBRO/Remover_Membro.jsx';
import Desfazer_Equipe from     './pages/LIDER_GRUPO/G_EQUIPES/DESFAZER EQUIPE/Desfazer_Equipe.jsx';

import Modelo from './pages/LIDER_GRUPO/MODELO/Modelo.jsx';

import Orcamento from './pages/LIDER_GRUPO/Orçamento/1_Central_Orçamento.jsx';
import Area_de_atuação from './pages/LIDER_GRUPO/Orçamento/2_Area_de_atuação.jsx';
import Horas_Trabalhadas from './pages/LIDER_GRUPO/Orçamento/3_Horas_Trabalhadas.jsx';
import Software_Pagos2 from './pages/LIDER_GRUPO/Orçamento/4_Software_Pagos2.jsx';
import Orçamento_Total from './pages/LIDER_GRUPO/Orçamento/5_Orçamento_Total.jsx';
import Dt_Orçamento from './pages/LIDER_GRUPO/Orçamento/6_Dt_Orçamento.jsx';

import Central_Eventos from './pages/LIDER_GRUPO/CALENDARIO/Central_Eventos.jsx';
import Criar_Evento from './pages/LIDER_GRUPO/CALENDARIO/Criar_Evento.jsx';
import Dt_Evento from './pages/LIDER_GRUPO/CALENDARIO/Dt_Evento.jsx';
import Edt_Eventos from './pages/LIDER_GRUPO/CALENDARIO/Edt_Eventos.jsx';

import Central_Progresso from './pages/LIDER_GRUPO/PROGESSO/Central_Progesso.jsx'
import Criar_Etapa from './pages/LIDER_GRUPO/PROGESSO/Criar_Etapa.jsx';
import Edt_Etapa from './pages/LIDER_GRUPO/PROGESSO/Edt_Etapa.jsx';
import Documentacao from './pages/LIDER_GRUPO/PROGESSO/Documentacao.jsx';
import Pratica from './pages/LIDER_GRUPO/PROGESSO/Pratica.jsx';

                                    //MEMBRO GRUPO
import Login from './pages/MEMBRO_GRUPO/1Login/Login.jsx';
import Cadastro from './pages/MEMBRO_GRUPO/2Cadastro/Cadastro.jsx';

import Home2 from "./pages/MEMBRO_GRUPO/3Home_M/home.jsx";

import Membro_Tarefas from './pages/MEMBRO_GRUPO/4Tarefas_M/Central_Tarefas_M.jsx';
import Dt_Tarefa_M from './pages/MEMBRO_GRUPO/4Tarefas_M/Detalhes_Tarefa_M.jsx'; 
import Dt_Concluida_M from './pages/MEMBRO_GRUPO/4Tarefas_M/Tarefa_Concluida_M.jsx';

import Modelo_M from './pages/MEMBRO_GRUPO/5Modelo_M/Modelo_M.jsx';

import Config_M from './pages/MEMBRO_GRUPO/6Configurações_M/Config_M.jsx';
import Relatar_Problema_M from './pages/MEMBRO_GRUPO/6Configurações_M/Relatar_Problema_M.jsx';
import Termo_2_M from './pages/MEMBRO_GRUPO/6Configurações_M/Termo_2_M.jsx';
import Avaliacao_M from './pages/MEMBRO_GRUPO/6Configurações_M/Avaliacao_M.jsx';

import Orcamento_M from './pages/MEMBRO_GRUPO/8Orçamento_M/Orçamento_M.jsx';

import Info_Equipe_M from './pages/MEMBRO_GRUPO/7Equipe_M/Info_Equipe_M.jsx';







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

            
                    <Route path="/Add_Membro" element={<Add_Membro />} />

                    <Route path="/Index" element={<Index />} />

                    <Route path="/Perfil_L" element={<Perfil_L />} />

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

                    <Route path='/Eventos' element={<Central_Eventos/>}/>
                    <Route path='/Criar_Evento' element={<Criar_Evento/>}/>
                    <Route path='/Dt_Evento' element={<Dt_Evento/>}/>
                    <Route path='/Edt_Eventos' element={<Edt_Eventos/>}/>

                    <Route path='/Central_Progresso' element={<Central_Progresso/>}/>
                    <Route path='/Criar_Etapa' element={<Criar_Etapa/>}/>
                    <Route path='/Edt_Etapa' element={<Edt_Etapa/>}/>
                    <Route path='/Documentacao' element={<Documentacao/>}/>
                    <Route path='/Pratica' element={<Pratica/>}/>



                                            {/* //MEMBRO GRUPO  */}
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Cadastro" element={<Cadastro />} />

                    <Route path="/Home2" element={<Home2 />} />

                    <Route path="/Membro_Tarefas" element={<Membro_Tarefas />} />
                    <Route path="/Dt_Tarefa_M" element={<Dt_Tarefa_M />} />
                    <Route path="/Dt_Concluida_M" element={<Dt_Concluida_M />} />

                    <Route path="/Membro_Modelo" element={<Modelo_M />} />

                    <Route path="/Membro_Config" element={<Config_M />} />
                    <Route path="/Relatar_Problema_M" element={<Relatar_Problema_M />} />
                    <Route path="/Termo_2_M" element={<Termo_2_M />} />
                    <Route path="/Avaliacao_M" element={<Avaliacao_M />} />

                    <Route path="/Membro_Orcamento" element={<Orcamento_M />} />

                    <Route path="/Membro_Equipe" element={<Info_Equipe_M />} />




                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;