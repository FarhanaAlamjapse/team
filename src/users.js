import React, { useState } from 'react';
const User = (props)=>{
    const{name,email,picture,phone,website}=props.user;
    const{mobile,setMobile}=useState('');
    const userStyle={
        border:'2px solid red',
        margin: '10px',
        borderRadius:'10px',
        display:'flex',
        width:'40%'
    }
    const showPhone=()=>setMobile(phone);
    return (
        <div style={userStyle}>
            <div style={{margintop: '25px'}}>
                <img src={picture.large} alt=""/>
            </div>
            <div style={{marginLeft:'20px'}}>
                <h1>Name:{name.first + '' + name.last}</h1>
                <p>email:{email}</p>
                <p>email:{email}</p>
                <p><a target="_blank" href={website}>learn more</a></p>
                <p>phone:{mobile}</p>
                <button onClick={showPhone}>Show phone number</button>
                <button>Add me</button>
            </div>
        </div>
    )
}