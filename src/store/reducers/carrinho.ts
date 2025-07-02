import {createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
    itens: Produto[]
}

const initialState: CarrinhoState = {
    itens: []
}


const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, actoin: PayloadAction<Produto>) => {
            const produto = actoin.payload;

            if(state.itens.find(produto => produto.id === produto.id)) {
                alert('Item ja adicionado')
            } else {
                state.itens.push(produto)
            }
        }
    }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer