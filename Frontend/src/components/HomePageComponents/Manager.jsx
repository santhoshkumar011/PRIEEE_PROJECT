import Header from "../Common/Header"
import ProjectDashboard from "../ProjectDashboard"

function Manager({data}){
    
    return (
        <div className="h-full w-full bg-red-200 flex flex-col">
            <div className="h-[15vh]">
                <Header userData={data}/>
            </div> 
            <div className="h-[90vh] w-full bg-blue-800 flex">
                    <div className="flex w-1/2 h-full bg-orange-300">
                            <ProjectDashboard 
                            userData={data}/>
                    </div>
            </div>

        </div>
    )
}

export default Manager