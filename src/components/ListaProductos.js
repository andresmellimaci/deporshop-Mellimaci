import React from 'react'
import { Producto } from './Producto'

export const ListaProductos = () => {
    return (
        <div>
            <Producto nombre="Remera" precio={1000}></Producto>
            <Producto nombre="Buzo" precio={3000}></Producto>
        </div>
    )
}
