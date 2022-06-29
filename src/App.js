
import Header from './components/Header.js';
import JumboTron from './components/JumboTron.js';
import CardSection from './components/CardSection.js';
import IntroSection from './components/IntroSection.js';
import './scss/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <JumboTron />
            <CardSection />
            <IntroSection />
        </div>
    );
}

export default App;
