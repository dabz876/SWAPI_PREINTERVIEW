import React from "react";
import axios from 'axios';

function Swapi()

{
    const [people, setData] = useState([])
            const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then((_res) => {
            console.log(_res.data);
            setData(_res.data)
          
        })
        .catch(error => {
          setError(error.message)
          
        })

      }, [])
            
}


