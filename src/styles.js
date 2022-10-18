import styled from 'styled-components'

import { IoIosRocket, IoIosTrash } from "react-icons/io"

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    h4{
        display: flex;
        justify-content: center;
        cursor: default;
    }
`
export const ListaToda = styled.div`
    background: #E4E4E4;
    padding: 1.5em 1.5em;
    border-radius: 1em;

    ul{
        padding: 0;
    }
`
export const Input = styled.input`
    width: 25em;
    height: 2.5em;
    margin: 2em 2em 2em 0em;
    font-weight: 700;
`
export const Button = styled.button`
    background: #8052EC;
    border-radius: 0.5em;
    width: 8em;
    height: 2.5em;
    border: none;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: white;
    cursor: pointer;
`
export const Tarefas = styled.div`
    height: 60px;
    background: ${props => props.isFinished ? '#00F000' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 1.5em 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    cursor: default;
`
export const Li = styled.li`
    border-radius: 0.5em;
    width: 25em;
    list-style: none;
` 
export const Rocket = styled(IoIosRocket)`
    cursor: pointer;
`
export const Trash = styled(IoIosTrash)`
    cursor: pointer;
`


