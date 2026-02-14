import { useMyStore } from '../store/myStore'
const SummarExpenses = () => {
    const { income, expenses, balance } = useMyStore().getSummary()
    return (
        <section className="flex">
            <aside className='card'>
                <h1>Total Income</h1>
                <p className='income'>${income}</p>
            </aside>
            <aside className='card'>
                <h1>Total Expenses</h1>
                <p className='income'>${expenses}</p>
            </aside>
            <aside className='card'>
                <h1>Balance</h1>
                <p className='income'>${balance}</p>
            </aside>
        </section>
    )
}

export default SummarExpenses