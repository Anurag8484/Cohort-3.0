export function MainContent(){
    return <>
    <div className="w-full">
    <div className="h-48 bg-black md:block hidden"></div>
    <div className="grid grid-cols-11 gap-8 p-8">
        <div className="h-96 rounded-2xl  bg-red-300 md:col-span-2 -translate-y-24 shadow-lg col-span-11 md:block hidden">

        </div>
        <div className="h-96 rounded-2xl shadow-lg bg-green-300 md:col-span-6 col-span-11">

        </div>
        <div className="h-96 rounded-2xl shadow-lg bg-yellow-300 md:col-span-3 col-span-11">

        </div>

    </div>
    
    
    
    </div>
    </>
}