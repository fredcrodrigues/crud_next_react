export default  class Client{
    #id:string
    #name: string
    #old: number

    constructor (name: string, old: number, id: string = null){
        this.#name = name
        this.#old = old
        this.#id = id
    }

    static vazio(){
         return new Client('', 0)
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get old(){
        return this.#old
    }
}