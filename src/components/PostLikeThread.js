const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

export const PostLikeThread = async (id) => {
    
    const postLikeURL = `${baseURL}/thread/${id}/like`
        const requestBody = {             
        };

        return await fetch(postLikeURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })          
  };