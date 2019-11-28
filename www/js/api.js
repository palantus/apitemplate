class API{
    async get(path){
        return await(await fetch(`/api/${path}`)).json()
    }
    async post(path, data){
        return await(await fetch(`/api/${path}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json()
    }
    async del(path){
        return await(await fetch(`/api/${path}`, {method: "DELETE"})).json()
    }
}
var api = new API()