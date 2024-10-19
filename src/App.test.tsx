import { render } from '@testing-library/react';
import {App, AppRouter} from './App';

test('renders learn react link', () => {
  render(<AppRouter>
    <App />
    </AppRouter>
  );
});
