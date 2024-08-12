


import { CardDescription } from "@/components/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";



export default async function ListarJugadores() {
  const listarJugadores = await prisma.jugadores.findMany({
  
    include: {
      categoria: true,
    },
  });
  // console.log(listarJugadores);
//      const listarJugadores = await db.select().from(jugadores)
// console.log(listarJugadores)

  return (
    <>
      <main className="">
        <h1 className="flex justify-center p-5 font-medium text-3xl">
          Listado de Jugadores
        </h1>

        

        <div className="flex flex-wrap  gap-4 m-4">
          {listarJugadores.map((jugador) => (
            <Card  className="p-2" key={jugador.id}>
              <CardHeader>
                <CardTitle>
                  {jugador.nombre} {jugador.apellido}{" "}
                </CardTitle>
                <hr />
                <CardDescription className="text-yellow-600">
                Categoria {jugador.categoria?.categoria}
                </CardDescription>
              </CardHeader >
              <CardContent  className="">
                <p>Dni: {jugador.dni} </p>
           
                <hr />
                <p>Fecha de nacimiento <span className="font-sans">{jugador.fechaNacimiento}</span></p>
                <hr />
                <p >Celular: <span className="font-sans">{jugador.celular}</span></p>
              </CardContent>
              <CardFooter>
                
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
