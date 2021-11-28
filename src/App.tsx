import { Route, Routes } from 'react-router';
import Application from './Components/Application';
import NotFound from './Components/NotFound';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Welcome from './Components/Welcome';

// https://mui.com/system/styled/

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      sx?: any//SxProps<Theme>;
    }
}

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/app/*" element={<Application />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;