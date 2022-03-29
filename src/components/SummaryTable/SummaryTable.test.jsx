import { render, screen } from '@testing-library/react';
import SummaryTable from './SummaryTable';
import { Provider } from 'react-redux';
import { store } from '../../stateManagement';

describe('SummaryTable component testing', () => {
  it('should render SummaryTable component', () => {
    render(<Provider store={store}><SummaryTable /></Provider>)
    const summaryTable = screen.getByRole('table');
      
    expect(summaryTable).toBeEnabled();
    expect(summaryTable.classList.contains('items-summary-table')).toBeTruthy();
    expect(screen.getByText('Product item name')).toBeEnabled();
    expect(screen.getByText('Price')).toBeEnabled();
    expect(screen.getByText('Count')).toBeEnabled();
    expect(screen.getByText('Total')).toBeEnabled();
    //TODO проверки на отсутсвие отрисовки компонента, если идёт загрузка или возникла ошибка загрузки
  })
})