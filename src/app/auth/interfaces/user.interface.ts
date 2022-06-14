export interface User {
    ok:   boolean;
    msg:  string;
    cont: Cont;
}

export interface Cont {
    encontroUsuario: EncontroUsuario;
    token:           string;
}

export interface EncontroUsuario {
    _id:              string;
    blnEstado:        boolean;
    strNombre:        string;
    strNombreUsuario: string;
    strApellido:      string;
    strDireccion:     string;
    strEmail:         string;
    strContrasena:    string;
    idEmpresa:        string;
    strImagen:        string;
    _idObjRol:        string;
    __v:              number;
}
