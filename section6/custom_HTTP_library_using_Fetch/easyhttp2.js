class EasyHTTP {
    //Make an HTTP GET REQUEST
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    //Make an HTTP POST REQUEST
    post(url,data){
        return new Promise((resolve,reject)=> {
            fetch(url,{
                method:'pOST',
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    //Make an HTTP PUT REQUEST
    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }

    //Make an HTTP DELETE REQUEST
    delete(url){
        return new Promise((resolve,reject) =>{
            fetch(url,{
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Successfully Deleted'))
            .catch(error => reject(error))
        })
    }
};