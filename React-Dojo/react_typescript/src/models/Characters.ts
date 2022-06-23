

export interface Character {
    id: number,
    name: string,
    image: string,
    description: string
    url: string,
    thumbnail: {
        [key: string]: Thumbnail
    };
    urls: {
        [key: string]: Urls
    };
}


export interface Thumbnail {
    extension: string
    path: string
}

export interface Urls {
    url: string
}