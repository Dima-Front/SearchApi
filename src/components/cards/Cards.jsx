import React from 'react';
import CardItem from "./CardItem";
import {useSelector} from "react-redux";
import Loader from "../../UI/myLoader/Loader";
import it from './cards.module.css'


function Cards({repos}) {
    const load = useSelector(state => state.cardReducer.isLoading)

    return (
        <div className={it.items}>
            {!load ? repos ? repos.map(repo => <CardItem key={repo.id} watchers={repo.watchers}
                                                         star={repo.stargazers_count} name={repo.name}
                                                         html_url={repo.html_url}/>) : 'нет данных' :
                <div style={{alignItems: "center", marginTop: '25px'}}><Loader/></div>}
        </div>
    );
}

export default Cards;