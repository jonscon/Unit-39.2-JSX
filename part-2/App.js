function App() {
    return (
        <div>
            <Tweet 
                message="Tweet 1" 
                username="bob" 
                name="Bob" 
                date={ new Date().toDateString() }
            />
            <Tweet 
                message="Tweet 2" 
                username="jonscon" 
                name="Jon" 
                date={ new Date().toDateString() }
            />
            <Tweet 
                message="Tweet 3" 
                username="adam" 
                name="Adam" 
                date={ new Date().toDateString() }
            />
        </div>
    )
}