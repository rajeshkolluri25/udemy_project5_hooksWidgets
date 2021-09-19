import axios from "axios";
import React,{useState, useEffect} from "react";

const Search = () =>{
    const [debouncedTerm,setDebouncedTerm] = useState("");
    const[results,setResults] = useState([])
    // useEffect(()=>{
    //     //method 1
    //     // const search = async()=>{
    //     //     await axios.get()
    //     // };
    //     // search();
    //     //method 2
    //     // (async()=>{
    //     //     await axios.get("hello");
    //     // })();
    //     // //method 3
    //     // axios.get("hello").then((response)=>{
    //     //     console.log(response.data);
    //     })
        
    // },[term])
    console.log(results);

    useEffect(() => {
      const search = async () => {
        const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: debouncedTerm,
          },
        });
   
        setResults(data.query.search);
      };
      if (debouncedTerm) {
        search();
      }
    }, [debouncedTerm]);

      const renderedResults = results.map((result)=>{
        return(
          <div key={result.pageid} className="item">
            <div className="right floated content">
              <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>

            </div>
            <div className="content">
              <div className="header">
                {result.title}
              </div>
              <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
            </div>
            
          </div>
        )
      })
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input"
                    value={debouncedTerm}
                    onChange={(e)=>setDebouncedTerm(e.target.value)}/>

                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>

        </div>
    )
}


export default Search;