export interface InfoEquipo {
    nombre?: string;
    frase?: string;
    subtitulo?: string;
    twitter?: string;
    url?: string;
}

/* al ponerles signo de interrogacion a los parametros le estamos
diciendo que son opcionales, en este caso nos vinene bien porque
así no da error cuando inicializamos una variable de este tipo asignandole
un objeto vacio en info-pagina.service.ts */
