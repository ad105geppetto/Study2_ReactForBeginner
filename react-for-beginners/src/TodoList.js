import { useEffect, useState } from "react";

function TodoList() {
    useEffect(() => {
        // TodoList가 나타날때
        console.log('# just walk')
        return () => {
            // TodoList가 종료될때
            // Cleanup function
            console.log('shutdown')
        }
    }, [])
    return (
        <h1># just walk</h1>
    )
}

export default TodoList;