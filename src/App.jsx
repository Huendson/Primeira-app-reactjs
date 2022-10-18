import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';

import { Container, ListaToda, Input, Button, Li, Tarefas, Rocket, Trash } from './styles';


function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function eventoNoImput(event) {
    setInputTask(event.target.value);
  }

  function clickNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), taks: inputTask, finished: false }]);
    }
  }

  function tarefaFinalizada(id) {
    const novaLista = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(novaLista)
  }


  function excluirTarefa(id) {
    const novaLista = list.filter((item) => item.id !== id)

    setList(novaLista)

  }

  return (
    <Container>
      <ListaToda>
        <Input onChange={eventoNoImput} placeholder="O que tenho que fazer ..."></Input>
        <Button onClick={clickNoBotao}> Adicionar </Button>

        <ul>
          {list.length > 0 ? (
            list.map(item => (
              <Tarefas isFinished={item.finished} key={item.id}>
                <Rocket onClick={() => tarefaFinalizada(item.id)} />
                <Li>{item.taks}</Li>
                <Trash onClick={() => excluirTarefa(item.id)} />
              </Tarefas>
            ))
          ) : (
            <h4>Não há tarefas</h4>)}
        </ul>
      </ListaToda>
    </Container>
  )
}

export default App
