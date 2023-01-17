import React from 'react';
import {Link} from "react-router-dom";


function Header() {



    return (
        <div style={{width: '1280px', background: 'rgb(9,17,8)', display: 'flex', justifyContent: 'space-between'}}>
            <Link to={'/'}><img style={{width: '100px', marginLeft: '10px'}}
                                src={'https://seeklogo.com/images/K/kino-logo-517DBDC3FA-seeklogo.com.png'}/></Link>
            <menu style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: 'space-evenly',
                height: '60px',
                width: '700px',
                margin: '0px',
                textDecoration: 'none'
            }}>
                <span><Link style={{textDecoration: 'none', color: 'white'}} to={'/'}>Домой</Link></span>
                <span><Link style={{textDecoration: 'none', color: 'white'}} to={`movie/page/1`}>Фильмы</Link></span>
                <span><Link style={{textDecoration: 'none', color: 'white'}} to={'tv'}>ТВ Шоу</Link></span>
            </menu>
            <form style={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                <input style={{height: '20px'}}/>
            </form>
            <div style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: 'space-evenly'
            }}>
                <img style={{borderRadius: "50%", width: '30px', height: '30px', marginRight: '10px'}}
                     src={'https://s3.eu-central-1.amazonaws.com/img.hromadske.ua/posts/240690/homoneanderthalensis-reconstruction-musejpg/large.jpg'}/>
                <h3 style={{color: 'white', marginRight: '20px'}}>Войти</h3>
            </div>

        </div>
    );
}

export default Header;