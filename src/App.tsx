import './App.css';

function App() {
  return (
    <div className='h-screen flex flex-col'>
      <header>
        <h1>Financeger</h1>
      </header>
      <main className='grow pt-28 flex flex-col items-center gap-y-5'>
        <header className='w-full flex flex-col gap-y-8'>
          <div className='flex flex-col items-center'>
            <h2 className='text-3 xl'>Spent</h2>
            <strong className='text-3xl'>$5</strong>
          </div>
          <form className='flex flex-col gap-y-1'>
            <input type='text' placeholder='Write a description of expense' />
            <input type='text' placeholder='Amount... 00.00' />
            <input type='submit' className='bg-blue-400 cursor-pointer' />
          </form>
        </header>
        <section className='w-full'>
          <table className='w-full'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Computer</td>
                <td>$1'000.000</td>
              </tr>
              <tr>
                <td>Michrophone</td>
                <td>$250.000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <footer className='text-center'>Financeger - 2024</footer>
    </div>
  );
}

export default App;
