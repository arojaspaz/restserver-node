const { request, response} = require("express")

const usuariosGet = (req= request, res = response)=>{

    const { nombre, apellido} = req.query;
    res.json({
        ok: true,
        mensaje: "Este es una petición get - CONTROLADOR",
        nombre,
        apellido
    });
}

const usuarioPost = (req = request, res=response)=>{

    const body = req.body;

    res.json({
        ok: true,
        mensaje: "Este es una petición post- Controlador",
        body
    })
}

const userPut = (req = request, res = response)=>{

    const id = req.params.id;

    res.json({
        message: "Esto es una petición put",
        id : id
    })
}

const userDelete = (req = request, res=response)=>{
    res.json({
        ok:true,
        mensaje: "Este es una petición delete - controlador"
    })
}
module.exports= {
    usuariosGet,
    usuarioPost,
    userDelete,
    userPut
};