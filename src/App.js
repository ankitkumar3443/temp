import Main from './components/Main'

let list_1=['Android','Blackberry','iPhone','Windows Phone']
let list_2=['Samsung','HTC','Micromax','Apple']
function App() {
  return (
    <div>
      <Main head={'Mobile Operating System'} list={list_1}/>
      <Main head={'Mobile Operating System'} list={list_2}/>

    </div>
  );
}

export default App;
