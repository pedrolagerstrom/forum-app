  const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

  export const PostLikeComment = async (id) => {
      
      const postLikeURL = `${baseURL}/comment/${id}/like`
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