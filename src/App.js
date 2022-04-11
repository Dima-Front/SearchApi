import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useLayoutEffect, useState} from "react";
import MyInput from "./UI/myInput/MyInput";
import {getRepo} from "./api/service";
import Cards from "./components/cards/Cards";
import {clearResAC} from "./redux/cardsActions";
import {useDebouncedCallback} from "use-debounce";



function App() {
    const dispatch = useDispatch();
    const gitResult = useSelector(state => state.cardReducer.results)


    const [search, setSearch] = useState('')
    const UseDebouncedRequest = useDebouncedCallback((search) => {
        return search ? dispatch(getRepo(search)) : null;
    }, 1000)

    useEffect(() => {
        UseDebouncedRequest(search)
        if(search === '') {
            dispatch(clearResAC())
        }
    }, [search])


    return (
        <div className='app'>

            <div className='searchBar'>
                <div className='clearButton'>
                    <button onClick={() => setSearch('')}>Clear</button>
                </div>

                <MyInput
                    placeholder='Enter words...'
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
            </div>
            <div className='cards'>

                {search.length ? <Cards repos={gitResult}/> : <h1> No results </h1>}

            </div>


        </div>

    );
}

export default App;
