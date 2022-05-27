import { Route, Routes } from 'react-router';

import Application from './Components/Application';
import NotFound from './Components/NotFound';
import Welcome from './Components/Welcome';

// https://mui.com/system/styled/

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      sx?: any//SxProps<Theme>;
    }
}

const App = () => {
    // <Route path="/signup" element={<SignUp />} />
    // <Route path="/signin" element={<SignIn />} />

    return (
        <>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/app/*" element={<Application />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;