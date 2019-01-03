class EasyHTTP {
    //Make an HTTP GET REQUEST
    async get(url){
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
    }

    //Make an HTTP POST REQUEST
    async post(url,data){
            const response = await fetch(url,{
                method:'pOST',
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            const resData = await response.json();
            return resData;
        }


    //Make an HTTP PUT REQUEST
    async put(url,data){
        const response = await fetch(url,{
                method: 'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            const resData = await response.json();
            return resData;
        }
    

    //Make an HTTP DELETE REQUEST
    async delete(url){
            const response = await fetch(url,{
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const resData = await 'Resource deleted';
            return resData;
        }
    
};