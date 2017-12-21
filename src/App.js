import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class Panel extends React.Component {
    constructor() {
        super();
        this.state = {
            heading:"test",
            panelCollapse:"Lorem ipsum",

        };
    }

    render() {

        return (

            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            test

                        </h3>
                    </div>
                    <div id="collapse0" className="panel-collapse collapse in" aria-expanded="true">
                        <div className="panel-body">
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}


class App extends React.Component {
    constructor(){
        super();
        this.state={
            html:undefined,
            watcher: undefined,
        };
    }


    render(){

        return(
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Recipe</h3>
                    </div>
                    <div className="panel-body">
                        <div className="panel-group">

                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default App;


