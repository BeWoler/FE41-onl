import React from 'react';

function User(props:{name:string}) {
    return (
        <div>
            {props.name}
        </div>
    );
}

export default User;