const baseUrl = 'https://www.toptal.com/developers/postbin/1660197245471-3076593505684'

export const post = async (formData) => {
    let response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });

    let result = await response.json();

    return result;
}