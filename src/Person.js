function Person(props) {

    const {personName, personLocation} = props
    //const {personLocation} = props
        
    return (
      <div >
        <h1>Person component</h1>
        <h2>The name is {personName} </h2>
        <p>I live in  {personLocation} </p>
      </div>
    );
  }
  
  export default Person;