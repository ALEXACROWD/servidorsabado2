//Una clase controlador establece los métodos (Acciones) que vamos a realizar en Bd y está alineado con el archivo de rutas.

export class ControladorHabitacion{

    constructor(){}

    agregarHabitacion(request, response){
        
        try{
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }
    consultarHabitaciones(request, response){        
        
        try{
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }
    consultarHabitacion(request, response){        
        
        try{
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }
    editarHabitacion(request, response){        
        
        try{
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }
}