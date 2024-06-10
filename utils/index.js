
//fetch user from sanity by email and password
export const userQuery = (email, password) => {
    const query = `*[_type in ["user", "business"] && email == '${email}' && password == '${password}']`;
    return query;
};
//fetch user from sanity by id 
export const userQueryById = (userId) => {
    const query = `*[_type in ["user", "business"] && _id == '${userId}']`;
    return query;
};