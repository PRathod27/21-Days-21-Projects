import Header from './components/Header'
import SummarExpenses from './components/SummarExpenses'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
const App = () => {
  return (
    <main className='container'>
      <Header />
      <SummarExpenses />
      <TransactionForm />
      <TransactionList />
    </main>
  )
}

export default App