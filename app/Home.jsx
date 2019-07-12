import React from 'react';

import Header from "./Header";
import List from "./List";

class Home extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <main>
                    <p>My grocery list</p>
                    <List items={[{ id: 1, name: "eggs" }, { id: 2, name: "spam"}]}/>
                </main>
            </div>
        )
    }
}

export default Home;