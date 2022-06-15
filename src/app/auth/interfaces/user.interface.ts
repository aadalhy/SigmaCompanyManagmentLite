export interface User {
    ok:   boolean;
    msg:  string;
    cont: Cont;
}

export interface Cont {
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    _id:              string;
    blnEstado:        boolean;
    strNombre:        string;
    strApellido:      string;
    strEmail:         string;
    strContrasena:    string;
    strDireccion:     string;
    strNombreUsuario: string;
    idEmpresa:        string;
    strImagen:        string;
    _idObjRol:        string;
    __v:              number;
}
