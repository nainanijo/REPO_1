import App from "../App"

function UserBadge({name,role}){
    //{name,role}
    //destructuring : advance feature of JS

    return(

        <div className="p-4 m-2  bg-blue-100 rounded-lg shadow-md border-blue-500 w-50 text-center">
                <h3 className="text-xl font-bold text-grey-800">{name}</h3>
                <p className="text-sm text-grey-600 uppercase tracking-wide">{role}</p>

        </div>
        
    )
}

export default UserBadge