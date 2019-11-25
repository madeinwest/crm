import React from 'react';
import app from '../api/firebase';

const Home = () => {
	return(
		<React.Fragment>
			<h1>
				Home
			</h1>
			<button
				onClick={() => app.auth().signOut()}
				>
					Sign Out
			</button>
		</React.Fragment>
	)
}

export default Home;