console.log('App.js is running!');

//JSX - javascript XML
const app = {                                 //one way to dynamically render the data using JS onjects          
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
    const template =(
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit ={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
 

// const username = "Dheeraj";                  //Another way to dynamically render the data
// const userAge = 19;
// const userLocation = "Gangapur City";

// function getLocation(location) {        //condtional rendering for location property
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// //three different ways for conditional rendering 
// const templateTwo = (
//     <div>
//         <h1>{username ? username : 'Anonymous'}</h1>       
//         {(userAge && userAge >= 18) && <p>Age: {userAge}</p>}
//         {getLocation(userLocation)}    
//     </div>
// )

