export interface Drawer{
    link:string,
    eng:string,
    tur:string
}

export interface Book{
    link: string,
    image: string,
    alt: string,
    large?:boolean
}

export interface Website {
    image:string,
    alt:string,
    live: string,
    code: string
}