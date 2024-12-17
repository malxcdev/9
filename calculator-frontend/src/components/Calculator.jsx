import React from 'react'

function Calculator() {
    return (
        <section className='flex justify-between p-4'>
            <div className='bg-white p-4'>
                <div>
                    <h1>Mortgage Calculator</h1>
                    <a href="#">Clear All</a>
                </div>
                <form>
                    <div>
                        <label>Mortgage Amount</label>
                        <input type="text" />
                    </div>
                    <div>
                        <div>
                            <label>Mortgage Term</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Interest Rate</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <label>Mortgage Type</label>
                        <label><input type="checkbox" name="" id="" />Repayment</label>
                        <label><input type="checkbox" name="" id="" />Interest Only</label>
                    </div>
                    <button>Calculate Repayment</button>
                </form>
            </div>
            <div>
                <img src="" alt="" />
                <h2>Result Shown Here</h2>
                <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
            </div>
        </section>
    )
}

export default Calculator