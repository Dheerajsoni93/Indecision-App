console.log('App is running!');

let Visibility = false;

const showdetails = () => {

    Visibility = !Visibility;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template =(
        <div>
            <h1>Visibility Toggle</h1> 
            
            <button onClick={showdetails}>
                {Visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {Visibility && (
                <div>
                    <p>Here is some information!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();