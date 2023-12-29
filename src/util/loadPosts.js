async function load(){
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts] = await Promise.all([postsResponse]);
    const [photos] = await Promise.all([photosResponse])

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const posts_and_photos = postsJson.map((post, index) => {return {
        ...post, img: photosJson[index].url}
    })

    return posts_and_photos
}

export default load