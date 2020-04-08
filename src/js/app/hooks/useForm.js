import { useState } from "react";
export default () => {
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)
    const handleChange = (event) => {
        const auxValues = { ...values }
        auxValues[event.target.name] = event.target.value
        setValues(auxValues)
    }
    const handleSubmit = callback => event => {
        event.preventDefault()
        setLoading(true)
        callback()
        setLoading(false)
    }
    return [{ values, loading }, handleChange, handleSubmit]
}