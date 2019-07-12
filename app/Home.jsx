import React from 'react';

import Header from "./Header";

class Home extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <main>
                    some content
                </main>
            </div>
        )
    }
}

export default Home;