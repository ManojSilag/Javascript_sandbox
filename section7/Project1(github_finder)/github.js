class Github {
    constructor(){
        this.client_id = 'e1816290c8ba30506cb3';
        this.client_secret = '1cfce5089f621179cde1b71290fa1aefd4eb7010';
    }

    async getUser(user){
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      return {
          profile
      }
    }
}
