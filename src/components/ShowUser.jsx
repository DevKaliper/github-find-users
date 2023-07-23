

const ShowUser = ({userData, errror}) => {

    if (errror === false){
        return (
    
            <div className="card w-96 min-h-fit bg-[#655E4A] relative 2xl:-top-52 shadow-xl  glass mx-auto">
            <figure><img className="mt-3" src={userData.avatar_url} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title font-mono">
                {userData.name}
                <div className="badge badge-success font-bold">{userData.type}</div>
              </h2>
              <p className="font-mono">{userData.bio}</p>
              <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline font-mono">Public Repos: {userData.public_repos}</div> 
                <div className="badge font-mono badge-outline"> followers : {userData.followers}</div>
              </div>
              <div className="card-actions w-full justify-center mt-4">
         
                {
                    userData.blog && 
                <a href={userData.blog} target="_blank" rel="noreferrer" className="btn btn-ghost font-mono"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg> Blog
              </a> 
                }
                {
                    userData.twitter_username &&
                    <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noreferrer" className="btn btn-ghost font-mono"><svg className="invert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    Twitter
              </a> 
                    
        
                }
                 <a href={userData.repos_url} target="_blank" rel="noreferrer" className="btn btn-ghost font-mono"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
        
                    Repos
              </a> 
                    
            
              </div>
            </div>
          </div>
          )

    }
    else{
        return(
            <div className="card w-96 min-h-fit bg-[#655E4A] relative 2xl:-top-52 shadow-xl  glass mx-auto">
            <figure><img className="mt-3" src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png" alt="ERROR" /></figure>
            <div className="card-body">
              <h2 className="card-title font-mono">
                OOPS !! ERROR 404
                <div className="badge badge-success font-bold">Not Found</div>
              </h2>
          
             
            </div>
          </div>
        )
    }
  
}

export default ShowUser