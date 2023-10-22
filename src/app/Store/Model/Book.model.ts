export interface Books{
    id:number,
    title:string,
    country:string,
    language:string,
    pages:string,
    author:string,
    year:string,
    status:boolean
}

export interface BookModel{
    list:Books[],
    bookobj:Books,
    errormessage:string
}