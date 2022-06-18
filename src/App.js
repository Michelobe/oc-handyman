
import Header from './components/Header.js';
import JumboTron from './components/JumboTron.js';
import CardSection from './components/CardSection.js';
import './scss/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <JumboTron />
            <CardSection />
        </div>
    );
}

export default App;
