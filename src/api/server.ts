let token = 'a8e04599aadfd4bb17ac7b1b9c2e20c6645d315a32f06e0a'


export const serverCalls = {
    get : async () => {
        const response = await fetch(`https://burly-ethereal-beet.glitch.me/api/characters`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async(data:any) => {
        const response = await fetch(`https://burly-ethereal-beet.glitch.me/api/characters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },

    update: async (id: string, data:any) => {
        const response = await fetch(`https://burly-ethereal-beet.glitch.me/api/characters/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://burly-ethereal-beet.glitch.me/api/characters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }

}