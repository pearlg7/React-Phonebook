const token = '1fb254b99a4f04281c8d259fa01dd31a1365e95649c32518'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://jet-pleasant-bed.glitch.me/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://jet-pleasant-bed.glitch.me/api/contacts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer $(token)',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://jet-pleasant-bed.glitch.me/api/contacts/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer $(token)',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://jet-pleasant-bed.glitch.me/api/contacts/${id}`,
        {  
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' :'Bearer $(token)',
                'Access-Control-Allow-Origin': '*',
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}