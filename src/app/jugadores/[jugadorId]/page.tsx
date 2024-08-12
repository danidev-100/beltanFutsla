type Props = {
    params: {
        jugadorId : string
    }

}

export default function DetalleJugador({ params }: Props)  {
        

    return (
        <div>
            <h1>hola jugador{params.jugadorId}</h1>
            {/* Aquí se listarán los jugadores */}
        </div>
    )
}