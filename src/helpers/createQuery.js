const createQuery = (obj) => {
    let query ='';
    if (obj.search) query = !query.length ? query+'?'+'search='+obj.search : query+'&'+'search='+obj.search;
    if (obj.searchBy) query = !query.length ? query+'?'+'searchBy='+obj.searchBy : query+'&'+'searchBy='+obj.searchBy;
    return query
};

export default createQuery;
