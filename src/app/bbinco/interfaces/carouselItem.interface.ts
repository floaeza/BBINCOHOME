export interface Item {
    title_h1:       string;
    title_span:     string;
    paragraph:      string;
    buttons:        Boton[] | null | undefined;
}

export interface Boton {
    texto: string;
    clase: string;
    enlace: string;
}