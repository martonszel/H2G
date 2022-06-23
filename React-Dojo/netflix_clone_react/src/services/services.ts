
export const GET = async (url: string) => {


    const response = await fetch(url)

    if (!response.ok) {
        throw Error('couldnt fetch data')
    }
    return response.json()


}

