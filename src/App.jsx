import React, { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";


export default function App() {
	const[showBalance ,seToggle] = useState(false)
  const [balance, setBalance] = useState(localStorage.getItem('balance') ? +localStorage.getItem('balance'):2000);
const [transactions, setTransactions] = useState(
  localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')) : []
)
  const balanceInput = useRef();
const [Refunded ,setRefund] = useState(localStorage.getItem('refunded') === 'true' ? true : false)
const Withdraw = ()=>{

let val = balanceInput.current;
let newBalance = balance - +val.value;
if (val.value != "" && !isNaN(val.value) && +val.value > 0) {
if(+val.value <= balance)  {
(setBalance(newBalance),
toast.success("تم سحب" + val.value))
let newTransaction =   {before:  balance , amount: val.value, type: 'withdraw', after: newBalance}
let copy = [...transactions]
copy.push(newTransaction)
setTransactions(copy);
localStorage.setItem('balance', newBalance)
localStorage.setItem('transactions', JSON.stringify(copy))
}
else{
toast.error("قيمة غير صحيحة يا شحات");
}
} else {
toast.error(
"ضاعت عليك ياصاحبي مفكرانك لما تحطلي سالب فتاخد فلوس من السحب  احنا هنهزر ؟ واكتب يا حبيبي قيمه الله يرضي عليك واه احنا بنكتب ارقام يصاحبي الله يهديك",
);
}
val.value = "";
localStorage.setItem('refunded', false)
setRefund(false);
}
const Deposit = ()=>{
  let val = balanceInput.current;
  let newBalance= balance + +val.value;
            if (val.value != "" && !isNaN(val.value) && +val.value > 0) {
              setBalance(newBalance);
              toast.success("تم استلام" + val.value);
			  let newTransaction =   {before:  balance , amount: val.value, type: 'Deposit', after: newBalance}
let copy = [...transactions]
copy.push(newTransaction)
setTransactions(copy);
localStorage.setItem('balance', newBalance)
localStorage.setItem('transactions', JSON.stringify(copy))
            } else {
              toast.error(
                "انت بتفكر في ايه وانت بتكتب السالب ده شيل ايدك فوراولا الصفر اللي انت حاططهولي يا فقير و اكتب قيمه ياحبيبي لو مكتبتش واه احنا بنكتب ارقام والله",
              );
            }

            val.value = "";
			localStorage.setItem('refunded', false)
			setRefund(false);
}

const refundLastTransaction =()=>{
const lasTransaction = transactions[transactions.length -1];
setBalance(lasTransaction.before)
let copy = [...transactions];
copy.splice(-1,1);
setTransactions(copy)
  toast.success("رجعت الفلوس يمعلم");
  setRefund(true);
  localStorage.setItem('balance', lasTransaction.before)
  localStorage.setItem('refunded', true)
localStorage.setItem('transactions', JSON.stringify(copy))
}









  return (
    <div>
      <Toaster position="top-center" />
      <div className=" flex items-start  flex-col gap-4 p-9  lg:w-1/4 md:w-1/2 w-full">
        <h1 className="font-bold text-4xl md:text-2xl w-full ">Deposit / Withdraw</h1>
        <p className="text-2xl md:text-base ">Balance :  {showBalance ? balance : '-------'}</p>
		<button className="btn btn-info w-full" onClick={()=>{seToggle(!showBalance)}}>show balance</button>
        
		<input
          ref={balanceInput}
          type="text"
          className="input input-bordered transition duration-300	"
        />

        <button
          className="btn btn-success w-full "
          onClick={Deposit}
        >
          Deposit
        </button>
        <button
          className="btn btn-warning w-full "
          onClick={Withdraw}
        >
          Withdraw
        </button>
      </div>
      <div className="overflow-x-auto w-full">
         <table className=" table w-full ">
		<thead>
			<tr>
				<th>#</th>
				<th>Before</th>
				<th>Amount</th>
				<th>Withdraw/Deposit</th>
				<th>After</th>
			</tr>
		</thead>
		<tbody>
		{
			transactions.map((el,index)=>{
return (<tr key={index}>
	<td>{ index +1}</td>
	<td> {el.before}</td>
	<td>{ el.amount}</td>
	<td>{ el.type}</td>
	<td>{ el.after}</td>
{index === transactions.length - 1 && !Refunded ? (
  <td><button className="btn btn-error" onClick={refundLastTransaction}>Refund</button></td>
) : <td></td>}
</tr>)
			})
		}
		</tbody>
	  </table>
      </div>
	 
    </div>
  );
}