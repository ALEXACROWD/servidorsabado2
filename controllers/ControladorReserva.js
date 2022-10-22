export class ControladorReserva{
    constructor(){}

    agregarreserva(request, response){
        
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
    consultarreservas(request, response){        
        
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
    consultarreserva(request, response){        
        
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
    editarreserva(request, response){        
        
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