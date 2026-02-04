export const RevanueCard = ({
    title,
    orderCount,
    amount
}) => {
   return <div className="bg-white rounded shadow-md p-4">
    <div className="text-gray-700">
        {title}
        ?
    </div>

    <div className="flex justify-between pt-2">
    <div className="text-2xl font-semibold">₹ {amount}</div>
    {orderCount ? (
          <div className="text-sm flex sursor-pointer underline font-medium text-gray-500">

            <div className="text-blue-700 font-bold">
            {orderCount} order(s) 
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </div>
        ) : null}
    </div>
   </div>
}