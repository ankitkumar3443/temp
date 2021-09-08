import List from './list'

function Main(props) {
    return (
        <>
        <h1>{props.head}</h1>
        {props.list.map(el=> <List list={el}/>)}
        </>
    );
  }
  
  export default Main;