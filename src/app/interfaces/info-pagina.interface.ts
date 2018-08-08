export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tublr?: string;
  equipo_trabajo?: any[];
}
/* al ponerles signo de interrogacion a los parametros le estamos
diciendo que son opcionales, en este caso nos vinene bien porque
así no da error cuando inicializamos una variable de este tipo asignandole
un objeto vacio en info-pagina.service.ts */
