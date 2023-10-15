function CurrencyInput({amount, currencies}){
    return (
        <>
            <div>
                <input value={amount}  />
                <select>
                {currencies.map((currency)=>(
                   <option value={currency}>{currency}</option>
                )

                )}

                </select>
            </div>
        </>
    );
};

export default CurrencyInput;