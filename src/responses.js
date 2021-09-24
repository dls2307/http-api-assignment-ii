const users = {};

const respondJSON = (request,response,status,object)=>{
    const headers ={
        'Content-Type':'application/json',
    };

    response.writeHead(status,headers);
    response.write(JSON.stringify(object));
    response.end();
};

const respondJSONMeta = (request,response,status) =>{
    const headers ={
        'Content-Type':'application/json',
    };

    response.writeHead(status,headers);
    response.end();
}

const getUsers = (request,response)=>{
    const responseJSON = {
        users,
    };

    return respondJSON(reuqest,response,200,responseJSON);
}

const getUsersMeta = (request,response)=>{
    const responseJSON = {
        users,
    };

    return respondJSONMeta(reuqest,response,200);
}

const addUsers = (request,response, name, age) =>{
    const newUser = {
        name:name,
        age:age,
    };

    users[newUser.name]=newUser;

    return respondJSON(request,response,201,newUser);
};