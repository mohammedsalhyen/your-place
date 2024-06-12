
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
//fetch serached places
export const searchQuery = (type,place) => {
    const query = `*[_type == "business" && businessName match '${place}*' && businessType match '${type}*']`;
    return query;
};
//fetch all companies
export const searchAllCompany = () => {
    const query = `*[_type == "business"]`;
    return query;
};
//fetch all  users
export const searchAlluser = () => {
    const query = `*[_type == "user"]`;
    return query;
};

//fetch comapny from sanity by id 
export const companyQueryById = (businessId) => {
    const query = `*[_type == "business" && _id == '${businessId}']`;
    return query;
};