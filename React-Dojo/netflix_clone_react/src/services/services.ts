
export const GET = async (url: string) => {

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw Error('couldnt fetch data')
        }
        return response.json()

    } catch (error) {
        return error
    }
}

