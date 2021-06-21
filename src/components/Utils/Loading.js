import React from 'react'
import { Spinner } from "react-bootstrap";

export const Loading = () => {
    return (
        <div className="d-flex justify-content-center mt-150">
          <Spinner animation="border" role="status">
            <span className="sr-only">Cargando lista de productos...</span>
          </Spinner>
        </div>
    )
}
